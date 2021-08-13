import { createReducer } from '@reduxjs/toolkit';

import { decrement, increment } from './actions';

const initialValue = {
  count: 15,
  users: [
    {
      id: 1,
      name: 'Pavel',
    },
  ],
};

export const counterReducer = createReducer(initialValue, {
  [increment]: (state) => ({ ...state, count: state.count + 1 }),
  [decrement]: (state) => ({ ...state, count: state.count - 1 }),
});
