import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2'
import { MainApi } from "../Shared/MainApi";




const SignUp = () => {
    const navigate= useNavigate()

    const [error, setError] =useState('');

    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {createUser,googleSign} = useContext(AuthContext);


    const onSubmit = data =>{ 
        console.log(data);
        
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
         

              saveUser(data)
        })
    };


    const handleGoogle =()=>{
        googleSign().then(result=>{
            const user = result.user;
            console.log(user);
          

            saveUser({email: user.email, name:user.displayName,img:user?.photoURL})
        }).catch(er=>{
            setError(er)
            console.log(er);
        })
        console.log(googleSign,"and","click hoiche");
    }


    const saveUser = data =>{
        data.role = "student"
        // console.log(data,'from saveUser');
        
        fetch(`${MainApi}/addUsers`,{
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
              navigate('/')

        })

    }

    // console.log(watch("example"));


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" mr-12 w-1/2">
                <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.1.1371786472.1680197785&semt=ais" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>

                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name",{ required: true })} name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required!!</span>}
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="paste your photo" {...register("img",{required: true})} name="img" className="input input-bordered" />
                            {errors.img && <span className="text-red-600">Photo is required!!</span>}
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email",{required: true})} name="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password",
                            // { required: true,
                            //      minLength: 6 ,
                            //       maxLength: 20,
                            //       pattern: / (?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            //       }
                                  )} name="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">password will be geter than 6 chracters!!</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">password will be less than 20 chracters!!</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">password will have one upper case one lower case one number and one special charecter!!</p>}
                       </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm password" {...register("confirm")} name="confirm" className="input input-bordered" />
                       </div>
                         <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <button
                    onClick={handleGoogle}
                     className='h-[50px] bg-blue-400 p-3 text-center text-white font-semibold'> 
                        <h4>Google Sign In</h4>
                    </button>
                    <p className='my-4 text-center'>Already Have an Account?<Link  className='text-orange-600 font-bold' to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
  