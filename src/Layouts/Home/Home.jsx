import React, { useContext } from 'react';
import Slider from './Slider';
import PopularServices from './PopularServices';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <div >
            <Slider />
            <PopularServices />
        </div>
    );
};

export default Home;