import {nextTabID, createTab} from '../records/Tab';
import {NEW_TAB, CLOSE_TAB, SELECT_TAB} from '../actions/tabActions';

function newTab(state, paneID, tabListID) {
  const pane = state.getIn(['panes', paneID]),
        tabList = state.getIn(['tabLists', tabListID]);

  if (!pane || !tabList) {
    return state;
  }

  // if pane is split, do nothing
  if (pane.leftChildID || pane.rightChildID) {
    return state;
  }

  const tabID = nextTabID(),
        tab = createTab();

  state = state.mergeIn(['tabLists'], {
    [tabListID]: tabList.push(tabID)
  });

  state = state.mergeIn(['tabs'], {
    [tabID]: tab
  });

  return selectTab(state, paneID, tabID);
}

function closeTab(state, paneID, tabListID, tabID) {
  const pane = state.getIn(['panes', paneID]);
  let tabList = state.getIn(['tabLists', tabListID]);

  if (!tabList) {
    return state;
  }

  const tabIndex = tabList.indexOf(tabID);
  tabList = tabList.remove(tabIndex);

  state = state.mergeIn(['tabLists'], {
    [tabListID]: tabList
  });

  state = state.mergeIn(['tabs'], {
    [tabID]: null
  });

  // if selected tab was closed, select next tab
  if (pane.selectedTabID === tabID) {
    let nextTabIndex = tabIndex;
    if (tabList.size === 0) {
      nextTabIndex = null;
    } else if (nextTabIndex >= tabList.size) {
      nextTabIndex = tabList.size - 1;
    }

    const nextTabID = tabList.get(nextTabIndex);
    state = selectTab(state, paneID, nextTabID);
  }

  return state;
}

function selectTab(state, paneID, tabID) {
  const pane = state.getIn(['panes', paneID]),
        tab = state.getIn(['tabs', tabID]);

  if (!pane) {
    return state;
  }

  if (!tab) {
    tabID = null;
  }

  // if pane is split, do nothing
  if (pane.leftChildID || pane.rightChildID) {
    return state;
  }

  return state.mergeIn(['panes'], {
    [paneID]: pane.set('selectedTabID', tabID)
  });
}

function tabs(state={}, action) {
  switch (action.type) {
    case NEW_TAB:
      return newTab(state, action.paneID, action.tabListID);

    case CLOSE_TAB:
      return closeTab(state, action.paneID, action.tabListID, action.tabID);

    case SELECT_TAB:
      return selectTab(state, action.paneID, action.tabID);

    default:
      return state;
  }
}

export default tabs;
