
import { MainApi } from "../Shared/MainApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const AllClasses = () => {
    const [classes, setClasses] = useState(null);
    const {user,roleData} =useContext(AuthContext)
    const navigate = useNavigate()


    // console.log(classes, ' from classes');
    console.log(roleData,"role asche");

     // console.log(classes, ' from classes');

     const {
        data:myClass= [],
       refetch
      } = useQuery({
        queryKey: ["myClass"],
        queryFn: () =>
          fetch(
            `${MainApi}/addClasses`
          )
            .then((res) => res.json())
            .then((data) => setClasses(data)),
      });


const handleSelect=data =>{
    data.user= user?.email
   if(user?.email){
    fetch(`${MainApi}/selectClass`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(res => res.json())
    .then(result => {
        console.log(result,'savedUser');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })
   }
   else{
    navigate('/login')

   }

}

return (
    <div> 
        <h1 className="text-center text-3xl font-semibold py-6">Our Classes</h1>
     <section className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
     {classes && classes?.map(data => (
        <div key={data._id}>
          <div className={`flex flex-col justify-center 
          rounded py-2
          items-center
           ${data?.seats === "0" && "disabled bg-red-500 text-white"}
          `}>
        <img  src={data?.img} className="w-[300px] h-[150px] mx-auto" alt="" />
        <h2>{data?.name}</h2>
        <button  disabled={data?.seats === "0" || roleData === ("admin" || "instructor" ) && true} onClick={()=>handleSelect(data)} className={`py-2 bg-blue-500  text-white font-bold px-3 
        rounded-xl  my-2 ${data?.seats <1 || roleData === ("admin" || "instructor" )? "disabled bg-slate-700 cursor-not-allowed":""}

        `}>Select</button>

          </div>
        </div>
      ))}
     </section>
    </div>
  );

};

export default AllClasses;