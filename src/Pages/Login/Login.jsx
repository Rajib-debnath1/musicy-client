import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2'





const Login = () => {



    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {signIn} = useContext(AuthContext);


    const onSubmit = data =>{ 
        console.log(data);
        const {email,password} =data
        console.log(email,password);
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            Swal.fire({
              title: 'Login succesfully',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
         
            // navigate(from, {replace :true})
            setError("")
        }).catch(error => {
            setError(error)
            console.log(error?.message,"from login page");
        });
        setError("")
    };




    

    // console.log(watch("example"));


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" mr-12 w-1/2">
                <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.1.1371786472.1680197785&semt=ais" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Log in </h1>

                    <form onSubmit={handleSubmit(onSubmit)}> 
                       
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
                            //       // pattern: / (?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            //       }
                                  )} name="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">password will be geter than 6 chracters!!</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">password will be less than 20 chracters!!</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">password will have one upper case one lower case one number and one special charecter!!</p>}
                       </div>
                     
                         <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    
                
                    <p className='my-4 text-center'>Create  an Account?<Link  className='text-orange-600 font-bold' to="/signup"> SIgn Up</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
  