import {createStore} from 'redux';
import {Map, List} from 'immutable';
import panes from './reducers/panes';
import tabs from './reducers/tabs';
import fileTrees from './reducers/fileTrees';
import Pane from './records/Pane';
import FileTreeNode from './records/FileTreeNode';
import File from './records/File';

const initialState = Map({
  panes: Map({
    '0': new Pane({tabListID: '0'})
  }),
  tabs: Map(),
  tabLists: Map({
    '0': List()
  }),
  fileTrees: Map({
    '0': Map({
      '0': new FileTreeNode()
    })
  }),
  files: Map({
    '0': new File({
      name: '',
      parentID: null,
      childIDs: List(['1'])
    }),
    '1': new File({
      name: 'home',
      parentID: '0',
      childIDs: List(['2'])
    }),
    '2': new File({
      name: 'nitrous',
      parentID: '1',
      childIDs: List(['3', '4', '5'])
    }),
    '3': new File({
      name: '.bash_profile',
      parentID: '2'
    }),
    '4': new File({
      name: 'code',
      parentID: '2',
      childIDs: List(['6'])
    }),
    '5': new File({
      name: 'foo',
      parentID: '2'
    }),
    '6': new File({
      name: 'bar',
      parentID: '4'
    })
  })
});

function reducer(state=initialState, action) {
  state = panes(state, action);
  state = tabs(state, action);
  state = fileTrees(state, action);

  return state;
}

export default createStore(reducer);
