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
      return state.filter((player) => player.name !== action.payload);
    },
  },
});

export default coffeeSlice.reducer; 

export const coffeeSelector = (state) => state.coffee

export const { addCoffee } = coffeeSlice.actions; 