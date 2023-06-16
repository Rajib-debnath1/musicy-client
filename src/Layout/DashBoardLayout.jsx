import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useState } from "react";
import { useEffect } from "react";
import { MainApi } from "../Pages/Shared/MainApi";

const DashBoardLayout = () => {

    const {user} = useContext(AuthContext);
    console.log(user?.email,"user in dHS");


    // const {data:role} = useGetData();
    const [roleData,setRoleData] = useState("")

    useEffect(()=>{
        fetch(`${MainApi}/checkRole/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setRoleData(data))
    },[user?.email])

    console.log(roleData, 'role data from check role');

    return (
        <div className="drawer lg:drawer-open  mt-[4.1rem] lg:mt-[4.9rem]">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">

    <Outlet></Outlet>
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side  mt-[4.1rem] lg:mt-[0.1rem]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}

      {roleData?.role === "admin" &&
      <>
      <li><Link to='/dashboard/allUsers'>AllUsers {roleData?.role}</Link></li>
      </>
      }
      {roleData?.role === "instructor" &&
      <>
      <li><Link to='/dashboard/allUsers'>AllUsers {roleData?.role}</Link></li>
      </>

      }
      

      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
    );
};

export default DashBoardLayout;