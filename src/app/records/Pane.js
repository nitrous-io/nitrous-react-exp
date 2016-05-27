import {Record} from 'immutable';

const Pane = Record({
  tabIDs: [],
  leftPaneID: null,
  rightPaneID: null,
  vertical: false
});

export default Pane;
