import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  console.log(props, 'isloggedIn')
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
