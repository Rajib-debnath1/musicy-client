/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const AdminRoute = ({children}) => {

    const {user, roleData} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
  

    if(user  &&  roleData === "admin"){
        return children;
    }
    return <Navigate state={{from: location}} to='/' replace></Navigate>;
};

export default AdminRoute;