import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    if (user) {
        return children
    }

    return <Navigate state={location?.pathname} to='/login' />;
};

export default PrivateRoute;