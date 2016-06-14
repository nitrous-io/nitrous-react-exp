import '../css/FileTreeNodeView.sass';
import React, {PropTypes} from 'react';
import classNames from 'classnames';
import FileTreeNode from '../records/FileTreeNode';
import File from '../records/File';
import FileTreeNodeContainer from '../containers/FileTreeNodeContainer';

function FileTreeNodeView({
  fileTreeID,
  fileTreeNode=new FileTreeNode(),
  file,
  onClickExpand,
  onClickCollapse
}) {
  const {isDir} = file,
        {expanded} = fileTreeNode;

  return (
    <li className={classNames('FileTreeNodeView', {expanded, directory: isDir})}>
      <div className='bar' onClick={expanded ? onClickCollapse : onClickExpand} />
      <div className='name'>
        <i className={classNames('icon', 'fa', {'fa-folder-open-o': isDir && expanded, 'fa-folder-o': isDir && !expanded, 'fa-file-o': !isDir})} />
        {file.name || '/'}
      </div>
      <ul className='tree-node-list'>
        {isDir ? file.childIDs.map((childID) => (
          <FileTreeNodeContainer key={`fileTreeNode-${fileTreeID}-${childID}`} fileTreeID={fileTreeID} fileID={childID} />
        )) : ''}
      </ul>
    </li>
  );
}

FileTreeNodeView.propTypes = {
  fileTreeID: PropTypes.string.isRequired,
  fileTreeNode: PropTypes.instanceOf(FileTreeNode),
  file: PropTypes.instanceOf(File).isRequired,
  onClickExpand: PropTypes.func.isRequired,
  onClickCollapse: PropTypes.func.isRequired
};

export default FileTreeNodeView;
