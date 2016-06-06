import {nextTabID, createTab} from '../records/Tab';
import {NEW_TAB, CLOSE_TAB} from '../actions/tabActions';

function newTab(state, tabListID) {
  const tabList = state.getIn(['tabLists', tabListID]);

  if (!tabList) {
    return state;
  }

  const tabID = nextTabID(),
        tab = createTab();

  state = state.mergeIn(['tabLists'], {
    [tabListID]: tabList.push(tabID)
  });

  return state.mergeIn(['tabs'], {
    [tabID]: tab
  });
}

function closeTab(state, tabListID, tabID) {
  const tabList = state.getIn(['tabLists', tabListID]);

  if (!tabList) {
    return state;
  }

  state = state.mergeIn(['tabLists'], {
    [tabListID]: tabList.remove(tabList.indexOf(tabID))
  });

  return state.mergeIn(['tabs'], {
    [tabID]: null
  });
}

function tabs(state={}, action) {
  switch (action.type) {
    case NEW_TAB:
      return newTab(state, action.tabListID);

    case CLOSE_TAB:
      return closeTab(state, action.tabListID, action.tabID);

    default:
      return state;
  }
}

export default tabs;
