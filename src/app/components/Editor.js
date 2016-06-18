import '../css/Editor.sass';
import React, {PropTypes} from 'react';
import Tab from '../records/Tab';
import CodeMirrorView from './CodeMirrorView';

function Editor({
  tab,
  onTextChange
}) {
  return (
    <div className='Editor'>
      <CodeMirrorView onTextChange={onTextChange} initialContent={tab.content} />
    </div>
  );
}

Editor.propTypes = {
  tab: PropTypes.instanceOf(Tab).isRequired,
  onTextChange: PropTypes.func
};

export default Editor;
