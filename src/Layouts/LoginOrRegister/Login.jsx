import { Button, Divider, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useFormik } from 'formik';

const Login = () => {

    const { googleSignIn, loginWithEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [authError, setAuthError] = useState(false);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result?.user?.email) {
                    navigate(location?.state ? location?.state : '/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    };

    const { values, setValues, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit: values => {
            // Handle form submission here
            loginWithEmailAndPassword(values?.email, values?.password)
                .then(result => {
                    setAuthError(false);
                    if (result?.user?.email) {
                        const userInfo = { email: result.user.email }
                        fetch('https://b9a11serverside-sadi73s-projects.vercel.app/jwt', {
                            method: 'post',
                            credentials: 'include',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data?.success) {
                                    navigate(location?.state ? location?.state : '/')
                                }
                            });
                    }

                })
                .catch(error => {
                    setAuthError(true);
                })
        },
    });

    return (
        <div className='flex border mt-5 w-[80%] mx-auto min-h-[550px] rounded-lg'>
            <div className='flex items-center justify-center grow'>
                <div className='space-y-5'>
                    <h1 className='text-center text-3xl text-teal-500 font-semibold'>Sign In to BD Services</h1>
                    <div className='flex justify-center'>
                        <Button type="" shape="circle" onClick={handleGoogleSignIn}>
                            G
                        </Button>
                    </div>

                    <Divider>OR</Divider>

                    {authError && <p className='text-red-500 font-semibold'>Wrong Email/Password!!!</p>}

                    <form className='space-y-5' onSubmit={handleSubmit}>
                        <Input
                            name='email'
                            onChange={handleChange}
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
                            name='password'
                            onChange={handleChange}
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
                            <button type='submit' className='bg-teal-500 text-white px-10 py-3 rounded-full'>Sign In</button>
                        </div>
                    </form>

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