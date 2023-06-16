import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
           <div className="mt-[5rem]">
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;