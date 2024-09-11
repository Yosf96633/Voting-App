import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthContext = ({ children }) => {
  const isLogin = useSelector((state) => state.login.login);

  // If the user is not logged in, redirect to the login page
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  // If logged in, render the child components
  return <>{children}</>;
};

export default AuthContext;
