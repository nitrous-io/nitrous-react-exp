import {Record} from 'immutable';

const Pane = Record({
  tabIDs: null,
  parentID: null,
  leftChildID: null,
  rightChildID: null,
  vertical: false
});

export default Pane;
