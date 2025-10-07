// src\utils\api\client.js

import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "";

/** Single Axios instance for the whole app */
export const api = axios.create({
  baseURL,
  withCredentials: false, // keep if you use cookie auth (e.g., Laravel Sanctum)
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

// ---- Bearer token support (if you use token auth) ----
let bearerToken = null;
export const setBearerToken = (token) => {
  bearerToken = token || null;
};

api.interceptors.request.use(
  (config) => {
    if (bearerToken) config.headers.Authorization = `Bearer ${bearerToken}`;
    return config;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Normalize error shape
    const norm =
      error?.response?.data ||
      { message: error?.message || "Network error", status: error?.status };
    return Promise.reject(norm);
  }
);
