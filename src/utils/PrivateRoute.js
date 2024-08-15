import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// A mock function to check if the user is authenticated
const isAuthenticated = () => {
  // Replace with your actual authentication logic
  return !!localStorage.getItem('authToken');
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
