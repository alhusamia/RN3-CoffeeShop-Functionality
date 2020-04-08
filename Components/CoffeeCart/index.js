import React from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { checkoutCart } from "../../redux/actions";

const CoffeeCart = ({ items, checkout, history }) => {
  

  let cartItems = items.map((item) => (
    <CartItem item={item} key={`${item.drink} ${item.option}`} />
  ));

  if (!cartItems.length)
    cartItems = (
      <Button full dark style={{ width: 480, height: 480 }}>
        <Text>Feed Me PLease !!!!</Text>
      </Button>
    );
  return (
    <List>
      {cartItems}
      <Button full danger onPress={() => checkout()}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

const mapStateToProps = (state) => ({
  items: state.cartState.items,
  history: state.cartState.history,
});
const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch(checkoutCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
