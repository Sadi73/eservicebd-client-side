import React, { useContext } from 'react';
import { Modal } from 'antd';
import { useFormik } from 'formik';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = ({ isModalOpen, setIsModalOpen, serviceToBeBookedInfo }) => {

    const { user } = useContext(AuthContext);

    const { values, setValues, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            sequence_value: serviceToBeBookedInfo?.sequence_value,
            serviceTitle: serviceToBeBookedInfo?.serviceTitle,
            price: serviceToBeBookedInfo?.price,
            imageURL: serviceToBeBookedInfo?.imageURL,
            providerInfo: {
                providerName: serviceToBeBookedInfo?.providerInfo?.providerName,
                providerEmail: serviceToBeBookedInfo?.providerInfo?.providerEmail,
                providerImageURL: serviceToBeBookedInfo?.providerInfo?.providerImageURL,
            },
            customerInfo: {
                customerName: user?.displayName,
                customerEmail: user?.email,
            },
            status: 'Pending'

        },
        onSubmit: values => {
            fetch('http://localhost:3000/book-service', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => console.log(data))
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
                            name="sequence_value"
                            value={values?.sequence_value}
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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