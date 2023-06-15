import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: 'Login succesfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

      })



  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.1.1371786472.1680197785&semt=ais" alt="" />
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
         <div className="password-input">
         <div className="relative inline-block">
           <input type={passwordVisible ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="password" className="input input-bordered" />
           <button onClick={togglePasswordVisibility} className="absolute top-[50%] right-[5px] translate-y-[-50%] bg-none border-none p-0 cursor-pointer">
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="text-[#999]"
          />
        </button>
           </div>
         </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p><small className='my-4 text-center'>New hare?  <Link to='/signup' className='text-orange-600 font-bold'>Create an acount</Link></small></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;