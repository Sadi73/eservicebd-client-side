import React, { useEffect, useState } from 'react';
import BookService from '../BookService/BookService';
import { useParams } from 'react-router-dom';
import { Divider, Spin } from 'antd';

const ServiceDetails = () => {

    const params = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/service/${params?.serviceId}`)
            .then(res => res.json())
            .then(data => {
                setServiceInfo(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <>

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
                    <div className='flex gap-5'>
                        <div className='w-1/3'>
                            <img src={serviceInfo?.imageURL} alt="image" className='w-full' />
                        </div>
                        <div className='w-[60%] space-y-5'>
                            <h1 className='text-3xl font-semibold'>{serviceInfo?.serviceTitle}</h1>
                            <p>{serviceInfo?.description}</p>
                            <p className='text-xl'>price: ${serviceInfo?.price}</p>
                        </div>
                    </div>

                    <Divider>Provider Info</Divider>

                    <div className='flex gap-5 justify-between'>
                        <div className='w-[60%]'>
                            <h1>{serviceInfo?.providerInfo?.providerName}</h1>
                            <p>{serviceInfo?.providerInfo?.providerEmail}</p>
                        </div>
                        <div className='w-1/3'>
                            <img src={serviceInfo?.providerInfo?.providerImage} alt="image not found" className='w-full' />
                        </div>
                    </div>

                    <button className='bg-teal-500 text-white px-5 py-3' onClick={() => setIsModalOpen(true)}>Book Now</button>
                </div>
            }


        </>
    );
};

export default ServiceDetails;