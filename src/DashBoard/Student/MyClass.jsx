import Swal from "sweetalert2";
import { MainApi } from "../../Pages/Shared/MainApi";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const MyClass = () => {
    const {user} = useContext(AuthContext)
    const [classData,setData] = useState({})
    
    const [refresh,setrefresh] = useState(true)
    
    useEffect(() => {
     // Perform the data fetch
   
     axios.get(`${MainApi}/myclass/${user?.email}`).then((data) => {
        //   console.log(data.data);
        setData(data.data);
      });
   
   }, [user?.email,refresh]);


console.log(classData,"clasData");

    const deleteHandler= (data) => {
       

        fetch(`${MainApi}/deleteClass`, {
            method: 'DELETE',
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
        <div className="w-full">
            <h2 className="text-2xl font-bold text-center">My Class</h2>
            <section className="grid grid-cols-1 gap-2 ">
                {classData?.length &&
                    classData?.map((classs, index) => {
                        return <aside
                            key={index}
                            className=" block lg:flex  bg-slate-300  rounded-lgflex justify-around items-center w-full mx-auto text-center"
                        >
                            <img className="h-[80px] w-[200px] mx-auto " src={classs?.img} alt="" />
                            <div>
                                <p>{classs.name}</p>
                                <p>{classs.email}</p>
                                <p>Role :{classs?.role}</p>
                            </div>
                            <div className="">
                               <button onClick={()=>deleteHandler(classs)} className="bg-red-600 p-2 rounded-md" >Delete </button>
                            </div>
                        </aside>
                    })
                }
            </section>
        </div>
    );
};


export default MyClass;