import { FaCalendarDays, FaUserDoctor } from "react-icons/fa6";
import useCamp from "../hooks/useCamp";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";


const PopularCamp = () => {

    const [ camp ] = useCamp();

    const popular = camp.filter(item => item.type === 'popular');

    return (

        <div className="container mx-auto">
            <h3 className="text-center text-7xl font-bold text-gray-600 mb-24 uppercase">Popular Medical Camp</h3>
        <div className="pb-56 bg-blue-100">

            <h1 className="text-center text-6xl font-bold mb-14 pt-36 text-blue-600 uppercase">Explore Our Popular Medical Camps</h1>
            <p className="text-center text-xl font-medium text-gray-500 mb-24">Discover the most sought-after medical camps designed to cater to diverse healthcare needs. From specialized treatments to wellness check-ups, <br /> these camps are highly rated by participants. Join now and take a step toward better health!</p>

<div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{
    popular.map((item, idx) => 
    <div key={idx} className="p-6 transition hover:scale-105 shadow-xl rounded-md bg-white">
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

export default PopularCamp;
