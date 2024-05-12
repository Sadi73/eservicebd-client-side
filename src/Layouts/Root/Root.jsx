import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';
import { Spin } from 'antd';

const Root = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Spin />
    };

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;