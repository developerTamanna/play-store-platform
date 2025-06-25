import React, { useContext } from 'react';
import { valueContext } from '../../RootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({children}) => {
    // console.log(children)
    const {user,loading} = useContext(valueContext);
    const location = useLocation()
    // console.log(location)
    if(loading){
        return <Loading></Loading>
    }
    if(!user || !user.email){
         return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    
    return (
        <div>
            
            {children}
        </div>
    );
};

export default PrivateRoute;