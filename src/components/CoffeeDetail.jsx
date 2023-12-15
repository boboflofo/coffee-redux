import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { sellCoffee } from "./../redux/CoffeeSlice";

function CoffeeDetail({coffee,toggleCoffee} ) {
  
  const dispatch = useDispatch();

  function handleSellCoffee() {
    dispatch(sellCoffee(coffee))
  }


  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <h3>Originally from {coffee.origin}</h3>
      <h3>${coffee.price} per pound</h3>
      <h3>{coffee.roast} roast</h3>
      <h3>{coffee.pounds} pounds</h3>
      <button onClick={handleSellCoffee}>Sell 1 pound</button>
  
      <button onClick={toggleCoffee}>Return to Home</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  toggleCoffee: PropTypes.func
};

export default CoffeeDetail;