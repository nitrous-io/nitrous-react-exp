import {connect} from 'react-redux';
import {OrderedMap} from 'immutable';
import tabActions from '../actions/tabActions';
import TabBar from '../components/TabBar';

function mapStateToProps(state, ownProps) {
  const tabList = state.getIn(['tabLists', ownProps.tabListID]);

  return {
    tabs: tabList ? OrderedMap(tabList.map((id) => (
      [id, state.getIn(['tabs', id])]
    ))): null,
    selectedTabID: state.getIn(['panes', ownProps.paneID, 'selectedTabID'])
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickNewTab() {
      dispatch(tabActions.newTab(ownProps.paneID, ownProps.tabListID));
    },

    onClickCloseTab(tabID) {
      dispatch(tabActions.closeTab(ownProps.paneID, ownProps.tabListID, tabID));
    },

    onClickTab(tabID) {
      dispatch(tabActions.selectTab(ownProps.paneID, tabID));
    }
  };
}

const TabBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);

export default TabBarContainer;
