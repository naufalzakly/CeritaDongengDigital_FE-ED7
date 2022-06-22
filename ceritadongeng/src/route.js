import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../src/auth_firabase";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
