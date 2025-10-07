// src\store\authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login as apiLogin, logout as apiLogout, me as apiMe } from "@/utils/api/handlers";
import { storage } from "@/utils/storage";
import { setAuthToken } from "@/utils/api/handlers";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

const initialToken = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
const initialUser = storage.get(USER_KEY, null);
if (initialToken) setAuthToken(initialToken);

// Thunks
export const login = createAsyncThunk("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const data = await apiLogin(payload); // { token?, user }
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const fetchMe = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    const data = await apiMe(); // { user }
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { getState }) => {
  try { await apiLogout(); } catch { }
  return true;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser,
    token: initialToken,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (b) => {
    b
      // login
      .addCase(login.pending, (s) => { s.status = "loading"; s.error = null; })
      .addCase(login.fulfilled, (s, a) => {
        s.status = "succeeded";
        const p = a.payload || {};
        const token = p.token ?? p?.data?.token ?? null;
        const user = p.user ?? p?.data?.user ?? null;
        s.token = token || null;
        s.user = user || null;
        setAuthToken(s.token);
        storage.set(USER_KEY, s.user);
      })
      .addCase(fetchMe.fulfilled, (s, a) => {
        const u = a.payload?.user ?? a.payload?.data?.user ?? null;
        s.user = u;
        storage.set(USER_KEY, s.user);
      })
      // logout
      .addCase(logout.fulfilled, (s) => {
        s.user = null;
        s.token = null;
        storage.remove(USER_KEY);
        try { localStorage.removeItem(TOKEN_KEY); } catch {}
        setAuthToken(null);
      });
  },
});

export default authSlice.reducer;
