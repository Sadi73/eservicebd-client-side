import React from 'react';
import errorImage from '../../assets/404.gif';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-3xl font-semibold'>Sorry!!!</h1>
            <p>Page Not Found</p>
            <img src={errorImage} alt="" />

        </div>
    );
};

export default ErrorPage;