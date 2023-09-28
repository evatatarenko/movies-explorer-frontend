import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return <Component {...props} />
  // return props.loggedIn ? (
  // ) : (
  //   <Navigate to="/" replace />
  // );
};

export default ProtectedRouteElement;
