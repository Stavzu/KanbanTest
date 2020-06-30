import { schema, normalize } from "normalizr";
import defaultState from "./mockData.json";

const card = new schema.Entity("cards");
const board = new schema.Entity("boards", {
  cards: [card],
});

const normalizedBoards = normalize(defaultState.boards, [board]);

export const boards = {
  entities: normalizedBoards.entities.boards,
  ids: normalizedBoards.result,
};

export const cards = {
  entities: normalizedBoards.entities.cards,
  ids: Object.keys(normalizedBoards.entities.cards),
};

export default { boards, cards };
