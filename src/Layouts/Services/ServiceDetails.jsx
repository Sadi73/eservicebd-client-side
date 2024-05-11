import React, { useState } from 'react';
import BookService from '../BookService/BookService';

const ServiceDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <div className='my-10 px-10'>
                <div className='flex gap-5'>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="" />
                    <div>
                        <h1>Service Name</h1>
                        <p>Service Details</p>
                        <p>Service Price</p>
                    </div>
                </div>

                <div className='flex gap-5 justify-between'>
                    <div>
                        <h1>Provider Info</h1>
                        <h1>Provider Name</h1>
                        <p>Service area</p>
                    </div>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="" />
                </div>

                <button className='bg-teal-500 text-white px-5 py-3' onClick={() => setIsModalOpen(true)}>Book Now</button>
            </div>

            {
                isModalOpen &&
                <BookService
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            }
        </>
    );
};

export default ServiceDetails;