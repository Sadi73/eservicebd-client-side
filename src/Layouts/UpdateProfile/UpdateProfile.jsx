import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const { values, setValues, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            displayName: user?.displayName || '',
            email: user?.email,
            photoURL: user?.photoURL || '',

        },
        onSubmit: values => {
            // Handle form submission here
            updateProfile(auth.currentUser, {
                displayName: values?.displayName,
                photoURL: values?.photoURL
            })
                .then(() => navigate('/'))
                .catch(error => console.log(error))
        },
    });


    return (
        <div>

            <h1 className='text-5xl font-semibold text-center mt-10'>Update Profile</h1>

            <form
                onSubmit={handleSubmit}
                className='w-[600px]  mx-auto space-y-3 my-10'
            >
                <div>
                    <label htmlFor="">Display name Name</label>
                    <input
                        type="text"
                        name="displayName"
                        onChange={handleChange}
                        value={values?.displayName}
                        id=""
                        className='border w-full py-2 pl-2'
                        placeholder='Display Name'
                    />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={values?.email}
                        disabled
                        id=""
                        className='border w-full py-2 pl-2'
                        placeholder='Email'
                    />
                </div>

                <div>
                    <label htmlFor="">ImageURL</label>
                    <input
                        type="text"
                        name="photoURL"
                        onChange={handleChange}
                        value={values?.photoURL}
                        id=""
                        className='border w-full py-2 pl-2'
                        placeholder='ImageURL'
                    />
                </div>

                <button type='submit'
                    className='border border-teal-500 px-5 py-3 text-teal-500 hover:text-white hover:bg-teal-500 w-full'
                >Update Profile</button>
            </form>

        </div>
    );
};

export default UpdateProfile;