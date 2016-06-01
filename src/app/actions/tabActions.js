export const NEW_TAB = 'NEW_TAB';

export default {
  newTab(tabListID) {
    return {
      type: NEW_TAB,
      tabListID
    };
  }
};
