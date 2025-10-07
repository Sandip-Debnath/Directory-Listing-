// src/utils/api/handlers.js

import { api } from "./client";

// ------- Base URL (from .env.local) -------
const BASE_URL =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "")) ||
  "";

// ------- Token helpers -------
const TOKEN_KEY = "auth_token";
let _token = null;

export const setAuthToken = (t) => {
  _token = t || null;

  // Persist (SSR-safe)
  try {
    if (t) localStorage.setItem(TOKEN_KEY, t);
    else localStorage.removeItem(TOKEN_KEY);
  } catch { }

  // IMPORTANT: also set/remove Axios default header
  if (_token) {
    api.defaults.headers.common.Authorization = `Bearer ${_token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

const getAuthToken = () => {
  if (_token) return _token;
  try {
    _token = localStorage.getItem(TOKEN_KEY);
  } catch { }
  return _token;
};

// ------- Core HTTP helper (fetch) -------
const buildUrl = (path, params) => {
  const u = new URL(`${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`);
  if (params && typeof params === "object") {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) u.searchParams.append(k, v);
    });
  }
  return u.toString();
};

const http = async (
  path,
  { method = "GET", body, params, headers = {}, auth = false, form = false } = {}
) => {
  const url = buildUrl(path, params);

  const h = new Headers({
    Accept: "application/json",
    ...headers,
  });

  let payload = undefined;

  if (body !== undefined && body !== null) {
    if (form) {
      const fd =
        body instanceof FormData
          ? body
          : (() => {
            const f = new FormData();
            Object.entries(body).forEach(([k, v]) => f.append(k, v));
            return f;
          })();
      payload = fd; // let browser set boundary
    } else {
      h.set("Content-Type", "application/json");
      payload = JSON.stringify(body);
    }
  }

  if (auth) {
    const t = getAuthToken();
    if (t) h.set("Authorization", `Bearer ${t}`);
  }

  const res = await fetch(url, {
    method,
    headers: h,
    body: payload,
    cache: "no-store",
  });

  const ct = res.headers.get("content-type") || "";
  const data = ct.includes("application/json")
    ? await res.json().catch(() => null)
    : await res.text();

  if (!res.ok) {
    const message = (data && (data.message || data.error)) || `HTTP ${res.status}`;
    const err = { status: res.status, message, data };
    throw err;
  }
  return data;
};

// ------- Shorthand methods -------
const get = (path, options) => http(path, { method: "GET", ...(options || {}) });
const post = (path, body, options) => http(path, { method: "POST", body, ...(options || {}) });
const put = (path, body, options) => http(path, { method: "PUT", body, ...(options || {}) });
const del = (path, options) => http(path, { method: "DELETE", ...(options || {}) });

// ------- Auth endpoints (named exports expected by authSlice) -------
export const login = async (payload) => {
  // Using Axios instance for login
  const res = await api.post("/login", payload);
  const data = res?.data;

  // Normalize and prime token for subsequent calls
  const token = data?.token ?? data?.data?.token ?? null;
  if (token) setAuthToken(token);

  // Slice can handle { token, user } or { data: { token, user } }
  return data?.data ?? data;
};

export const me = async () => {
  // Use fetch helper with Bearer header
  // Return whatever backend sends; slice reads .user or .data.user
  return get("/me", { auth: true });
};

export const logout = async () => {
  // Try API logout; always clear local token/header
  try {
    // Either via fetch helper with auth:
    await post("/logout", null, { auth: true });
    // (or use axios: await api.post('/logout'); — either is fine)
  } catch { }
  setAuthToken(null);
  return { success: true };
};

// ------- Other endpoints (unchanged) -------
export const register = (payload) => post("/register", payload, { auth: false });

export const updateUser = (payload) => {
  const { token, ...clean } = payload || {};
  return post("/update-user", clean, { auth: true });
};

export const changePassword = (payload) =>
  post("/change-password", payload, { auth: true });

export const getCountries = (params = {}) => get("/countries", { params });
export const getStates = (params = {}) => get("/states", { params });
export const getStatesByCountry = (country_id) =>
  get("/states-by-country", { params: { country_id } });
export const getCities = (params = {}) => get("/city-by-states", { params });

export const getCategories = async () => {
  const r = await get("/categories");
  return r?.data ?? [];
};

export const getTags = async (page = 1, per_page = 25) => {
  const r = await get("/tags", { params: { page, per_page } });
  return r?.data?.data ?? [];
};

// --- Create Listing (multipart) ---
export const createListing = async (payload = {}) => {
  const fd = new FormData();
  const appendIf = (k, v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string" && v.trim() === "") return;
    fd.append(k, v);
  };

  [
    "listing_title", "slug", "description",
    "address", "zipcode", "country_id", "state_id", "city_id",
    "lat", "long",
    "mobile", "email", "company_website",
    "fb_link", "twitter_link", "insta_link", "linkedin_link",
  ].forEach((k) => appendIf(k, payload[k]));

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  days.forEach((d) => {
    appendIf(`${d}_open_time`, payload[`${d}_open_time`]);
    appendIf(`${d}_close_time`, payload[`${d}_close_time`]);
  });

  if (Array.isArray(payload.category_ids)) {
    payload.category_ids.forEach((id) => appendIf("category_ids[]", String(id)));
  }
  if (Array.isArray(payload.tag_ids)) {
    payload.tag_ids.forEach((id) => appendIf("tag_ids[]", String(id)));
  }
  if (Array.isArray(payload.tag_names)) {
    payload.tag_names.forEach((name) => appendIf("tag_names[]", name));
  }
  if (Array.isArray(payload.images)) {
    payload.images.forEach((file) => {
      if (file instanceof Blob) fd.append("images[]", file);
    });
  }

  return http("/listing/create", {
    method: "POST",
    body: fd,
    form: true,
    auth: true,
  });
};

// Optionally expose the base for debugging
export const API_BASE = BASE_URL;
