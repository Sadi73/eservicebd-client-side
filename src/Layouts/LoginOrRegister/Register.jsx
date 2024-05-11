import React, { useContext } from 'react';
import { Button, Divider, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, FileImageOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { signUpWithEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, setValues, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            photoURL: '',
            password: '',
            confirmPassword: ''

        },
        onSubmit: values => {
            // Handle form submission here
            console.log(values);
            if (values?.password === values?.confirmPassword) {
                signUpWithEmailAndPassword(values?.email, values?.password)
                    .then(result => {
                        if (result?.user?.email) {
                            navigate('/');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
    })


    return (
        <div className='flex border mt-5 w-[80%] mx-auto min-h-[550px] rounded-lg'>

            <div className='border-r bg-teal-500 text-center text-white grow flex justify-center items-center rounded-l-lg'>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold'>Welcome Back</h1>
                    <p className=''>To keep connected with us, <br /> please login with your personal info</p>
                    <div>
                        <Link to="/login"><button className='border px-10 py-3 rounded-full'>Sign In</button></Link>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-[60%]'>
                <div className='space-y-5 '>
                    <h1 className='text-center text-3xl text-teal-500 font-semibold'>Create Account</h1>
                    <div className='flex justify-center'>
                        <Button type="" shape="circle">
                            G
                        </Button>
                    </div>

                    <Divider>OR</Divider>

                    <form onSubmit={handleSubmit}>
                        <div className='w-3/4 mx-auto space-y-3'>
                            <Input
                                name='name'
                                value={values?.name}
                                onChange={handleChange}
                                className='py-3 '
                                placeholder="Name"
                                prefix={
                                    <UserOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.25)',
                                        }}
                                    />
                                }
                            />

                            <Input
                                name='email'
                                value={values?.email}
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

                            <Input
                                name='photoURL'
                                value={values?.photoURL}
                                onChange={handleChange}
                                className='py-3'
                                placeholder="PhotoURL"
                                prefix={
                                    <FileImageOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.25)',
                                        }}
                                    />
                                }
                            />


                            <Input.Password
                                name='password'
                                value={values?.password}
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

                            <Input.Password
                                name='confirmPassword'
                                value={values?.confirmPassword}
                                onChange={handleChange}
                                className='py-3'
                                placeholder="Confirm Password"
                                prefix={
                                    <LockOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.25)',
                                        }}
                                    />
                                }

                            />
                        </div>


                        <div className='flex justify-center'>
                            <button type='submit' className='bg-teal-500 text-white px-10 py-3 rounded-full'>Sign In</button>
                        </div>
                    </form>

                </div>
            </div>


        </div>
    );
};

export default Register;