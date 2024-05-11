import React from 'react';
import { Modal } from 'antd';

const BookService = ({ isModalOpen, setIsModalOpen }) => {

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Book Service"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={700}
            >
                <form className=' mx-auto space-y-3 my-10'>
                    <div>
                        <label htmlFor="">Service ID</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service ID' />
                    </div>

                    <div>
                        <label htmlFor="">Service Name</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service Title' />
                    </div>

                    <div>
                        <label htmlFor="">Service ImageURL</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service ImageURL' />
                    </div>

                    <div>
                        <label htmlFor="">Price</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service Price' />
                    </div>

                    <div>
                        <label htmlFor="">Provider Name</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Provider Name' />
                    </div>

                    <div>
                        <label htmlFor="">Provider Email</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Provider Email' />
                    </div>

                    <div>
                        <label htmlFor="">Current User Name</label>
                        <input type="text" name="" id="" rows="5" className='border w-full py-2 pl-2' placeholder='Current User Name' />
                    </div>

                    <div>
                        <label htmlFor="">Current User Email</label>
                        <input type="text" name="" id="" rows="5" className='border w-full py-2 pl-2' placeholder='Current User Email' />
                    </div>

                    <button className='border border-teal-500 px-5 py-3 text-teal-500 hover:text-white hover:bg-teal-500 w-full'>Book Service</button>
                </form>
            </Modal>
        </>
    );
};
export default BookService;