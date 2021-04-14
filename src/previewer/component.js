import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import '../component.css'; 
const marked = require("marked");

const ContainerHeader = styled.header `
    color: #5D26C5;
    text-shadow: -1px 0 0 #000000, 1px 1px 0 #000000, 2px -1px 0 #000000, 3px 0 0 #000000;
    font-size: 46px;
    overflow: hidden;
`

const BodyContainer = styled.div `
  background: linear-gradient(to right, rgba(0,0,0,0), teal), linear-gradient(to right, rgba(255,0,100,.3), rgba(255,100,127,.2)), linear-gradient(to top right, yellow, rgba(0,0,0,0)), radial-gradient(closest-corner at 20% 80%, yellow, red);
  background-attachment: fixed;
  display: flex;
  text-align: center;
  min-width: 500px;
  height: 100vh;
`

const Container = styled.div `
display: flex;
flex-direction: column;
float: left;
width: 50%;
margin: 2rem;
`
const editorStyle = {
  boxSizing: "border-box",
  height: "50%",
  display: "flex",
  width: "80%",
  margin: "0 auto",
  paddingLeft: "20px",
  border: "none",
  marginTop: "4rem"
  
}

const previewStyle = {
  textAlign: "left",
  margin: "30px",
  padding: "10px",
  height: "70vh",
  overflow: "auto",
  marginTop: "4rem",
  border: "1px solid black"
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
        <Container><ContainerHeader class="castellar">Markup goes Here!</ContainerHeader>        
          <Editor input={this.props.text} onChange = {() => this.props.inputChanged(document.getElementById("editor").value)}/>
        </Container>
        <Container>
          <ContainerHeader class="castellar">Check this out!</ContainerHeader>
          <Preview input={this.props.text} />
        </Container>
        </BodyContainer>
        );
    }
}