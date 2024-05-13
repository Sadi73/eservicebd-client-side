import { Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookService from '../BookService/BookService';

const AllService = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services/all')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    return (
        <div className='my-10 px-10'>
            {allServices.map(service =>
                <div key={service?._id} className='flex gap-10 border border-teal-500 p-3 shadow-xl rounded-xl mb-5'>
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        alt=""
                        className='w-96'
                    />

                    <div className='service details w-[500px] flex flex-col'>
                        <h1>{service?.serviceTitle}</h1>
                        <p>{service?.description}</p>
                    </div>

                    <div className='service provider info w-[300px]'>
                        <h1>Service Provider</h1>
                        <div className='flex items-center gap-3'>
                            <Avatar />
                            <h1>{service?.providerInfo?.providerName}</h1>
                        </div>
                        <p>{service?.providerInfo?.providerEmail}</p>
                    </div>

                    <div className='buttons flex items-center'>
                        <div className=' flex flex-col gap-5'>
                            <Link to={`/service/${service._id}`}><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Details</button></Link>
                            <button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700' onClick={() => setIsModalOpen(true)}>Book Now</button>
                        </div>
                    </div>
                </div>
            )
            }

            {isModalOpen &&
                <BookService
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            }
        </div>
    );
};

export default AllService;