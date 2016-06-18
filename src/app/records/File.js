import {Record} from 'immutable';

let _nextID = 0;

export function nextFileID() {
  return (++_nextID).toString();
}

class File extends Record({
  name: null,
  parentID: null,
  childIDs: null
}) {
  get isDir() {
    return this.childIDs != null;
  }
}

export default File;
