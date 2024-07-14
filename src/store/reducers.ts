import { combineReducers } from 'redux';
import { counterReducer } from './counter';

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const rootReducer = combineReducers({
  counter: counterReducer,
});
