import {Map} from 'immutable';
import Pane from '../records/Pane';
import {SPLIT_HORIZONTALLY, SPLIT_VERTICALLY, UNSPLIT} from '../actions/paneActions';

let _nextID = 0;
const nextID = function() {
  return (++_nextID).toString();
};

const moveTabs = function(state, sourcePaneID, targetPaneID) {
  const sourcePane = state.get(sourcePaneID),
        targetPane = state.get(targetPaneID);

  if (!sourcePane || !targetPane) {
    return state;
  }

  // if target pane is split, move to the left child of target pane instead
  if (targetPane.leftChildID) {
    return moveTabs(state, sourcePaneID, targetPane.leftChildID);
  }

  let {tabIDs} = sourcePane;
  const targetTabIDs = targetPane.tabIDs;

  // if target pane already has tabs, append tabs from source pane
  if (targetTabIDs) {
    tabIDs = targetTabIDs.merge(tabIDs);
  }

  return state.merge({
    [sourcePaneID]: sourcePane.merge({tabIDs: null}),
    [targetPaneID]: targetPane.merge({tabIDs})
  });
};

const splitPane = function(state, action) {
  const {paneID} = action,
        pane = state.get(paneID);

  // if pane is already split, do nothing
  if (pane.leftChildID || pane.rightChildID) {
    return state;
  }

  const leftChildID = nextID(),
        rightChildID = nextID(),
        leftChild = new Pane({parentID: paneID}),
        rightChild = new Pane({parentID: paneID});

  state = state.merge({
    [leftChildID]: leftChild,
    [rightChildID]: rightChild,
    [paneID]: pane.merge({
      leftChildID,
      rightChildID,
      vertical: action.type === SPLIT_VERTICALLY
    })
  });
  // move tabs to left child
  return moveTabs(state, paneID, leftChildID);
};

const unsplitPane = function(state, action) {
  const {paneID} = action,
        pane = state.get(paneID);

  const {parentID} = pane;
  let parent = state.get(parentID);

  // if pane has no parent (i.e. a root pane), do nothing
  if (!parent) {
    return state;
  }

  // if pane is split, do nothing
  if (pane.leftChildID || pane.rightChildID) {
    return state;
  }

  let {leftChildID, rightChildID} = parent;

  let otherPaneID = paneID === leftChildID ? rightChildID : leftChildID;

  // merge tabs over to the other pane
  state = moveTabs(state, paneID, otherPaneID);

  // unsplit by making the other pane the parent pane
  const otherPane = state.get(otherPaneID);

  state = state.merge({
    [paneID]: null,
    [otherPaneID]: null,
    [parentID]: otherPane.merge({
      parentID: parent.parentID
    })
  });

  // update the parentIDs of the other pane's children
  leftChildID = otherPane.leftChildID;
  rightChildID = otherPane.rightChildID;

  const leftChild = state.get(leftChildID),
        rightChild = state.get(rightChildID);

  if (leftChild && rightChild) {
    state = state.merge({
      [leftChildID]: leftChild.merge({parentID}),
      [rightChildID]: rightChild.merge({parentID})
    });
  }

  return state;
};

const initialState = new Map({
  '0': new Pane()
});

const panes = function(state=initialState, action) {
  switch (action.type) {
    case SPLIT_HORIZONTALLY:
    case SPLIT_VERTICALLY:
      return splitPane(state, action);

    case UNSPLIT:
      return unsplitPane(state, action);

    default:
      return state;
  }
};

export default panes;
