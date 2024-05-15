import React, { useContext, useEffect, useState } from 'react';
import BookService from '../BookService/BookService';
import { useParams } from 'react-router-dom';
import { Divider, Spin } from 'antd';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
    const params = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch(`https://b9a11serverside-sadi73s-projects.vercel.app/service/${params?.serviceId}`)
            .then(res => res.json())
            .then(data => {
                setServiceInfo(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            <Helmet>
                <title>EServiceBD | Details</title>
            </Helmet>

            {
                isModalOpen &&
                <BookService
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    serviceToBeBookedInfo={serviceInfo}
                />
            }

            {isLoading ?
                <Spin /> :
                <div className='my-10 px-10 space-y-5'>
                    <div className='md:flex gap-5'>
                        <img src={serviceInfo?.imageURL} alt="image" className='w-full md:w-1/3' />
                        <div className='md:w-[60%] space-y-5 mt-5 md:mt-0'>
                            <h1 className='text-3xl font-semibold text-center md:text-left'>{serviceInfo?.serviceTitle}</h1>
                            <p className=' text-center md:text-left'>{serviceInfo?.description}</p>
                            <p className='text-xl text-center md:text-left'>price: ${serviceInfo?.price}</p>
                        </div>
                    </div>

                    <Divider><span className='font-bold text-xl'>Provider Info</span></Divider>

                    <div className='flex gap-5 justify-between max-w-[60%] mx-auto items-center'>
                        <div className='w-[60%]'>
                            <h1 className='font-bold'>{serviceInfo?.providerInfo?.providerName}</h1>
                            <p className='font-semibold'>{serviceInfo?.providerInfo?.providerEmail}</p>
                        </div>
                        <img src={serviceInfo?.providerInfo?.providerImageURL} alt="image not found" className='w-64 rounded-full' />
                    </div>

                    {serviceInfo?.providerInfo?.providerEmail !== user?.email &&
                        <button className='bg-teal-500 text-white px-5 py-3 w-full' onClick={() => setIsModalOpen(true)}>Book Now</button>
                    }
                </div>
            }


        </>
    );
};

export default ServiceDetails;