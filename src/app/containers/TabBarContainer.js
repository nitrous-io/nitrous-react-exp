import {connect} from 'react-redux';
import {OrderedMap} from 'immutable';
import tabActions from '../actions/tabActions';
import TabBar from '../components/TabBar';

function mapStateToProps(state, ownProps) {
  const tabList = state.getIn(['tabLists', ownProps.tabListID]);

  return {
    tabs: tabList ? OrderedMap(tabList.map((id) => (
      [id, state.getIn(['tabs', id])]
    ))): null
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickNewTab() {
      dispatch(tabActions.newTab(ownProps.tabListID));
    },

    onClickCloseTab(tabID) {
      dispatch(tabActions.closeTab(ownProps.tabListID, tabID));
    }
  };
}

const TabBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);

export default TabBarContainer;
