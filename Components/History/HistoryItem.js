import React from "react";

// NativeBase Components
import { Text, Left, Body, ListItem } from "native-base";

// Style
import styles from "./styles";

const HistoryItem = ({ item }) => (
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
  </ListItem>
);

export default HistoryItem;
