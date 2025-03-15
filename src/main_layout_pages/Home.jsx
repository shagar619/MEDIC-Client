import { Helmet } from "react-helmet-async";
import OurServicePage from "../layouts/OurServicePage";
import CarouselBanner from "../main_layout_components/CarouselBanner";
import DoctorImg from "../main_layout_components/DoctorImg";
import PopularCamp from "../main_layout_components/PopularCamp";
import DoctorsBanner from "../main_layout_components/DoctorsBanner";
import ChooseUs from "../main_layout_components/ChooseUs";
import Contact from "../main_layout_components/Contact";


const Home = () => {
    return (
        <div className="">

            <Helmet>
                <title>MEDIC | HOME</title>
            </Helmet>

            <CarouselBanner></CarouselBanner>
            <DoctorImg></DoctorImg>
            <PopularCamp></PopularCamp>
            <OurServicePage></OurServicePage>
            <DoctorsBanner></DoctorsBanner>
            <ChooseUs></ChooseUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;