import {connect} from 'react-redux';
import paneActions from '../actions/paneActions';
import PaneView from '../components/PaneView';

const mapStateToProps = function(state, ownProps) {
  return {
    pane: state.panes.get(ownProps.paneID)
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onClickSplitHorizontally() {
      dispatch(paneActions.splitHorizontally(ownProps.paneID));
    },

    onClickSplitVertically() {
      dispatch(paneActions.splitVertically(ownProps.paneID));
    },

    onClickUnsplit() {
      dispatch(paneActions.unsplit(ownProps.paneID));
    }
  };
};

const PaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaneView);

export default PaneContainer;
