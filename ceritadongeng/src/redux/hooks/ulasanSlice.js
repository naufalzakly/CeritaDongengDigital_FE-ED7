import { createSlice } from "@reduxjs/toolkit";

export const ulasanSlice = createSlice({
  name: "ulasan",
  initialState: {
    value: { email: "", nama: "", saran: "" },
  },
  reducers: {
    setUlasan: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUlasan } = ulasanSlice.actions;
export default ulasanSlice.reducer;
