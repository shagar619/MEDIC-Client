import { Helmet } from "react-helmet-async";
import OurServicePage from "../layouts/OurServicePage";
import CarouselBanner from "../main_layout_components/CarouselBanner";
import DoctorImg from "../main_layout_components/DoctorImg";
import PopularCamp from "../main_layout_components/PopularCamp";
import DoctorsBanner from "../main_layout_components/DoctorsBanner";
import ChooseUs from "../main_layout_components/ChooseUs";
import Contact from "../main_layout_components/Contact";
import MidPart from "../main_layout_components/MidPart";

// bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>MEDIC | HOME</title>
            </Helmet>
            <CarouselBanner></CarouselBanner>
            <MidPart></MidPart>
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