import React from 'react';
import { Modal } from 'antd';
import { useFormik } from 'formik';

const BookService = ({ isModalOpen, setIsModalOpen }) => {

    const { values, setValues, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            serviceId: '',
            serviceTitle: '',
            price: '',
            imageURL: '',
            providerInfo: {
                providerName: '',
                providerEmail: '',
                providerImageURL: '',
            },
            customerInfo: {
                customerName: '',
                customerEmail: '',
            },
            status: 'Pending'

        },
        onSubmit: values => {
            // Handle form submission here
            console.log(values)
        },
    });

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
                <form onSubmit={handleSubmit} className=' mx-auto space-y-3 my-10'>
                    <div>
                        <label htmlFor="">Service ID</label>
                        <input
                            type="text"
                            name="serviceId"
                            value={values?.serviceId}
                            id=""
                            onChange={handleChange}
                            className='border w-full py-2 pl-2'
                            placeholder='Service ID'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Service Name</label>
                        <input
                            type="text"
                            name="serviceTitle"
                            value={values?.serviceTitle}
                            id=""
                            onChange={handleChange}
                            className='border w-full py-2 pl-2'
                            placeholder='Service Title'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Service ImageURL</label>
                        <input
                            type="text"
                            name="imageURL"
                            value={values?.imageURL}
                            id=""
                            onChange={handleChange}
                            className='border w-full py-2 pl-2'
                            placeholder='Service ImageURL'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={values?.price}
                            id=""
                            onChange={handleChange}
                            className='border w-full py-2 pl-2'
                            placeholder='Service Price'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Provider Name</label>
                        <input
                            type="text"
                            name="providerInfo.providerName"
                            value={values?.providerInfo?.providerName}
                            onChange={handleChange}
                            id=""
                            className='border w-full py-2 pl-2'
                            placeholder='Provider Name'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Provider Email</label>
                        <input
                            type="text"
                            name="providerInfo.providerEmail"
                            value={values?.providerInfo?.providerEmail}
                            onChange={handleChange}
                            id=""
                            className='border w-full py-2 pl-2'
                            placeholder='Provider Email'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Current User Name</label>
                        <input
                            type="text"
                            name="customerInfo.customerName"
                            value={values?.customerInfo?.customerName}
                            onChange={handleChange}
                            id=""
                            rows="5"
                            className='border w-full py-2 pl-2'
                            placeholder='Current User Name'
                        />
                    </div>

                    <div>
                        <label htmlFor="">Current User Email</label>
                        <input
                            type="text"
                            name="customerInfo.customerEmail"
                            value={values?.customerInfo?.customerEmail}
                            onChange={handleChange}
                            id=""
                            rows="5"
                            className='border w-full py-2 pl-2'
                            placeholder='Current User Email'
                        />
                    </div>

                    <button
                        type='submit'
                        className='border border-teal-500 px-5 py-3 text-teal-500 hover:text-white hover:bg-teal-500 w-full'
                    >Book Service</button>
                </form>
            </Modal>
        </>
    );
};
export default BookService;