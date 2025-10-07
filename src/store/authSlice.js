// src/store/authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  login as apiLogin,
  logout as apiLogout,
  me as apiMe,
  setAuthToken,
} from "@/utils/api/handlers";
import { storage } from "@/utils/storage";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

// Read persisted token/user safely (SSR-safe guards)
const initialToken =
  typeof window !== "undefined" ? (localStorage.getItem(TOKEN_KEY) || null) : null;
const initialUser = storage.get(USER_KEY, null);

// Prime Authorization header on startup if we have a token
if (initialToken) setAuthToken(initialToken);

// ---------------- Thunks ----------------
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      // apiLogin returns either { token, user } or { data: { token, user } }
      const res = await apiLogin(payload);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchMe = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      // apiMe returns { user } or { data: { user } }
      const data = await apiMe();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await apiLogout();
  } catch {
    // ignore API logout failures; we'll still clear local state
  }
  return true;
});

// --------------- Slice ------------------
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser,
    token: initialToken,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (b) => {
    // ----- LOGIN -----
    b.addCase(login.pending, (s) => {
      s.status = "loading";
      s.error = null;
    });
    b.addCase(login.fulfilled, (s, a) => {
      s.status = "succeeded";
      const p = a.payload || {};
      const token = p.token ?? p?.data?.token ?? null;
      const user = p.user ?? p?.data?.user ?? null;

      s.token = token || null;
      s.user = user || null;

      // Persist & prime header (setAuthToken handles localStorage + axios header)
      setAuthToken(s.token);
      storage.set(USER_KEY, s.user);
    });
    b.addCase(login.rejected, (s, a) => {
      s.status = "failed";
      // Normalize error message
      const err = a.payload || a.error || {};
      s.error = err.message || "Login failed";
    });

    // ----- FETCH ME -----
    b.addCase(fetchMe.pending, (s) => {
      // keep existing status for UX; optionally set to 'loading'
      s.error = null;
    });
    b.addCase(fetchMe.fulfilled, (s, a) => {
      const u = a.payload?.user ?? a.payload?.data?.user ?? null;
      s.user = u;
      storage.set(USER_KEY, s.user);
    });
    b.addCase(fetchMe.rejected, (s, a) => {
      const err = a.payload || a.error || {};
      s.error = err.message || "Failed to fetch profile";
    });

    // ----- LOGOUT -----
    b.addCase(logout.fulfilled, (s) => {
      s.user = null;
      s.token = null;
      s.status = "idle";
      s.error = null;

      // Clear persistence
      storage.remove(USER_KEY);
      try {
        localStorage.removeItem(TOKEN_KEY);
      } catch { }

      // Clear auth header
      setAuthToken(null);
    });
  },
});

export default authSlice.reducer;

// (Optional) handy selectors
export const selectAuthUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
