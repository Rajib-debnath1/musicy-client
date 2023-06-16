import { useContext } from "react";
import ExtraSection from "../../ExtraSection";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import { AuthContext } from "../../../providers/AuthProviders";

const Home = () => {

    const {mode} = useContext(AuthContext)
    return (
        <div className={`${mode?"bg-white" :"bg-blue-900  text-white "} p-2`}>
        <Banner></Banner>
        <PopulerClasses></PopulerClasses>
        <PopularInstructor></PopularInstructor>
        <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;