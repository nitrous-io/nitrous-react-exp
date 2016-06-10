import {Record} from 'immutable';

let _nextID = 0;

export function nextPaneID() {
  return (++_nextID).toString();
}

const Pane = Record({
  parentID: null,
  leftChildID: null,
  rightChildID: null,
  vertical: false,
  tabListID: null,
  selectedTabID: null
});

export default Pane;
