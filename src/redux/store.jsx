import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}, // this is where each slice of state will live
});