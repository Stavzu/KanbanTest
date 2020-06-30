import { boards as defaultBoards } from "../normalizeState";
import { addIdToChild, addEntity, removeEntity } from "./Utilities";
import {
  BOARD_REMOVE,
  BOARD_CREATE,
  CARD_CREATE,
} from "../actions/ActionsTypes";

const boardsReducer = (boards = defaultBoards, action) => {
  if (action.type === CARD_CREATE) {
    const { cardId, boardId } = action.payload;
    return addIdToChild(boards, boardId, "cards", cardId);
  }
  if (action.type === BOARD_CREATE) {
    const { board, boardId } = action.payload;
    return addEntity(boards, board, boardId);
  }
  if (action.type === BOARD_REMOVE) {
    const { boardId } = action.payload;
    return removeEntity(boards, boardId);
  }

  return boards;
};

export default boardsReducer;
