import React from "react";
import { Icon, Text } from "native-base";

// Screen Names
import { CART, HISTORY } from "../../Navigation/screenNames";
import { connect } from "react-redux";

const CartButton = ({ navigation, items }) => {
  let itemCount = 0;
  items.forEach((item) => (itemCount += item.quantity));
  return (
    <>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate(HISTORY)}
      />
      <Text>{itemCount}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate(CART)}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  items: state.cartState.items,
});

export default connect(mapStateToProps)(CartButton);
