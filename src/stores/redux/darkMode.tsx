import { createSlice } from "@reduxjs/toolkit";

export type darkModeType = { val: boolean };

const initialState = { val: true };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    setDefault(state) {
      state.val = true;
    },
    switchMode(state) {
      state.val = !state.val;
    },
  },
});

export const darkModeAction = darkModeSlice.actions;

export default darkModeSlice.reducer;
