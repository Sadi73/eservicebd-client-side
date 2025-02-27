import { Avatar, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookService from '../BookService/BookService';
import { AuthContext } from '../../Providers/AuthProvider';
import EmptyScreenView from '../EmptyScreenView/EmptyScreenView';
import { Helmet } from 'react-helmet-async';

const AllService = () => {

    const { user } = useContext(AuthContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [allServices, setAllServices] = useState([]);
    const [serviceToBeBookedInfo, setServiceToBeBookedInfo] = useState({})

    useEffect(() => {
        fetch('https://b9a11serverside-sadi73s-projects.vercel.app/services/all')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            <Helmet>
                <title>EServiceBD | Services</title>
            </Helmet>

            {isModalOpen &&
                <BookService
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    serviceToBeBookedInfo={serviceToBeBookedInfo}
                />
            }
            {isLoading ? <Spin /> :
                <div className='my-10 px-5 md:px-10'>
                    {allServices?.length > 0 ? allServices.map(service =>
                        <div key={service?.sequence_value} className='flex flex-col lg:flex-row items-center gap-10 border border-teal-500 p-5 shadow-xl rounded-xl mb-5 min-h-60'>
                            <div className='md:flex gap-10 items-center grow'>
                                <img
                                    src={service?.imageURL}
                                    alt=""
                                    className='w-full md:w-80'
                                />

                                <div className='service details md:w-[500px] flex flex-col space-y-3'>
                                    <h1 className='text-3xl font-semibold text-center'>{service?.serviceTitle}</h1>
                                    <p className='text-center'>{service?.description?.slice(0, 200)}<span className='font-bold'>...more</span></p>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='service provider info w-[200px]'>
                                    <h1 className='text-xl'>Service Provider</h1>
                                    <div className='flex items-center gap-3'>
                                        <Avatar
                                            src={service?.providerInfo?.providerImageURL}
                                        />
                                        <h1 className='font-bold'>{service?.providerInfo?.providerName}</h1>
                                    </div>
                                    <p className='font-semibold'>{service?.providerInfo?.providerEmail}</p>
                                </div>

                                <div className='buttons flex items-center'>
                                    <div className=' flex flex-col gap-5'>
                                        <Link to={`/service/${service.sequence_value}`}><button className='bg-teal-500 text-white px-8 py-3 hover:bg-teal-700'>Details</button></Link>
                                        {service?.providerInfo?.providerEmail !== user?.email &&
                                            <button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700' onClick={() => {
                                                setServiceToBeBookedInfo(service);
                                                setIsModalOpen(true);
                                            }}>Book Now</button>}
                                    </div>
                                </div>
                            </div>
                        </div>) :
                        <div className='flex flex-col items-center justify-center'>
                            <EmptyScreenView />
                            <Link to='/add-new-service' className='text-teal-500 font-semibold'>+ Add New Service</Link>
                        </div>
                    }
                </div>}
        </>
    );
};

export default AllService;