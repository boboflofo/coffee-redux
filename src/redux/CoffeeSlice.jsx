import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const coffeeSlice = createSlice({

  name: "coffee", 
  initialState: initialState, 
  reducers: {
    
    addCoffee: (state, action) => {
      state.push(action.payload);
    },
    removeCoffee: (state, action) => {
      return state.filter((coffee) => coffee.id !== action.payload);
    },
    sellCoffee: (state,action) => {
      return state.map((coffee) => {
        if (coffee.id === action.payload.id && coffee.pounds > 0) {
          return { ...coffee, pounds: coffee.pounds - 1 };
        }
        return coffee;
    })
  },
}});

export default coffeeSlice.reducer; 

export const coffeeSelector = (state) => state.coffee

export const { addCoffee, sellCoffee, removeCoffee} = coffeeSlice.actions; 