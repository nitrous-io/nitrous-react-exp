export const EXPAND_FOLDER = 'EXPAND_FOLDER';
export const COLLAPSE_FOLDER = 'COLLAPSE_FOLDER';

export default {
  expandFolder(fileTreeID, fileID) {
    return {
      type: EXPAND_FOLDER,
      fileTreeID,
      fileID
    };
  },

  collapseFolder(fileTreeID, fileID) {
    return {
      type: COLLAPSE_FOLDER,
      fileTreeID,
      fileID
    };
  }
};
