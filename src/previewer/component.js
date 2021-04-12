import React from 'react';
import styled from 'styled-components';
const marked = require("marked");

const InputArea = styled.textarea`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    height:230px; 
    border: 1px solid #888; 
    width: 80%;
`

const OutputDiv = styled.div`
background-color: blue;

`

const ContainerDiv = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

marked.setOptions({breaks:true})

const initialText = '# Header\n## Subheader\n[links](https://www.freecodecamp.com)\n' +
'This is inline `code`\n```\n // This is a code Block:\n```\n' +
'1. First ordered list item\n2. Another item\n⋅⋅* Unordered sub-list.\n' +
'> Block Quotes!\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n**bolded text**';

export class MarkdownPreviewer extends React.Component{
  componentDidMount() {
    document.getElementById("editor").value = initialText;
    this.props.inputChanged(document.getElementById("editor").value);
  }

  componentDidUpdate() {
    document.getElementById("preview").innerHTML = this.props.text;
  }



  render() {
    return(
      <ContainerDiv>
        <InputArea id="editor" onChange={() => this.props.inputChanged(document.getElementById("editor").value)} />

        <OutputDiv id="preview" /> 
      </ContainerDiv>

    );
  }
}