import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Unauthorized from '../pages/Unauthorized';
import Account from '../pages/Account';
import PrivateRoute from './PrivateRoute';
import Landing from '../pages/Landing';

const MainRoute = () => {
  return (
    <div>
        <Routes>
          <Route element={<Landing />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Unauthorized />} path='/unauthorized' />
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path='/home' />
            <Route element={<Account />} path='/account' />
          </Route>
        </Routes>
    </div>
  )
}

export default MainRoute
