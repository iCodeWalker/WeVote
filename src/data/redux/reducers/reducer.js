import { ADD_ITEM, REMOVE_ITEM } from "../actions/actionTypes";

export const Reducer = (state = [{ id: 0, name: "first" }], action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("------", action.payload);
      return [...state, action.payload];
    case REMOVE_ITEM:
      const remainingItems = state.filter((item) => {
        return item.id !== action.payload;
      });
      return [...remainingItems];
    default:
      return state;
  }
};
