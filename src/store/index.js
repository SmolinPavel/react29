import { createStore } from 'redux';

const initialValue = {
  count: 15,
  users: [
    {
      id: 1,
      name: 'Pavel',
    },
  ],
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);
