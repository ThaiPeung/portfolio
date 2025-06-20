import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "./redux/darkMode";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
