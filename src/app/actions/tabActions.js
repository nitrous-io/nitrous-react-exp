export const NEW_TAB = 'NEW_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';
export const SELECT_TAB = 'SELECT_TAB';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';

export default {
  newTab(paneID, tabListID) {
    return {
      type: NEW_TAB,
      paneID,
      tabListID
    };
  },

  closeTab(paneID, tabListID, tabID) {
    return {
      type: CLOSE_TAB,
      paneID,
      tabListID,
      tabID
    };
  },

  selectTab(paneID, tabID) {
    return {
      type: SELECT_TAB,
      paneID,
      tabID
    };
  },

  updateContent(tabID, content) {
    return {
      type: UPDATE_CONTENT,
      tabID,
      content
    };
  }
};
