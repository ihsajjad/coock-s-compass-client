import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const errorObj = useRouteError();
    const {status, statusText, error} = errorObj;
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center bg-black text-yellow-500'>
            <FaRegSadTear className='text-9xl'/>
            <h1 className='text-3xl font-bold'>{statusText}</h1>
            <h1 className='text-5xl font-bold'>{status}</h1>
            <p className=''>{error.message}</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default NotFound;