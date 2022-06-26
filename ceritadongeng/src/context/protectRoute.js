import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "./index";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Link to="/" />;
  }
  return children;
};

export default ProtectedRoute;
