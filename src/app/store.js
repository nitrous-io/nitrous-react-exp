import {createStore} from 'redux';
import {Map, List} from 'immutable';
import panes from './reducers/panes';
import tabs from './reducers/tabs';

import Pane from './records/Pane';

const initialState = Map({
  panes: Map({
    '0': new Pane({tabListID: '0'})
  }),
  tabs: Map(),
  tabLists: Map({
    '0': List()
  })
});

function reducer(state=initialState, action) {
  state = panes(state, action);
  state = tabs(state, action);

  return state;
}

export default createStore(reducer);
