import coffeeReducer, { addCoffee,sellCoffee } from "../redux/CoffeeSlice";
import { expect, describe, test } from "vitest";

describe("coffeeSlice", () => {
  test("should add a coffee object to a list of coffees", () => {
    const initialState = [];
    const updatedState = coffeeReducer(initialState,addCoffee({name: "roast", price: 30}));
    expect(updatedState).toEqual([{name: "roast", price: 30}]);
  });
  test("should return the list of coffees with the specified coffee decreased by one in pounds", () => {
    const initialState = [{id:1,pounds:30}]
    const updatedState = coffeeReducer(initialState,sellCoffee({id:1, pounds:30}));
    expect(updatedState).toEqual([{id:1,pounds:29}]);
  })
});