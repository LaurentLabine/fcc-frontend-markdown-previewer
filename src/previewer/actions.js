/*
 * action types
 */

export const INPUT_UPDATED = "INPUT_UPDATED"

/*
 * action creators
 */

export function updateInput(text) {
    return {type: INPUT_UPDATED, text};
  }