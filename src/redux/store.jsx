import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./CoffeeSlice.jsx";
import formReducer from "./formSlice.jsx"


export const store = configureStore({
  reducer: {coffee:coffeeReducer, coffeeFormMode:formReducer}
});