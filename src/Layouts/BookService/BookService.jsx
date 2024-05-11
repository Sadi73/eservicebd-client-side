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
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}

            >
                <form className=' mx-auto space-y-3 my-10'>
                    <div>
                        <label htmlFor="">Service Title</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service Title' />
                    </div>

                    <div>
                        <label htmlFor="">Price</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service Price' />
                    </div>

                    <div>
                        <label htmlFor="">ImageURL</label>
                        <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service ImageURL' />
                    </div>

                    <div>
                        <label htmlFor="">Description</label>
                        <textarea type="text" name="" id="" rows="5" className='border w-full py-2 pl-2' placeholder='Service Description' />
                    </div>

                    <button className='border border-teal-500 px-5 py-3 text-teal-500 hover:text-white hover:bg-teal-500 w-full'>Book Service</button>
                </form>
            </Modal>
        </>
    );
};
export default BookService;