import { combineReducers } from "redux";
import cards from "./cards/reducer";
import form from "./form/reducer";
import ranking from "./ranking/reducer";

const reducers = combineReducers({
  cards,
  form,
  ranking
});

export default reducers;
