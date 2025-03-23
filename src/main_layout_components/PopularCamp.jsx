import { FaCalendarDays, FaUserDoctor } from "react-icons/fa6";
import useCamp from "../hooks/useCamp";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";


const PopularCamp = () => {

    const [ camp ] = useCamp();

    const popular = camp.filter(item => item.type === 'popular');

    return (

        <div className="">
        <div className="">

            <h1 className="text-center text-5xl font-bold mb-14 pt-36 text-[#07332F] uppercase">Explore Our Popular Medical Camps</h1>
            <p className="text-center text-xl font-medium text-gray-500 mb-24">Discover the most sought-after medical camps designed to cater to diverse healthcare needs. From specialized treatments to wellness check-ups, <br /> these camps are highly rated by participants. Join now and take a step toward better health!</p>

<div className="w-9/12 mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{
    popular.map((item, idx) => 
    <div key={idx} className="">
        <div>
            <img className="w-[480px] h-96 object-cover" src={item.image} alt="" />
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

export default PopularCamp;
