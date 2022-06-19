import React from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuthContext } from '../context/AuthContext';
const ProtectedRoute = ({ children }) => {
	const { user } = UseAuthContext();
	return <>{user ? children : <Navigate to='/'></Navigate>}</>;
};

export default ProtectedRoute;
