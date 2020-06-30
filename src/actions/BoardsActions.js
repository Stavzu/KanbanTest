import { BOARD_CREATE, BOARD_REMOVE } from "./ActionsTypes";

const defaultBoardData = {
  title: "",
  cards: [],
};

export const createBoard = (boardData) => {
  const boardId = Date.now().toString();
  const board = {
    id: boardId,
    ...defaultBoardData,
    ...boardData,
  };
  return {
    type: BOARD_CREATE,
    payload: { board, boardId },
  };
};

export const removeBoard = (boardId) => {
  return {
    type: BOARD_REMOVE,
    payload: { boardId },
  };
};
