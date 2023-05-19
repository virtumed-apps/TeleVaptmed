import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signIn" />;
  }
  return children;
};

export default ProtectedRoute;
