import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'
import { useAuth } from './Auth';

const PrivateRoute = () => {
  let auth = useAuth();
  return (
    auth.email ? <Outlet /> : <Navigate to={'/unauthorized'} />
  )
}

export default PrivateRoute
