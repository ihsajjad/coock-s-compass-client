import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if(loading){
        return <h2>Loading...</h2>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to='/login' state={{from: location}} replace></Navigate>
        </div>
    );
};

export default PrivetRoute;