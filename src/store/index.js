import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import auth from "./authSlice";

export const store = configureStore({
  reducer: { auth },
  devTools: process.env.NODE_ENV !== "production",
});

// handy hooks (JS)
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
