import Swal from "sweetalert2";
import { MainApi } from "../../Pages/Shared/MainApi";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import axios from "axios";
import FeedBack from "./FeedBack";




const ManageClass= () => {
    const { user } = useContext(AuthContext)
    const [classData, setData] = useState({})

    const [refresh, setrefresh] = useState(true)
   


    useEffect(() => {
        // Perform the data fetch

        axios.get(`${MainApi}/manageClasss`).then((data) => {
            //   console.log(data.data);
            setData(data.data);
        });

    }, [user?.email, refresh]);


    console.log(classData, "clasData");

const handleButton = (type,data)=>{
    data.status=type
    const newData = {...data,type:type}

    console.log(type,data);
    fetch(`${MainApi}/updateManageClass`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          
          setrefresh(change => !change);
        })
        .catch(error => {
          console.error('Error:', error);

          // Handle the error as needed
        });
}



    return (
        <div className="w-full">
            <h2>My Class</h2>
            <section className="grid grid-cols-1 gap-2 ">
                {classData?.length &&
                    classData?.map((classs, index) => {
                        return <aside
                            key={index}
                            className=" block lg:flex  bg-slate-300  rounded-lgflex justify-around items-center w-full mx-auto text-center"
                        >
                            <img className="h-[80px] w-[200px] mx-auto " src={classs?.img} alt="" />
                            <div>
                                <p>Instructor:{classs.name}</p>
                                <p>Instructor Email:{classs.email}</p>
                                <p>Price:{classs.price}</p>
                                <p>Status:  {classs?.status}</p>
                                <p>Total Enrolled : 0 </p>
                                <p>FeedBack : {classs?.feedback}</p>
                            </div>
                            {/* modal */}
                            <div className="flex gap-2">

                            <button 
                            disabled={classs?.status!=="pending"?true:false}
                            
                            className={`bg-blue-400 p-2 rounded 
                            ${classs?.status!=="pending"?"bg-slate-500 cursor-not-allowed":""}
                            mx-auto text-white font-bold`} onClick={()=>handleButton("approved",classs)} >Approved </button>

                                <button   
                                disabled={classs?.status!=="pending"?true:false}
                            
                                className={`bg-blue-400 p-2 rounded 
                                ${classs?.status!=="pending"?"bg-slate-500 cursor-not-allowed":""}
                                mx-auto text-white font-bold`}
                                 onClick={()=>handleButton("denied",classs)} >Denny</button>
                                                    {/* The button to open modal */}
                                                    {classs?.status !== "pending" &&

                        <label htmlFor={classs?._id} className="btn">Feedback</label>
}

                               

<FeedBack modal={classs?._id} classData={classs} setrefresh={setrefresh}></FeedBack>

                            </div>
                        </aside>
                    })
                }
            </section>
        </div>
    );
};

export default ManageClass;