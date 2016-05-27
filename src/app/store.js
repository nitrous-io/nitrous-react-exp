import {combineReducers, createStore} from 'redux';
import panes from './reducers/panes';

const reducer = combineReducers({
  panes
});

export default createStore(reducer);
