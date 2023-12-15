import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const playersSlice = createSlice({

  name: "players", 
  initialState: initialState, 
  reducers: {
    
    addCoffee: (state, action) => {
      

    },
  },
});

export default playersSlice.reducer; 

export const { addPlayer } = playersSlice.actions; 