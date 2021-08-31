import { createContext, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    users: [],
    loading: false,
    error: null,
  });

  const fetchUsers = async () => {
    setUserState((prevState) => ({ ...prevState, loading: true }));

    try {
      const response = await fetch(API_URL);
      const users = await response.json();
      setUserState((prevState) => ({ ...prevState, users, loading: false }));
    } catch (error) {
      setUserState((prevState) => ({ ...prevState, error, loading: false }));
    }
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
