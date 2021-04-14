/*
 * action types
 */

export const INPUT_UPDATED = "INPUT_UPDATED"
export const EDITOR_MAXIMIZED = "EDITOR_MAXIMIZED"
export const OUTPUT_MAXIMIZED = "OUTPUT_MAXIMIZED"


/*
 * action creators
 */

export function updateInput(text) {
    console.log("updateInput called")
    return { type: INPUT_UPDATED, text };
}

export function maximizeEditor() {
    console.log("containerMaximized called")
    return { type: EDITOR_MAXIMIZED };
}

export function maximizeOutput() {
    console.log("containerMaximized called")
    return { type: OUTPUT_MAXIMIZED };
}