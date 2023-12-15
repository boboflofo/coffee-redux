import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import CoffeeForm from "./CoffeeForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeCoffee, sellCoffee } from "./../redux/CoffeeSlice.jsx"
import { useDispatch } from "react-redux";



class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeShown: null,
      coffeeEditMode: false,
      coffeeFormMode: false,
    };
  }

  

  changeShownCoffee = (id) => {
    const shownCoffee = this.props.coffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ coffeeShown: shownCoffee });
  };


  deleteCoffeeFromList = (id) => {
    const { dispatch } = this.props;
    dispatch(removeCoffee(id));
    this.setState({
      coffeeShown: null,
    });
  };

  sellCoffeeFromList = (coffeeShown) => {
    const dispatch = useDispatch();
    dispatch(sellCoffee(coffeeShown))
  };

  handleClick = () => {
    if (this.state.coffeeShown != null) {
      this.setState({
        coffeeFormMode: false,
        coffeeShown: null
      });
    } else {
      this.setState((prevState) => ({
        coffeeFormMode: !prevState.coffeeFormMode,
      }));
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
        />
      );
    }
    else if (this.state.coffeeFormMode) {
      shownPage = <CoffeeForm />;
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
  coffeeList: PropTypes.array
}

const mapStateToProps = (state) => ({
  coffeeList: state.coffee,
});

export default connect(mapStateToProps)(CoffeeControl);
