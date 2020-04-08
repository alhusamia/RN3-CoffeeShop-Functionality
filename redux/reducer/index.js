import reducer from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartState: reducer,
});

export default rootReducer;
