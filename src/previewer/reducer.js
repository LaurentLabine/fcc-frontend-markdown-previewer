import {INPUT_UPDATED} from "./actions"

export const markdownReducer = function (state = {type: INPUT_UPDATED, text: "initialText"}, action) {
  switch (action.type) {
    case INPUT_UPDATED:
      return {type: "Input Updated",
    text : action.text};
    default:
      return {type: "initialized",
    text: state.text};
  }
};
