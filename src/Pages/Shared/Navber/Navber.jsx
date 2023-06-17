import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navber = () => {


    const { user, logOut, mode, setMode } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));

    }


    const navOptions = <>

        <li className="font-bold mr-15 ">
            {mode ? <p onClick={() => setMode(!mode)}>
                <FaMoon />
            </p>
                :
                <div onClick={() => setMode(!mode)}>
                    <FaSun />
                </div>

            }
        </li>

        <li><Link to="/">Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/allClasses'>Classes</Link></li>





        {
            user ? <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                <img src={user.photoURL} className="rounded-[100%] h-[30px] w-[30px] " />
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }



    </>


    return (
        <>
            <div className="navbar fixed z-10  top-0 bg-opacity-70 bg-black   mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>




                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-[80px] h-[50px]" src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/logo-2.png" alt="mylogo" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navOptions}
                    </ul>
                </div>

                {user?.email && <div className="navbar-end flex lg:hidden ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>

                </div>}
            </div>

        </>
    );
};

export default Navber;