import React from "react";

// NativeBase Components
import { List } from "native-base";

// Component
import HistoryItem from "./HistoryItem";
import { connect } from "react-redux";

const CoffeeCart = ({ history }) => {
  const historyItems = history.map((item) => (
    <HistoryItem item={item} key={`${item.drink} ${item.option}`} />
  ));

  return <List>{historyItems}</List>;
};

const mapStateToProps = (state) => ({
  history: state.cartState.history,
});

export default connect(mapStateToProps)(CoffeeCart);
