import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const isAuthenticated = (): boolean => {
    const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    return !!token;
};

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/admin" state={{ from: location }} />;
    }

    return element;
};

export default ProtectedRoute;
