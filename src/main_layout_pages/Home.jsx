import { Helmet } from "react-helmet-async";
import OurServicePage from "../layouts/OurServicePage";
import PopularCamp from "../main_layout_components/PopularCamp";
import Hero from "../main_layout_components/Hero";
import CampManagement from "../main_layout_components/CampManagement";
import OurMission from "../main_layout_components/OurMission";
import ContactForm from "../main_layout_components/ContactForm";
import Testimonials from "../main_layout_components/Testimonials";
import Statistics from "../main_layout_components/Statistics";

// bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>MEDIC | HOME</title>
            </Helmet>
            <Hero></Hero>
            <CampManagement></CampManagement>
            <OurMission></OurMission>
            <PopularCamp></PopularCamp>
            <OurServicePage></OurServicePage>
            <Statistics></Statistics>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;