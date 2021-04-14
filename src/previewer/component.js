import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import '../component.css'; 
const marked = require("marked");

const Toolbar = styled.div`
${'' /* background-color: white; */}
height: 3rem;
`

const BodyContainer = styled.div `
  background: linear-gradient(to right, rgba(0,0,0,0), teal), linear-gradient(to right, rgba(255,0,100,.3), rgba(255,100,127,.2)), linear-gradient(to top right, yellow, rgba(0,0,0,0)), radial-gradient(closest-corner at 20% 80%, yellow, red);
  background-attachment: fixed;
  display: flex;
  padding-top: 4rem;
  text-align: center;
  padding-bottom : 10rem;
  min-width: 500px;
`

const Container = styled.div `
display: flex;
flex-direction: column;
float: left;
width: 50%;
${'' /* border: 5px solid red; */}
margin: 2rem;
`
const editorStyle = {
  boxSizing: "border-box",
  height: "50%",
  display: "flex",
  width: "100%",
  margin: "0 auto",
  width: "100%",
  paddingLeft: "20px",
  border: "none"
  
}

const previewStyle = {
  textAlign: "left",
  margin: "30px"
}

marked.setOptions({
  breaks: true
});

const Preview = props => {
  return (
    <div style={previewStyle}
      dangerouslySetInnerHTML={{
        __html: marked(props.input)
      }}
      id='preview'
    />
  );
};

const Editor = props => {
  return (
    <textarea style={editorStyle}
    onChange={props.onChange}
    value= {props.input}
      id='editor'
    />
  );
};

export class MarkdownPreviewer extends React.Component {    
    render() {
        return ( 
        <BodyContainer>  
        <Container>
          <Toolbar><h1>Write in this!</h1>
          </Toolbar>         
          <Editor input={this.props.text} onChange = {() => this.props.inputChanged(document.getElementById("editor").value)}/>
        </Container>
        <Container>
          <Toolbar>
          <h1>Check out what happens here!</h1>
          </Toolbar>
          <Preview input={this.props.text} />
        </Container>
        </BodyContainer>
        );
    }
}