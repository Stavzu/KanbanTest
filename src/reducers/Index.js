import { combineReducers } from "redux";

import boards from "./BoardsReducer";
import cards from "./CardsReducer";

export default combineReducers({
  boards,
  cards,
});
