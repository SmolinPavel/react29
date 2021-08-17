import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = createReducer(initialState, {
  FETCH_DELIVERY_REQUEST: (state) => ({ ...state, loading: true }),
  FETCH_DELIVERY_SUCCESS: (state, action) => ({
    ...state,
    loading: false,
    users: action.payload,
  }),
  FETCH_DELIVERY_FAILURE: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});
