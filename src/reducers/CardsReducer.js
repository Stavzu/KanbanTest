import { cards as defaultCards } from "../normalizeState";
import { CARD_CREATE, CARD_REMOVE } from "../actions/ActionsTypes";
import { addEntity, removeEntity } from "./Utilities";

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
  }
  if (action.type === CARD_REMOVE) {
    const { cardId } = action.payload;
    return removeEntity(cards, cardId);
  }

  return cards;
};

export default cardsReducer;
