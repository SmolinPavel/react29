import { useContext } from 'react';

import { UserContext } from 'contexts';

export const useUsers = () => {
  const context = useContext(UserContext);

  return context;
};
