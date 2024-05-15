import React, { useContext } from 'react';
import Slider from './Slider';
import PopularServices from './PopularServices';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <div >
            <Helmet>
                <title>EServiceBD | Home</title>
            </Helmet>

            <Slider />
            <PopularServices />
        </div>
    );
};

export default Home;