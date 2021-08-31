import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = (props) => {
  // 1. read token from the LS
  const token = localStorage.getItem('token');

  // 2.a. if token exists
  if (token) {
    return <Route {...props} />;
  }

  // 2.b. if there's no token
  return <Redirect to="/login" />;
};
