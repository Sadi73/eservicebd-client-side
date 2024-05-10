import { Button, Divider, Input } from 'antd';
import React from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='flex border mt-5 w-[80%] mx-auto min-h-[550px] rounded-lg'>
            <div className='flex items-center justify-center grow'>
                <div className='space-y-5'>
                    <h1 className='text-center text-3xl text-teal-500 font-semibold'>Sign In to BD Services</h1>
                    <div className='flex justify-center'>
                        <Button type="" shape="circle">
                            G
                        </Button>
                    </div>

                    <Divider>OR</Divider>

                    <Input
                        className='py-3'
                        placeholder="Email"
                        prefix={
                            <MailOutlined
                                style={{
                                    color: 'rgba(0,0,0,.25)',
                                }}
                            />
                        }
                    />


                    <Input.Password
                        className='py-3'
                        placeholder="Password"
                        prefix={
                            <LockOutlined
                                style={{
                                    color: 'rgba(0,0,0,.25)',
                                }}
                            />
                        }

                    />


                    <div className='flex justify-center'>
                        <button className='bg-teal-500 text-white px-10 py-3 rounded-full'>Sign In</button>
                    </div>

                </div>
            </div>

            <div className='border-r bg-teal-500 text-center text-white w-[40%] flex justify-center items-center rounded-r-lg'>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold'>Hello, Friend!</h1>
                    <p className=''>Enter Your Personal Details <br /> and  start journey with us</p>
                    <div>
                        <Link to="/register"><button className='border px-10 py-3 rounded-full'>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;