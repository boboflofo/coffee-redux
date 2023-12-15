import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { sellCoffee ,removeCoffee} from "./../redux/CoffeeSlice";

function CoffeeDetail({coffee} ) {
  
  const dispatch = useDispatch();

  function handleDeleteCoffee() {
    dispatch(sellCoffee(coffee))
  }

  function handleSellCoffee() {
    dispatch(sellCoffee(coffee.id))
  }

  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <h3>Originally from {coffee.origin}</h3>
      <h3>${coffee.price} per pound</h3>
      <h3>{coffee.roast} roast</h3>
      <h3>{coffee.pounds} pounds</h3>
      <button onClick={() => dispatch(sellCoffee(coffee))}>Sell 1 pound</button>
      <button onClick={() => dispatch(removeCoffee(coffee.id))}>Delete Coffee</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeDetail;