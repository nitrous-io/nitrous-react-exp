import {Map} from 'immutable';
import Pane from '../records/Pane';
import {SPLIT_HORIZONTALLY, SPLIT_VERTICALLY} from '../actions/paneActions';

let _nextID = 0;
const nextID = function() {
  return (++_nextID).toString();
};

const splitPane = function(state, action) {
  const pane = state.get(action.paneID);

  // if pane is already split, do nothing
  if (pane.leftPaneID || pane.rightPaneID) {
    return state;
  }

  const leftPaneID = nextID(),
        rightPaneID = nextID(),
        leftPane = new Pane({tabIDs: pane.tabIDs}),
        rightPane = new Pane();

  return state.merge({
    [leftPaneID]: leftPane,
    [rightPaneID]: rightPane,
    [action.paneID]: pane.merge({
      tabIDs: [],
      leftPaneID,
      rightPaneID,
      vertical: action.type === SPLIT_VERTICALLY
    })
  });
};

const initialState = new Map({
  '0': new Pane()
});

const panes = function(state=initialState, action) {
  switch (action.type) {
    case SPLIT_HORIZONTALLY:
    case SPLIT_VERTICALLY:
      return splitPane(state, action);

    default:
      return state;
  }
};

export default panes;
