import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const addItem = (data) => {
  console.log(data);
  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export const removeItem = (data) => {
  return {
    type: REMOVE_ITEM,
    payload: data,
  };
};
