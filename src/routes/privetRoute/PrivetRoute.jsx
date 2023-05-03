import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if (loading) {
        return <div className='flex items-center justify-center bg-purple-400 rounded w-52 py-2 px-4 text-white'>
            <h5 className='text-3xl mr-2'>Loading...</h5>
            <div className='animate-spin h-8 w-8 border-4 border-dashed border-white rounded-full'></div>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </div>
    );
};

export default PrivetRoute;