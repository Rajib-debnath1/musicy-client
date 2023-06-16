import ExtraSection from "../../ExtraSection";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor";
import PopulerClasses from "../PopulerClasses/PopulerClasses";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <PopulerClasses></PopulerClasses>
        <PopularInstructor></PopularInstructor>
        <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;