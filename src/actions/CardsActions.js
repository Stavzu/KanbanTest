import { CARD_CREATE, CARD_REMOVE } from "./ActionsTypes";

const defaultCardsData = {
  title: "",
  description: "",
};

export const createCard = (boardId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultCardsData,
    ...cardData,
  };
  return {
    type: CARD_CREATE,
    payload: { card, boardId, cardId },
  };
};

export const removeCard = (cardId, boardId) => {
  return {
    type: CARD_REMOVE,
    payload: { cardId, boardId },
  };
};
