export const SPLIT_HORIZONTALLY = 'SPLIT_HORIZONTALLY';
export const SPLIT_VERTICALLY = 'SPLIT_VERTICALLY';

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
  }
};
