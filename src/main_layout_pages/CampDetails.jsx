import { Helmet } from "react-helmet-async";
import { FaAlipay } from "react-icons/fa";
import { FaCalendarDays, FaUserDoctor } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";


const CampDetails = () => {

    const { _id ,image, campName, campFees, dateTime, location, healthcareProfessional, description } = useLoaderData();
    
    console.log(campFees, campName);

    return (

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-20">
            <SectionTitle
            heading={'Medical Camp Details'}
            subHeading={'Get comprehensive information about the selected medical camp, including date, location, healthcare professionals, and services offered. Register now to secure your spot and receive quality healthcare'}
            ></SectionTitle>

        <div className="">

            <Helmet>
                <title>MEDIC | CAMP DETAILS</title>
            </Helmet>

        <div className="w-8/12 mx-auto">

            <div>
                <img className="object-cover rounded-sm" src={image} alt="" />
            </div>
            <h3 className="text-5xl font-semibold text-center my-16">{campName}</h3>
            <h3 className="text-xl font-semibold flex items-center gap-3"><FaAlipay></FaAlipay> Camp Fees : $ {campFees}</h3>
            <h4 className="text-lg font-medium text-gray-500 my-3 flex items-center gap-3"><FaCalendarDays></FaCalendarDays> Date&Time : {dateTime}</h4>
            <h4 className="text-lg font-medium text-gray-500 flex items-center gap-3"> <FiMapPin></FiMapPin> Location : {location}</h4>
            <h2 className="text-xl font-semibold my-3 flex items-center gap-3"><FaUserDoctor></FaUserDoctor> Healthcare Professional : <span className="text-2xl font-bold">{healthcareProfessional}</span> </h2>
            <p className="text-base font-normal text-gray-600">{description}</p>
            <p className="text-center my-12"><Link to={`/joinCamp/${_id}`}><button className="btn bg-[#07332F] text-white text-lg font-semibold px-20 rounded-sm">Join Camp</button></Link></p>
            
        </div>
        </div>
        </div>
    );
};

export default CampDetails;