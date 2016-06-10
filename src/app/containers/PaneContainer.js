import {connect} from 'react-redux';
import paneActions from '../actions/paneActions';
import PaneView from '../components/PaneView';

function mapStateToProps(state, ownProps) {
  return {
    paneID: ownProps.paneID,
    pane: state.getIn(['panes', ownProps.paneID])
  };
}

function mapDispatchToProps(dispatch, ownProps) {
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
}

const PaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaneView);

export default PaneContainer;
