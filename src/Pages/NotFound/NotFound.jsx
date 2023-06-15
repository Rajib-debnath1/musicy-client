import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div >
        <img className="w-[80%] mx-auto h-[500px]" src={'https://thumbs.dreamstime.com/b/error-page-not-found-danger-sign-brick-wall-vector-illustration-127296223.jpg'} alt="" />

       <div className="flex justify-center items-center mt-5">
       <Link to='/'><button className="btn btn-outline btn-secondary">Back to Home</button></Link>
       </div>
    </div>
    );
};

export default NotFound;