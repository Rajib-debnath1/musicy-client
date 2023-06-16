import Swal from "sweetalert2";
import useGetData from "../../Pages/Shared/usegetData";
import { MainApi } from "../../Pages/Shared/MainApi";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AllUsers = () => {
    const {roleData} = useContext(AuthContext)
   const [data,setData] = useState([])
   const [refresh,setrefresh] = useState(false)
   
   useEffect(() => {
    // Perform the data fetch
    fetch(`${MainApi}/allUsers`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    
  }, [refresh]);

    // console.log(data,"allUser");

    const makeAdmin = (id, role) => {
        const data = { id, role }

        fetch(`${MainApi}/changeRole`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, '');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                setrefresh(change=>!change)
            })
    }

    return (
        <div>
            <h2 className="text-xl font-bold">all users</h2>
            <section className="grid grid-cols-1 gap-5">
                {roleData==='admin'&&
                    data?.map((user, index) => {
                        return <aside
                            key={index}
                            className="flex justify-between items-center w-full"
                        >
                            <div>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>Role :{user?.role}</p>
                            </div>
                            <div className="">
                                <button
                                    disabled={user?.role !== 'student'&& true}
                                    onClick={() => makeAdmin(user._id, 'admin')}
                                    className="btn btn-outline btn-info"
                                >
                                    Make Admin
                                </button>

                                <button
                                    disabled={user?.role !== 'student' && true}
                                    onClick={() => makeAdmin(user._id, 'instructor')}
                                    className="btn btn-outline btn-success"
                                >
                                    Make Instructor
                                </button>
                            </div>
                        </aside>
                    })
                }
            </section>
        </div>
    );
};

export default AllUsers;