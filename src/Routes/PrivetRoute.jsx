/* eslint-disable react/prop-types */

import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};


export default PrivetRoute;