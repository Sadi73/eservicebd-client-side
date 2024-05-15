import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { AuthContext } from '../../Providers/AuthProvider';
import EmptyScreenView from '../EmptyScreenView/EmptyScreenView';
import { Helmet } from 'react-helmet-async';
const { confirm } = Modal;

const MyServices = () => {

    const { user } = useContext(AuthContext);
    const [myServices, setMyServices] = useState([]);
    const [reload, setReload] = useState(false);

    const [idToBeDeleted, setIdToBeDeleted] = useState(null);

    const showConfirm = () => {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            onOk() {
                fetch(`https://b9a11serverside-sadi73s-projects.vercel.app/service/delete/${idToBeDeleted}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount) {
                            setReload(!reload);
                        }
                    })
            },
            onCancel() {
                Modal.destroyAll();
            },
        });
    };

    useEffect(() => {
        if (user?.email) {
            fetch(`https://b9a11serverside-sadi73s-projects.vercel.app/services/all?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyServices(data))
        }
    }, [reload]);

    useEffect(() => {
        if (idToBeDeleted !== null) {
            showConfirm();
        }
    }, [idToBeDeleted]);


    return (
        <div className='my-10 px-10'>
            <Helmet>
                <title>EServiceBD | My Service</title>
            </Helmet>

            {myServices?.length > 0 ? myServices.map(service =>
                <div key={service?.sequence_value} className='md:flex gap-10 border border-teal-500 p-3 shadow-xl rounded-xl mb-5'>
                    <div className='md:flex gap-10 grow items-center'>
                        <img
                            src={service?.imageURL}
                            alt=""
                            className='w-full md:w-72 lg:w-96'
                        />

                        <div className='service details md:w-[500px] grow space-y-5 mt-5 md:mt-0 text-center'>
                            <h1 className='text-3xl font-semibold'>{service?.serviceTitle}</h1>
                            <p>{service?.description?.slice(0, 200)}<span className='font-bold'>...more</span></p>

                        </div>
                    </div>


                    <div className='buttons flex items-center justify-center mt-8 md:mt-0'>
                        <div className=' flex md:flex-col gap-5'>
                            <Link to={`/service/${service?.sequence_value}`}><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Details</button></Link>
                            <Link to={`/update-service/${service?.sequence_value}`}><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Update</button></Link>
                            <button
                                className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-3'
                                onClick={() => {
                                    setIdToBeDeleted(service?.sequence_value);
                                }}
                            >Delete</button>
                        </div>
                    </div>
                </div>) : <EmptyScreenView />
            }
        </div>
    );
};

export default MyServices;