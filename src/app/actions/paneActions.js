export const SPLIT_HORIZONTALLY = 'SPLIT_HORIZONTALLY';
export const SPLIT_VERTICALLY = 'SPLIT_VERTICALLY';
export const UNSPLIT = 'UNSPLIT';

export default {
  splitHorizontally(paneID) {
    return {
      type: SPLIT_HORIZONTALLY,
      paneID
    };
  },

  splitVertically(paneID) {
    return {
      type: SPLIT_VERTICALLY,
      paneID
    };
  },

  unsplit(paneID) {
    return {
      type: UNSPLIT,
      paneID
    };
  }
};
