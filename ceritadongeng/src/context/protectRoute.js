/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "./index";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Link to="/login" />;
  }
  return children;
};

// eslint-disable-next-line prettier/prettier
export default ProtectedRoute;
