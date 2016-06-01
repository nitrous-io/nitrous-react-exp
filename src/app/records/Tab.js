import {Record} from 'immutable';

let _nextID = 0, _tabN = 0;

export function nextTabID() {
  return (++_nextID).toString();
}

export function createTab() {
  ++_tabN;
  return new Tab({title: `untitled${_tabN === 1 ? '' : ' '+_tabN}`});
}

const Tab = Record({
  title: null
});


export default Tab;
