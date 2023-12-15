import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./coffeeSlice.jsx";

export const store = configureStore({
  reducer: {coffee:coffeeReducer}, 
});