import { Link } from "react-router-dom";
import useCamp from "../hooks/useCamp";
import { FaCalendarDays, FaUserDoctor } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


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

        <div className="container mx-auto">
        <div className="mb-56 mt-52">

            <Helmet>
                <title>MEDIC | AVAILABLE CAMP</title>
            </Helmet>

            <h2 className="text-blue-700 text-5xl font-bold text-center my-8 uppercase">Explore Our Available Medical Camps</h2>
            <p className="text-center text-xl font-normal text-gray-500">Discover a variety of medical camps tailored to your healthcare needs. From wellness check-ups to specialized consultations, find the perfect camp near you. <br /> Use the search bar to filter camps by name, date, or description and take a step toward better health today!</p>

        <div className="flex justify-between items-center mt-24 mb-8">

        <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search camps by name, description, or date..."
            className="w-1/3 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button className="btn bg-blue-600 text-xl font-bold text-white">Sort By</button>    

        </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-100 px-24 py-24">

                {
                    filteredCamps.map((item, idx) => 
                    <div className="p-6 transition hover:scale-105 shadow-xl rounded-md bg-white">
                        <div>
                            <img className="w-[480px] h-80 rounded" src={item.image} alt="" />
                        </div>
                        <h2 className="text-3xl font-bold my-8 text-center">{item.campName}</h2>
                        <h3 className="text-lg font-medium text-gray-500 flex items-center gap-3"><FaCalendarDays></FaCalendarDays> Date&Time : {item.dateTime}</h3>
                        <h3 className="text-lg font-medium my-3 flex items-center gap-3"><FiMapPin></FiMapPin> Location : {item.location}</h3>
                        <h2 className="text-xl font-semibold flex items-center gap-3"><FaUserDoctor></FaUserDoctor> Healthcare Professional : <span className="text-2xl font-bold">{item.healthcareProfessional}</span></h2>
                        <p className="text-lg font-normal text-gray-500 my-3">{item.description}</p>
                        <Link to={`/camps/${item._id}`}><button className="btn text-xl font-bold bg-blue-600 text-white my-3 uppercase">Details</button></Link>
                    </div>)
                }


            </div>
            
        </div>
        </div>
    );
};

export default AvailableCamp;