import { combineReducers } from 'redux';
import { has } from 'lodash/fp';

import boardReducers from './Board/reducers';
import boardInitialState from './Board/initialState';
import signReducers from './Sign/reducers';
import signInitialState from './Sign/initialState';

const createReducer = (reducers = {}, initialState = {}) => (state = initialState, { type, ...action }) =>
  (has(type)(reducers) ? reducers[type](state, action) : state);

const reducers = combineReducers({
  Board: createReducer(boardReducers, boardInitialState),
  Sign: createReducer(signReducers, signInitialState),
});

export default reducers;
