import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./CoffeeSlice.jsx";

export const store = configureStore({
  reducer: {coffee:coffeeReducer}, 
});