import { Link } from "react-router-dom";
import useCamp from "../hooks/useCamp";
import { FaCalendarDays, FaUserDoctor } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../shared/SectionTitle";


const AvailableCamp = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [ camp, , refetch ] = useCamp();

    const [filteredCamps, setFilteredCamps] = useState(camp);

      // Function to handle search
    const handleSearch = (query) => {
        setSearchQuery(query);

    const lowerCaseQuery = query.toLowerCase();
    const results = camp.filter((camps) => {
        return (
        camps.campName.toLowerCase().includes(lowerCaseQuery) ||
        camps.description.toLowerCase().includes(lowerCaseQuery) ||
        (camps.dateTime && camps.dateTime.includes(lowerCaseQuery))
        );
    });

    setFilteredCamps(results);
    };


    return (

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">
        <div className="">

            <Helmet>
                <title>MEDIC | AVAILABLE CAMP</title>
            </Helmet>

            <SectionTitle
            heading={'Explore Our Available Medical Camps'}
            subHeading={'Discover a variety of medical camps tailored to your healthcare needs. From specialized consultations, find the perfect camp near you.Use the search bar to filter camps by name, date, or description and take a step toward better health today!'}>
            </SectionTitle>

        <div className="w-9/12 mx-auto">

        <div className="flex justify-between items-center mb-24">

        <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search camps by name, description, or date..."
            className="w-1/3 p-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button className="btn bg-[#07332F] text-lg font-medium rounded-sm text-white">Sort By</button>

        </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    filteredCamps.map((item, idx) => 
                    <div className="">
                        <div>
                            <img className="w-[480px] h-96 rounded-sm object-cover" src={item.image} alt="" />
                        </div>
                        <h2 className="text-xl font-bold my-8 text-center">{item.campName}</h2>
                        <h3 className="text-lg font-medium text-gray-500 flex items-center gap-3"><FaCalendarDays></FaCalendarDays> Date&Time : {item.dateTime}</h3>
                        <h3 className="text-lg font-medium my-3 flex items-center gap-3"><FiMapPin></FiMapPin> Location : {item.location}</h3>
                        <h2 className="text-xl font-semibold flex items-center gap-3"><FaUserDoctor></FaUserDoctor> Healthcare Professional : <span className="text-2xl font-bold">{item.healthcareProfessional}</span></h2>
                        <p className="text-base font-normal text-gray-600 my-3">{item.description.slice(0, 120)}... <Link to={`/camps/${item._id}`} className="underline text-black hover:text-[#07332F]">See More</Link></p>
                        <Link to={`/camps/${item._id}`}><button className="btn text-lg font-medium bg-[#07332F] text-white my-3 rounded-sm uppercase">Details</button></Link>
                    </div>)
                }


            </div>
            
        </div>
        </div>
        </div>
    );
};

export default AvailableCamp;