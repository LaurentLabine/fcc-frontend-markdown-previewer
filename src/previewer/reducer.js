import { INPUT_UPDATED, EDITOR_MAXIMIZED, OUTPUT_MAXIMIZED } from "./actions"

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export const markdownReducer = function(state = { type: INPUT_UPDATED, text: initialText, editorMaximized: false, outputMaximized: false }, action) {
    switch (action.type) {
        case INPUT_UPDATED:
            console.log("Input_Updated")
            return {
                type: "Input Updated",
                text: action.text
            };
        case EDITOR_MAXIMIZED:
            console.log("EDITOR_MAXIMIZED ")
            return {
                type: "Container Maximized",
                outputMaximized: false,
                editorMaximized: true
            };
        case OUTPUT_MAXIMIZED:
            console.log("OUTPUT_MAXIMIZED ")
            return {
                type: "Container Maximized",
                editorMaximized: false,
                outputMaximized: true
            };
        default:
            return {
                type: "initialized",
                text: state.text,
                editorMaximized: false,
                outputMaximized: false
            };
    }
};