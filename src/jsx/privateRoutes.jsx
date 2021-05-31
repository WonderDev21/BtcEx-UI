import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userInfoRequest } from '../actions/auth/index';
import Loader from './element/loader';

function PrivateRoutes({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.isLoggedIn) {
      dispatch(userInfoRequest());
    }
  }, [dispatch, auth.isLoggedIn]);

  return (
    <Route {...rest} render={props => auth.isUserInfoLoading ? <Loader /> : auth.isLoggedIn ? (<Component {...props} />) : (<Redirect to="/signin" />)} />
  );
}

export default PrivateRoutes;
