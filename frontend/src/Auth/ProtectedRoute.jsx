import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("token"));

  if (!user.status) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
