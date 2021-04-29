import React from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import marked from "marked";
import DOMPurify from "dompurify";
import './App.scss';
import { mapStateTextToProps, mapStateViewToProps,
         mapDispatchTextToProps, mapDispatchViewToProps } from "./actionCreators";

// convert carriage returns to become <br/ > elements
marked.setOptions({
  breaks: true
});

const BREAK_POINT = 900;

function MarkdownEditor(props){
  return (
    <textarea 
      id="editor" 
      name="editor" 
      onChange={props.changeText} 
      value={props.text}>
    </textarea>
  );
}


function MarkdownPreview(props){
  const text = props.text;
  const markedText = marked(text); // convert markdown to html
  const sanitizedPreview = DOMPurify.sanitize(markedText); // sanitize html

  return (
    <div 
      id="preview" 
      dangerouslySetInnerHTML={{__html: sanitizedPreview}}>
    </div>
  );
}


function ToggleButton(props){
  const selectView = props.viewMode === "editor" ? "preview" : "editor";
  return (
    <button 
      id="buttonToggle" 
      onClick={props.changeView}>
        {selectView}
    </button>
  );
}

// Connect all components that need to be connected to the store
const ConnectedMarkdownEditor = connect(mapStateTextToProps, mapDispatchTextToProps)(MarkdownEditor);
const ConnectedMarkdownPreview = connect(mapStateTextToProps, null)(MarkdownPreview);
const ConnectedToggleButton = connect(mapStateViewToProps, mapDispatchViewToProps)(ToggleButton);

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const viewMode = this.props.viewMode;

    return (
      <div id="app">
        <div id="markdown-container">
          <MediaQuery minWidth={BREAK_POINT + 1}>
            <ConnectedMarkdownEditor />
            <ConnectedMarkdownPreview />
          </MediaQuery>
          <MediaQuery maxWidth={BREAK_POINT}>
            {viewMode === "editor" 
              ? <ConnectedMarkdownEditor />
              : <ConnectedMarkdownPreview />}
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={BREAK_POINT}>
          <ConnectedToggleButton />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
