import React from 'react';
import { useAuth } from './AuthProvider';
import { Navigate, useNavigate } from "react-router-dom";


export const RequireAuth = ({children}) => {
  const auth = useAuth();
   const navigate = useNavigate();

  if (!auth.user) {
    return <Navigate to="/login"/>
  }
  return children
}

