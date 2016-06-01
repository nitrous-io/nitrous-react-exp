import {Record} from 'immutable';

let _nextID = 0;

export function nextPaneID() {
  return (++_nextID).toString();
}

const Pane = Record({
  tabListID: null,
  parentID: null,
  leftChildID: null,
  rightChildID: null,
  vertical: false
});

export default Pane;
