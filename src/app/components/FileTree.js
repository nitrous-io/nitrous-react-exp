import './FileTree.sass';
import React, {PropTypes} from 'react';
import FileTreeNodeContainer from '../containers/FileTreeNodeContainer';

function FileTree({
  fileTreeID='0',
  fileID='0'
}) {

  return (
    <div className='FileTree'>
      <ul className='tree-node-list'>
        <FileTreeNodeContainer fileTreeID={fileTreeID} fileID={fileID} />
      </ul>
    </div>
  );
}

FileTree.propTypes = {
  fileTreeID: PropTypes.string,
  fileID: PropTypes.string
};

export default FileTree;
