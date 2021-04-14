import { connect } from 'react-redux';
import { MarkdownPreviewer } from './component'
import { updateInput, maximizeEditor, maximizeOutput } from "./actions";


const mapStateToProps = state => {
    console.log("MapState called")
    return {
        text: state.text,
        editorMaximized: state.editorMaximized,
        outputMaximized: state.outputMaximized,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        inputChanged: (data) => dispatch(updateInput(data)),
        editorMaximized: (data) => dispatch(maximizeEditor(data)),
        outputMaximized: (data) => dispatch(maximizeOutput(data)),
    }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);