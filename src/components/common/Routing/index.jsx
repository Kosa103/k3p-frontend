import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { TOKEN } from '../../../utils/constants';

const ProtectedRoute = (props) => {
  const { children } = props;

  const token = localStorage.getItem(TOKEN) || '';

  if (!token) {
    return <Navigate replace to='/' />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
