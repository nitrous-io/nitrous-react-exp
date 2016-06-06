export const NEW_TAB = 'NEW_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';

export default {
  newTab(tabListID) {
    return {
      type: NEW_TAB,
      tabListID
    };
  },

  closeTab(tabListID, tabID) {
    return {
      type: CLOSE_TAB,
      tabListID,
      tabID
    };
  }
};
