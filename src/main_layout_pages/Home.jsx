import { Helmet } from "react-helmet-async";
import OurServicePage from "../layouts/OurServicePage";
import CarouselBanner from "../main_layout_components/CarouselBanner";
import DoctorImg from "../main_layout_components/DoctorImg";
import PopularCamp from "../main_layout_components/PopularCamp";
import DoctorsBanner from "../main_layout_components/DoctorsBanner";
import ChooseUs from "../main_layout_components/ChooseUs";
import Contact from "../main_layout_components/Contact";

// bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]

const Home = () => {
    return (
        <div className="bg-[#FFFFFF] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]">

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