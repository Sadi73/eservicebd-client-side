import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyScreenView from '../EmptyScreenView/EmptyScreenView';

const PopularServices = () => {
    const navigate = useNavigate();

    const [popularServices, setPopularServices] = useState([]);

    useEffect(() => {
        fetch('https://b9a11serverside-sadi73s-projects.vercel.app/services/popular')
            .then(res => res.json())
            .then(data => setPopularServices(data))
    }, []);

    return (
        <div className='my-10 bg-teal-200 py-10'>
            <h1 className='text-3xl font-semibold text-center text-teal-700'>Popular Services</h1>
            <p className='text-center'>As a customer focused solution provider, we are dedicated to redefine the home improvement service experience for all users</p>

            {popularServices?.length > 0 ? <div className='card-container w-[80%] mx-auto mt-10 grid grid-cols-3 gap-5'>

                {popularServices.map(service =>
                    <div key={service?.sequence_value} className='w-80 p-5 bg-white text-center hover:shadow-2xl h-[450px] flex flex-col'>
                        <div className='grow'>
                            <img src={service?.imageURL} alt="" className='w-full h-1/2' />
                            <h1 className='text-teal-500 text-2xl'>{service?.serviceTitle}</h1>
                            <p>{service?.description?.slice(0, 100)}<span className='font-bold'>...more</span></p>
                        </div>
                        <button
                            className=' bg-teal-500 text-white px-3 py-2'
                            onClick={() => navigate(`/service/${service?.sequence_value}`)}
                        >Details</button>

                    </div>)}

            </div> : <EmptyScreenView message='No Service Found'/>
            }

        </div>
    );
};

export default PopularServices;