import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  if (localStorage.token) {
    return children;
  }

  return <Navigate to="/" />;
};
