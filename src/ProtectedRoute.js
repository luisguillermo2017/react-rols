import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ allowedRoles, userRole }) {
  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/not-authorized" replace />;
}

export default ProtectedRoute;
