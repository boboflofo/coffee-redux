import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";
import { connect } from "react-redux";


function CoffeeList(props){
  return (
    <React.Fragment>
        {props.coffeeList.map((coffee) =>
          <Coffee name={coffee.name}
            showCoffee = {props.changeShownCoffee}
            origin={coffee.origin}
            price={coffee.price}
            pounds={coffee.pounds}
            key={coffee.id}
            id = {coffee.id}/>
        )}
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  coffeeList: state.coffee,
});


CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  changeShownCoffee: PropTypes.func
};

export default connect(mapStateToProps)(CoffeeList);

