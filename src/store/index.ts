import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#correct-typings-for-the-dispatch-type
 */

export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
