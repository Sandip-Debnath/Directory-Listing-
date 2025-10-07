// src\utils\api\handlers.js

import { api } from "./client";

// ------- Base URL (from .env.local) -------
const BASE_URL =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "")) ||
  "";


// ------- Token helpers (optional) -------
const TOKEN_KEY = "auth_token";
let _token = null;

export const setAuthToken = (t) => {
  _token = t || null;
  try {
    if (t) localStorage.setItem("auth_token", t);
    else localStorage.removeItem("auth_token");
  } catch { }
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
      // FormData (for file uploads, etc.)
      payload = body instanceof FormData ? body : (() => {
        const fd = new FormData();
        Object.entries(body).forEach(([k, v]) => fd.append(k, v));
        return fd;
      })();
      // don't set Content-Type; browser will set boundary
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
  const data = ct.includes("application/json") ? await res.json().catch(() => null) : await res.text();

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

// ------- Auth endpoints -------
export const register = (payload) =>
  post("/register", payload, { auth: false });

export const login = async (payload) => {
  const { data } = await api.post("/login", payload); // or "/login" if that's your real path
  // backend returns { success, message, data: { user, token } }
  return data?.data ?? data; // -> { user, token }
};

export const logout = (token) =>
  post("/logout", { token }, { auth: false });

export const updateUser = (payload) => {
  const { token, ...clean } = payload || {};
  return post("/update-user", clean, { auth: true });
};

export const changePassword = (payload) =>
  post("/change-password", payload, { auth: true })


export const getCountries = (params = {}) =>
  get("/countries", { params }); // if auth is needed: { params, auth:true }

export const getStates = (params = {}) =>
  get("/states", { params });

export const getStatesByCountry = (country_id) =>
  get("/states-by-country", { params: { country_id } });

export const getCities = (params = {}) =>
  get("/city-by-states", { params });

export const getCategories = async () => {
  const r = await get("/categories");      // -> { success, data: [...] }
  return r?.data ?? [];
};

export const getTags = async (page = 1, per_page = 25) => {
  const r = await get("/tags", { params: { page, per_page } }); // -> { success, data: { data:[...] } }
  return r?.data?.data ?? [];
};


// --- Create Listing (multipart, with arrays + files) ---
export const createListing = async (payload = {}) => {
  // Build FormData manually so arrays/files are appended correctly.
  const fd = new FormData();

  const appendIf = (k, v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string" && v.trim() === "") return;
    fd.append(k, v);
  };

  // Basic / contact / location / socials
  [
    "listing_title", "slug", "description",
    "address", "zipcode", "country_id", "state_id", "city_id",
    "lat", "long",
    "mobile", "email", "company_website",
    "fb_link", "twitter_link", "insta_link", "linkedin_link",
  ].forEach((k) => appendIf(k, payload[k]));

  // Opening hours
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  days.forEach((d) => {
    appendIf(`${d}_open_time`, payload[`${d}_open_time`]);
    appendIf(`${d}_close_time`, payload[`${d}_close_time`]);
  });

  // Arrays (repeat keys with [] for typical Laravel-style parsing)
  if (Array.isArray(payload.category_ids)) {
    payload.category_ids.forEach((id) => appendIf("category_ids[]", String(id)));
  }
  if (Array.isArray(payload.tag_ids)) {
    payload.tag_ids.forEach((id) => appendIf("tag_ids[]", String(id)));
  }

  if (Array.isArray(payload.tag_names)) {
    payload.tag_names.forEach((name) => appendIf("tag_names[]", name));
  }

  // Files (multiple)
  if (Array.isArray(payload.images)) {
    payload.images.forEach((file) => {
      if (file instanceof Blob) fd.append("images[]", file);
    });
  }

  // POST with auth + multipart
  return http("/listing/create", {
    method: "POST",
    body: fd,
    form: true,    // don't set Content-Type; browser will add boundary
    auth: true,    // adds Bearer token
  });
};



// ------- Listings (examples) -------
export const getListings = (params = {}) =>
  get("/listings", { params, auth: true });

export const getListing = (id) =>
  get(`/listings/${id}`, { auth: true });

export const updateListing = (id, payload) =>
  put(`/listings/${id}`, payload, { auth: true });

export const deleteListing = (id) =>
  del(`/listings/${id}`, { auth: true });

// Optionally expose the base for debugging
export const API_BASE = BASE_URL;
