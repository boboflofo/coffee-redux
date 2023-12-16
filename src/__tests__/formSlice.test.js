import formReducer, { toggleForm,setFormFalse } from "../redux/formSlice";
import { expect, describe, test } from "vitest";

describe("coffeeSlice", () => {
  test("should toggle the form state with toggleForm action", () => {
    const initialState = false;
    const updatedState = formReducer(initialState,toggleForm());
    expect(updatedState.toEqual(true))
  });
  test("should set the state to false with setFormFalse action", () => {
    const initialState = true
    const updatedState = formReducer(initialState,setFormFalse());
    expect(updatedState.toEqual(false))
  })
});