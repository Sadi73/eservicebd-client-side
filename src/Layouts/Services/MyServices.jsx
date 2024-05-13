import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { AuthContext } from '../../Providers/AuthProvider';
const { confirm } = Modal;

const MyServices = () => {

    const { user } = useContext(AuthContext)

    const showConfirm = () => {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
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
                .then(data => console.log(data))
        }
    }, []);


    return (
        <div className='my-10 px-10'>
            <div className='flex gap-10 border border-teal-500 p-3 shadow-xl rounded-xl'>
                <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    alt=""
                    className='w-96'
                />

                <div className='service details w-[500px] flex flex-col grow'>
                    <h1>Name</h1>
                    <p>Description</p>

                </div>


                <div className='buttons flex items-center'>
                    <div className=' flex flex-col gap-5'>
                        <Link to="/service/1"><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Details</button></Link>
                        <Link to="/add-new-service"><button className='bg-teal-500 text-white px-5 py-3 hover:bg-teal-700'>Update</button></Link>
                        <button
                            className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-3'
                            onClick={showConfirm}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;