import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = (state) => state.users;
export const selectCleUsers = createSelector([selectUsers], ({ users }) =>
  users.filter((user) => user.name.includes('Cle')),
);
