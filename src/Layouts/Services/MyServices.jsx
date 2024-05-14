import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { AuthContext } from '../../Providers/AuthProvider';
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
                fetch(`http://localhost:3000/service/delete/${idToBeDeleted}`, {
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
            fetch(`http://localhost:3000/services/all?email=${user.email}`)
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
            {myServices.map(service =>
                <div key={service?._id} className='flex gap-10 border border-teal-500 p-3 shadow-xl rounded-xl mb-5'>
                    <img
                        src={service?.imageURL}
                        alt=""
                        className='w-96'
                    />

                    <div className='service details w-[500px] grow space-y-5'>
                        <h1 className='text-3xl font-semibold'>{service?.serviceTitle}</h1>
                        <p>{service?.description?.slice(0, 200)}<span className='font-bold'>...more</span></p>

                    </div>


                    <div className='buttons flex items-center'>
                        <div className=' flex flex-col gap-5'>
                            <Link to={`/service/${service?.sequence_value}`}><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Details</button></Link>
                            <Link to={`/update-service/${service?.sequence_value}`}><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Update</button></Link>
                            <button
                                className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-3'
                                onClick={() => {
                                    setIdToBeDeleted(service?._id);
                                }}
                            >Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyServices;