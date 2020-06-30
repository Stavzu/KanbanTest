import set from "lodash/fp/set";
import get from "lodash/fp/get";
import omit from "lodash/fp/omit";
import pipe from "lodash/fp/pipe";

const addEntity = (state, entity, id) => {
  return pipe(
    set(["entities", id], entity),
    set("ids", state.ids.concat(id))
  )(state);
};

const removeEntity = (state, id) => {
  return pipe(
    omit(`entities.${id}`),
    set("ids", removeFromArray(state.ids, id))
  )(state);
};

const removeFromArray = (array, target) => array.filter((i) => i !== target);

const addIdToChild = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  return set(path, children.concat(childId), state);
};

export { addEntity, removeEntity, addIdToChild };
