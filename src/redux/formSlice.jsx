import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const formSlice = createSlice({

  name: "form", 
  initialState: initialState, 
  reducers: {
    toggleForm: (state, action) => {
      return !state;
    },
    setFormFalse: (state,action) => {
      return false;
    },

}});

export default formSlice.reducer; 

export const formSelector = (state) => state.form

export const { toggleForm, setFormFalse} = formSlice.actions; 