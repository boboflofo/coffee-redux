import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const playersSlice = createSlice({

  name: "players", 
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

export default playersSlice.reducer; 

export const { addPlayer } = playersSlice.actions; 