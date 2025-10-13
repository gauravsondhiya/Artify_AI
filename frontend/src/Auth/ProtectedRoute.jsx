import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
