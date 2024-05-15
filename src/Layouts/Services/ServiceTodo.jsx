import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import EmptyScreenView from '../EmptyScreenView/EmptyScreenView';



const ServiceTodo = () => {
    const items = [
        {
            label: 'Pending',
            key: '0',
            onClick: () => handleStatus('Pending'),
        },
        {
            label: 'Confirmed',
            key: '1',
            onClick: () => handleStatus('Confirmed'),
        },
        {
            label: 'Working',
            key: '3',
            onClick: () => handleStatus('Working'),
        },
    ];

    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [reload, setReload] = useState(false);
    const [serviceIdToUpdateStatus, setServiceIdToUpdateStatus] = useState(null);

    useEffect(() => {
        fetch(`https://b9a11serverside-sadi73s-projects.vercel.app/booked-service/all?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [reload]);

    const handleStatus = (status) => {
        fetch(`https://b9a11serverside-sadi73s-projects.vercel.app/booked-service/${serviceIdToUpdateStatus}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload);
            })
    }

    return (
        <div className='w-[80%] mx-auto mt-10 space-y-5'>
            {services?.length > 0 ? services.map(service =>
                <div className='flex items-center gap-10 border border-teal-500 p-3 shadow-xl rounded-xl mb-5 h-60'>
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
                        <h1 className='text-xl'>Service Requester</h1>
                        <div className='flex items-center gap-3'>
                            <Avatar />
                            <h1 className='font-bold'>{service?.customerInfo?.customerName}</h1>
                        </div>
                        <p className='font-semibold'>{service?.customerInfo?.customerEmail}</p>
                    </div>

                    <div className='buttons flex items-center'>
                        <div className=' flex flex-col gap-5'>
                            <Dropdown
                                menu={{ items }}
                                trigger={['click']}
                            >
                                <Space>
                                    <button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700 flex items-center gap-2' onClick={() => setServiceIdToUpdateStatus(service?._id)}>{service?.status}<DownOutlined /></button>
                                </Space>
                            </Dropdown>
                        </div>
                    </div>
                </div>) : <EmptyScreenView/>
            }
        </div>
    );
};

export default ServiceTodo;