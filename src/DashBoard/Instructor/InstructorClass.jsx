import Swal from "sweetalert2";
import { MainApi } from "../../Pages/Shared/MainApi";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import axios from "axios";
import Modal from "./Modal";


const InstructorClass = () => {
    const { user } = useContext(AuthContext)
    const [classData, setData] = useState({})

    const [refresh, setrefresh] = useState(true)
    const [close, setClose] = useState(true)


    useEffect(() => {
        // Perform the data fetch

        axios.get(`${MainApi}/instructorclass/${user?.email}`).then((data) => {
            //   console.log(data.data);
            setData(data.data);
        });
   

    }, [user?.email, refresh]);


    console.log(classData, "clasData");



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
                                <p>Name:{classs.name}</p>
                                <p>Email:{classs.email}</p>
                                <p>Price:{classs.price}</p>
                                <p>Status:  {classs?.status}</p>
                                <p>Total Enrolled : 0 </p>
                                <p>FeedBack : {classs?.feedback}</p>
                            </div>
                            {/* modal */}
                            <div className="">
                                <label htmlFor={classs.name} className="btn">open modal</label>



                                <Modal allData={classs} modal={classs.name} setrefresh={setrefresh} setClose={setClose}
                                    
                                    />


                            </div>
                        </aside>
                    })
                }
            </section>
        </div>
    );
};

export default InstructorClass;