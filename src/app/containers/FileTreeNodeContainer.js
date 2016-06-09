import {connect} from 'react-redux';
import fileTreeActions from '../actions/fileTreeActions';
import FileTreeNodeView from '../components/FileTreeNodeView';

function mapStateToProps(state, ownProps) {
  return {
    fileTreeID: ownProps.fileTreeID,
    fileTreeNode: state.getIn(['fileTrees', ownProps.fileTreeID, ownProps.fileID]),
    file: state.getIn(['files', ownProps.fileID])
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickExpand() {
      dispatch(fileTreeActions.expandFolder(ownProps.fileTreeID, ownProps.fileID));
    },

    onClickCollapse() {
      dispatch(fileTreeActions.collapseFolder(ownProps.fileTreeID, ownProps.fileID));
    }
  };
}

const FileTreeNodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileTreeNodeView);

export default FileTreeNodeContainer;
