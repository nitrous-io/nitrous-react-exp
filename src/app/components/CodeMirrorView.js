import 'codemirror/lib/codemirror.css';
import '../css/CodeMirrorView.sass';
import '../css/codemirror/base16-ocean-dark.css';
import React, {PropTypes} from 'react';
import CodeMirror from 'codemirror';

class CodeMirrorView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onCodeMirrorChange = this.onCodeMirrorChange.bind(this);
  }

  componentDidMount() {
    const cm = this.codeMirror = CodeMirror.fromTextArea(this.refs.textarea, {theme: 'base16-ocean-dark'});
    cm.on('change', this.onCodeMirrorChange);
  }

  componentWillUnmount() {
    const cm = this.CodeMirror;
    if (cm) {
      cm.off('change', this.onCodeMirrorChange);
      cm.toTextArea();
    }
  }

  onCodeMirrorChange(cm, change) {
    const {onTextChange} = this.props;
    if (typeof onTextChange === 'function' && change.origin !== 'setValue') {
      onTextChange(cm.getValue());
    }
  }

  render() {
    const {initialContent} = this.props;

    return (
      <div className='CodeMirrorView'>
        <textarea ref='textarea' autoComplete='off' defaultValue={initialContent} />
      </div>
    );
  }
}

CodeMirrorView.propTypes = {
  initialContent: PropTypes.string,
  onTextChange: PropTypes.func
};

export default CodeMirrorView;
