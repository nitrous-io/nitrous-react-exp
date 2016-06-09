import {EXPAND_FOLDER, COLLAPSE_FOLDER} from '../actions/fileTreeActions';
import FileTreeNode from '../records/FileTreeNode';

function handleFolder(state, expand, fileTreeID, fileID) {
  const file = state.getIn(['files', fileID]);
  if (!file || !file.isDir) {
    return state;
  }

  const fileTreeNode = state.getIn(['fileTrees', fileTreeID, fileID], new FileTreeNode()).set('expanded', expand);
  return state.setIn(['fileTrees', fileTreeID, fileID], fileTreeNode);
}

function fileTrees(state={}, action) {
  switch (action.type) {
    case EXPAND_FOLDER:
    case COLLAPSE_FOLDER:
      return handleFolder(state, action.type === EXPAND_FOLDER, action.fileTreeID, action.fileID);

    default:
      return state;
  }
}

export default fileTrees;
