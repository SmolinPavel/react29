import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
