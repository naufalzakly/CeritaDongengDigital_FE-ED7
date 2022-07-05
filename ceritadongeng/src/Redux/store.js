import { configureStore } from '@reduxjs/toolkit';
import ulasanReducer from './Hooks/ulasanSlice';

export const store = configureStore({
  reducer: {
    ulasan: ulasanReducer
  }
});
