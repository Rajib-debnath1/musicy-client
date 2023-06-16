import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { MainApi } from "../../Pages/Shared/MainApi";
import Swal from "sweetalert2";

const AddClasses = () => {
    const {user} = useContext(AuthContext)
    // console.log(user);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data =>{ 
        data.email=user?.email;
        data.instructor = user?.displayName || "Rajib";
        
        console.log(data);

        fetch(`${MainApi}/addClasses`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
        })
        

      
       
    };




    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" mr-12 w-1/2">
                <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.1.1371786472.1680197785&semt=ais" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Add Classes </h1>

                    <form onSubmit={handleSubmit(onSubmit)}> 
                       
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name",{required: true})} name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Email is required</span>}
                        </div>
                   
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" placeholder=" paste Image" {...register("img",{required: true})} name="img" className="input input-bordered" />
                            {errors.img && <span className="text-red-600">img is required</span>}
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" placeholder=" Avilable Seats" {...register("seats",{required: true})} name="seats" className="input input-bordered" />
                            {errors.seats && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder=" Price" {...register("price",{required: true})} name="price" className="input input-bordered" />
                            {errors.price && <span className="text-red-600">Email is required</span>}
                        </div>
                 
                     
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="Submit" value="submit" />
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddClasses;