import { configureStore } from "@reduxjs/toolkit";
import ulasanReducer from "./hooks/ulasanSlice";

export const store = configureStore({
  reducer: {
    ulasan: ulasanReducer,
  },
});
