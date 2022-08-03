import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  if (user.guest && user.name) {
    return <Navigate to='/login' replace />;
  }

  if (user.guest && !user.name) {
    return <Navigate to='/register' replace />;
  }

  return children;
};
