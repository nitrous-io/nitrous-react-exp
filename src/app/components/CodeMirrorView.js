import 'codemirror/lib/codemirror.css';
import '../css/CodeMirrorView.sass';
import React from 'react';
import CodeMirror from 'codemirror';

class CodeMirrorView extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.codeMirror = CodeMirror.fromTextArea(this.refs.textarea);
  }

  componentWillUnmount() {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  render() {
    return (
      <div className='CodeMirrorView'>
        <textarea ref='textarea' autoComplete='off' />
      </div>
    );
  }
}

export default CodeMirrorView;
