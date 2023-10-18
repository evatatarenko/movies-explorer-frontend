import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  if (props.loggedIn === null) return;
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
