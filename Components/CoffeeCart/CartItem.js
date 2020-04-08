import React from "react";
import { removeItemFromCart } from "../../redux/actions";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";
import { connect } from "react-redux";

const CartItem = ({ item, removeItem }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}> {item.drink} </Text>
      <Text note style={styles.option}>
        {item.option}
      </Text>
    </Left>
    <Body>
      <Text style={styles.quantity}>{item.quantity}</Text>
    </Body>
    <Right>
      <Button transparent onPress={() => removeItem(item)}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </Right>
  </ListItem>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
