import {List} from 'immutable';
import Pane, {nextPaneID} from '../records/Pane';
import {SPLIT_HORIZONTALLY, SPLIT_VERTICALLY, UNSPLIT} from '../actions/paneActions';

let _nextTabListID = 0;

function nextTabListID() {
  return (++_nextTabListID).toString();
}

function moveTabs(state, sourcePaneID, targetPaneID) {
  const sourcePane = state.getIn(['panes', sourcePaneID]),
        targetPane = state.getIn(['panes', targetPaneID]);

  if (!sourcePane || !targetPane) {
    return state;
  }

  // if target pane is split, move to the left child of target pane instead
  if (targetPane.leftChildID) {
    return moveTabs(state, sourcePaneID, targetPane.leftChildID);
  }

  const sourceTabList = state.getIn(['tabLists', sourcePane.tabListID]),
        targetTabList = state.getIn(['tabLists', targetPane.tabListID]);

  // if target pane already has tabs, append tabs from source pane
  if (sourceTabList && targetTabList) {
    state = state.mergeIn(['tabLists'], {
      [sourcePane.tabListID]: null,
      [targetPane.tabListID]: targetTabList.concat(sourceTabList)
    });
  }

  return state.mergeIn(['panes'], {
    [sourcePaneID]: sourcePane.merge({tabListID: null}),
    [targetPaneID]: targetPane.merge({tabListID: targetPane.tabListID})
  });
}

function splitPane(state, action) {
  const {paneID} = action,
        pane = state.getIn(['panes', paneID]);

  // if pane is already split, do nothing
  if (pane.leftChildID || pane.rightChildID) {
    return state;
  }

  const newTabListID = nextTabListID();
  state = state.mergeIn(['tabLists'], {
    [newTabListID]: new List()
  });

  const leftChildID = nextPaneID(),
        rightChildID = nextPaneID(),
        leftChild = new Pane({parentID: paneID, tabListID: pane.tabListID}),
        rightChild = new Pane({parentID: paneID, tabListID: newTabListID});

  state = state.mergeIn(['panes'], {
    [leftChildID]: leftChild,
    [rightChildID]: rightChild,
    [paneID]: pane.merge({
      tabListID: null,
      leftChildID,
      rightChildID,
      vertical: action.type === SPLIT_VERTICALLY
    })
  });
  // move tabs to left child
  return moveTabs(state, paneID, leftChildID);
}

function unsplitPane(state, action) {
  const {paneID} = action,
        pane = state.getIn(['panes', paneID]);

  const {parentID} = pane;
  let parent = state.getIn(['panes', parentID]);

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
  const otherPane = state.getIn(['panes', otherPaneID]);

  state = state.mergeIn(['panes'], {
    [paneID]: null,
    [otherPaneID]: null,
    [parentID]: otherPane.merge({
      parentID: parent.parentID
    })
  });

  // update the parentIDs of the other pane's children
  leftChildID = otherPane.leftChildID;
  rightChildID = otherPane.rightChildID;

  const leftChild = state.getIn(['panes', leftChildID]),
        rightChild = state.getIn(['panes', rightChildID]);

  if (leftChild && rightChild) {
    state = state.mergeIn(['panes'], {
      [leftChildID]: leftChild.merge({parentID}),
      [rightChildID]: rightChild.merge({parentID})
    });
  }

  return state;
}

function panes(state, action) {
  switch (action.type) {
    case SPLIT_HORIZONTALLY:
    case SPLIT_VERTICALLY:
      return splitPane(state, action);

    case UNSPLIT:
      return unsplitPane(state, action);

    default:
      return state;
  }
}

export default panes;
