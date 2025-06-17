// src/routes/PrivateRoute.js
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
