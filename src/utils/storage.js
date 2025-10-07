// src\utils\storage.js

const isBrowser = () => typeof window !== "undefined";

export const storage = {
  get(key, fallback = null) {
    if (!isBrowser()) return fallback;
    try {
      const v = window.localStorage.getItem(key);
      if (v == null) return fallback; try { return JSON.parse(v); } catch { return v; }
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    if (!isBrowser()) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
  remove(key) {
    if (!isBrowser()) return;
    try {
      window.localStorage.removeItem(key);
    } catch {}
  },
};
