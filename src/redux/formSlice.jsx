import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const formSlice = createSlice({

  name: "form", 
  initialState: initialState, 
  reducers: {
    toggleForm: (state) => {
      return !state;
    },
    setFormFalse: () => {
      return false;
    },

}});

export default formSlice.reducer; 

export const { toggleForm, setFormFalse} = formSlice.actions; 