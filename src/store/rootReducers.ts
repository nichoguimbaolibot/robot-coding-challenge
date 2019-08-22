import { combineReducers } from 'redux';

import testReducer from './test/test.reducer';

const rootReducers = combineReducers({
  test: testReducer,
} as any);

export default rootReducers;
