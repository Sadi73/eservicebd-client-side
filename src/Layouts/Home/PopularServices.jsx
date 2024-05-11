import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularServices = () => {
    const navigate = useNavigate();

    return (
        <div className='my-10 bg-teal-200 py-10'>
            <h1 className='text-3xl font-semibold text-center text-teal-700'>Popular Services</h1>
            <p className='text-center'>As a customer focused solution provider, we are dedicated to redefine the home improvement service experience for all users</p>

            <div className='card-container w-[80%] mx-auto mt-10'>

                <div className='w-72 pb-5 bg-white text-center hover:shadow-2xl'>
                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""  className='w-full h-[50%]'/>
                    <h1 className='text-teal-500 text-2xl'>Service Name</h1>
                    <p>Description</p>
                    <button
                        className=' bg-teal-500 text-white px-3 py-2'
                        onClick={() => navigate('/service/1')}
                    >Details</button>

                </div>

            </div>

        </div>
    );
};

export default PopularServices;