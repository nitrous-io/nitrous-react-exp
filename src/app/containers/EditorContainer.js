import {connect} from 'react-redux';
import tabActions from '../actions/tabActions';
import Editor from '../components/Editor';

function mapStateToProps(state, ownProps) {
  return {
    tab: state.getIn(['tabs', ownProps.tabID])
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onTextChange(content) {
      dispatch(tabActions.updateContent(ownProps.tabID, content));
    }
  };
}

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

export default EditorContainer;
