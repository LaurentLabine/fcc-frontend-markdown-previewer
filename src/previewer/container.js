import { connect } from 'react-redux';
import { MarkdownPreviewer } from './component'
import { updateInput } from "./actions";
import marked from "marked"


const mapStateToProps = state => {
    return {
        text: marked(state.text)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        inputChanged: (data) => dispatch(updateInput(data)),
    }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);