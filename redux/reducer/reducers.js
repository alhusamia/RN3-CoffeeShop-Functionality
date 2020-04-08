import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  items: [],
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;
      let items = state.items;
      const updateItem = items.find(
        (item) => item.drink === newItem.drink && item.option === newItem.option
      );
      if (updateItem) {
        updateItem.quantity += newItem.quantity;
      } else {
        items = [...items, { ...newItem }];
      }
      return {
        ...state,
        items: [...items],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    case CHECKOUT:
      return {
        ...state,
        items: [],
        history: state.history.concat(state.items),
      };

    default:
      return state;
  }
};
