import { Avatar, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookService from '../BookService/BookService';

const AllService = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [allServices, setAllServices] = useState([]);
    const [serviceToBeBookedInfo, setServiceToBeBookedInfo] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/services/all')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            {isModalOpen &&
                <BookService
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    serviceToBeBookedInfo={serviceToBeBookedInfo}
                />
            }
            {isLoading ? <Spin /> :
                <div className='my-10 px-10'>
                    {allServices.map(service =>
                        <div key={service?.sequence_value} className='flex gap-10 border border-teal-500 p-3 shadow-xl rounded-xl mb-5'>
                            <img
                                src={service?.imageURL}
                                alt=""
                                className='w-80'
                            />

                            <div className='service details w-[500px] flex flex-col'>
                                <h1 className='text-3xl font-semibold'>{service?.serviceTitle}</h1>
                                <p>{service?.description?.slice(0, 200)}<span className='font-bold'>...more</span></p>
                            </div>

                            <div className='service provider info w-[300px]'>
                                <h1 className='text-xl'>Service Provider</h1>
                                <div className='flex items-center gap-3'>
                                    <Avatar />
                                    <h1 className='font-bold'>{service?.providerInfo?.providerName}</h1>
                                </div>
                                <p className='font-semibold'>{service?.providerInfo?.providerEmail}</p>
                            </div>

                            <div className='buttons flex items-center'>
                                <div className=' flex flex-col gap-5'>
                                    <Link to={`/service/${service.sequence_value}`}><button className='bg-teal-500 text-white px-8 py-3 hover:bg-teal-700'>Details</button></Link>
                                    <button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700' onClick={() => {
                                        setServiceToBeBookedInfo(service);
                                        setIsModalOpen(true);
                                    }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>}
        </>
    );
};

export default AllService;