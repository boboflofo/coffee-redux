import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import CoffeeForm from "./CoffeeForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {toggleForm , setFormFalse} from "./../redux/formSlice.jsx";



class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeShown: null,
    };
  }

  toggleCoffeeShown = () => {
    this.setState({
      coffeeShown: null,
    });
  }


  changeShownCoffee = (id) => {
    const shownCoffee = this.props.coffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ coffeeShown: shownCoffee });
  };


  handleClick = () => {
    if (this.state.coffeeShown != null) {
      this.setState({
        coffeeShown: null
      });
      this.props.setFormFalse(); 
    } else {
      this.props.toggleForm(); 
    }
  };

  render() {
    let shownPage = null;
    let buttonText = null;



    if (this.state.coffeeShown != null) {
      shownPage = (
        <CoffeeDetail
          coffee={this.state.coffeeShown}
          handleSell={this.sellCoffeeFromList}
          handleDelete = {this.deleteCoffeeFromList}
          toggleCoffee = {this.toggleCoffeeShown}
        />
      );
    }
    else if (this.props.coffeeFormMode) {
      shownPage = <CoffeeForm toggleForm = {this.toggleFormMode}/>;
      buttonText = "Return to Coffee Display";
    }  else {
      buttonText = "Add Coffee to List";
      shownPage = (
        <CoffeeList
          coffeeList={this.props.coffeeList}
          changeShownCoffee={this.changeShownCoffee}
        />
      );
    }

    return (
      <React.Fragment>
        {shownPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

CoffeeControl.propTypes = {
  coffeeList: PropTypes.array,
  coffeeFormMode: PropTypes.bool,
  toggleForm: PropTypes.func,
  setFormFalse: PropTypes.func,
};

const mapStateToProps = (state) => ({
  coffeeList: state.coffee,
  coffeeFormMode: state.coffeeFormMode
});

const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => dispatch(toggleForm()),
  setFormFalse: () => dispatch(setFormFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeControl);
