/* eslint-disable react/prop-types */
import React from 'react';
import { useForm } from 'react-hook-form';
import { MainApi } from '../../Pages/Shared/MainApi';
import Swal from 'sweetalert2';

const Modal = ({modal,allData,setrefresh,setClose}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
const {name,img,seats,price} = allData
// console.log(allData);
    const onSubmit=data=>{
        console.log(data);

        fetch(`${MainApi}/updateClass`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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

              setClose(false)
              setrefresh(change => !change);
            })
            .catch(error => {
              console.error('Error:', error);

              // Handle the error as needed
            });

    }

    
    return (
        <div>
            
            <input type="checkbox" id={modal} className="modal-toggle" />
            <div className="modal">
                {/* <label htmlFor={modal} className="btn">Close!</label> */}
                <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}> 
                <h3 className='font-bold'>Update Class</h3>
                       
                       <div className="form-control">

                           <label className="label">
                               <span className="label-text">Class Name</span>
                           </label>
                           <input 
                           type="text" placeholder="name" {...register("name",{required: true})} name="name" className="input input-bordered"
                           defaultValue={name}
                            />
                           {errors.name && <span className="text-red-600">Email is required</span>}
                       </div>
                  
                       <div className="form-control">

                           <label className="label">
                               <span className="label-text">Class Image</span>
                           </label>
                           <input type="text" placeholder=" paste Image" {...register("img",{required: true})} name="img" className="input input-bordered"
                             defaultValue={img}
                            />
                           {errors.img && <span className="text-red-600">img is required</span>}
                       </div>
                       <div className="form-control">

                           <label className="label">
                               <span className="label-text">Available Seats</span>
                           </label>
                           <input type="text" placeholder=" Avilable Seats" {...register("seats",{required: true})} name="seats" className="input input-bordered" 
                             defaultValue={seats}
                           />
                           {errors.seats && <span className="text-red-600">Email is required</span>}
                       </div>
                       <div className="form-control">

                           <label className="label">
                               <span className="label-text">Price</span>
                           </label>
                           <input type="text" placeholder=" Price" {...register("price",{required: true})} name="price" className="input input-bordered" 
                             defaultValue={price}
                           />
                           {errors.price && <span className="text-red-600">Email is required</span>}
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

export default Modal;