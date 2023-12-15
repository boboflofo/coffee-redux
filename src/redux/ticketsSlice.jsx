import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const playersSlice = createSlice({

  name: "players", 
  initialState: initialState, 
  reducers: {
    
    addCoffee: (state, action) => {
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
          const newState = { ...state };
    delete newState[id];
    return newState;
        }
      });

    },
  },
});

export default playersSlice.reducer; 

export const { addPlayer } = playersSlice.actions; 