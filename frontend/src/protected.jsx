import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Replace this with your auth check logic
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token; // This is a simple check, consider a more robust auth check

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
