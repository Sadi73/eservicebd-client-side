import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyScreenView from '../EmptyScreenView/EmptyScreenView';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const BookedServices = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [allBookedServices, setAllBookedServices] = useState([])

    useEffect(() => {
        fetch(`https://b9a11serverside-sadi73s-projects.vercel.app/booked-service/all?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllBookedServices(data);
            })
    }, []);

    return (
        <div className='my-10 bg-teal-200 py-10'>
            <Helmet>
                <title>EServiceBD | Booked Service</title>
            </Helmet>

            <h1 className='text-3xl font-semibold text-center text-teal-700'>Booked Services</h1>
            <p className='text-center'>As a customer focused solution provider, we are dedicated to redefine the home improvement service experience for all users</p>

            {allBookedServices?.length > 0 ? <div className='card-container w-[80%] mx-auto mt-10 grid grid-cols-3 gap-5'>
                {allBookedServices.map(service =>

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

                    </div>
                )}

            </div> : <EmptyScreenView />
            }

        </div>
    );
};

export default BookedServices;