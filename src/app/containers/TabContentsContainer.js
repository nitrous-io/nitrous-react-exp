import {connect} from 'react-redux';
import {OrderedMap} from 'immutable';
import TabContents from '../components/TabContents';

function mapStateToProps(state, ownProps) {
  const tabList = state.getIn(['tabLists', ownProps.tabListID]);

  return {
    tabs: tabList ? OrderedMap(tabList.map((id) => (
      [id, state.getIn(['tabs', id])]
    ))): null,
    selectedTabID: state.getIn(['panes', ownProps.paneID, 'selectedTabID'])
  };
}

function mapDispatchToProps(/*dispatch, ownProps*/) {
  return {};
}

const TabContentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabContents);

export default TabContentsContainer;
