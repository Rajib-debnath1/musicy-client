/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MainApi } from "../../Pages/Shared/MainApi";


const FeedBack = ({modal,classData,setrefresh}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=data=>{
        console.log(data,classData);
        const newData = {...data,...classData}

        fetch(`${MainApi}/feedback`, {
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
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={modal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}> 
                <h3 className='font-bold'>Reson the denied</h3>
                       
                       <div className="form-control">

                           <label className="label">
                               <span className="label-text">Class Name</span>
                           </label>
                           <textarea
                           type="text" placeholder="feedback" {...register("feedback",{required: true})} name="feedback" className="input input-bordered"
                         
                            />
                           {errors.name && <span className="text-red-600">Email is required</span>}
                       </div>
                       <div className="form-control mt-6">
                           <input className="btn btn-primary" type="Submit" value="submit" />
                       </div>
                       </form>
                    <div className="modal-action">
                        <label htmlFor={modal} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;