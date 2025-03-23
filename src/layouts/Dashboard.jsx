import { AiFillHome } from "react-icons/ai";
import { FaAd, FaAddressBook, FaCashRegister, FaUsers, FaUtensils } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { MdEventAvailable } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";

import logo from './../assets/logo/logo.webp'
import useAdmin from "../hooks/useAdmin";
import Footer from "../shared/Footer";


const Dashboard = () => {

    const [ isAdmin ] = useAdmin();



    return (

<div>

<div className="">


<div className="flex text-slate-300">

{/* dashboard side bar */}

<div className="w-72 min-h-full bg-[#07332F]">

<div className="pl-9 py-10">
    <img src={logo} alt="MEDIC" />
</div>

<ul className="menu p-6 space-y-2 text-lg font-medium uppercase">


    {
        isAdmin ? 

<>

    {/* Admin links */}

    <li>
        <NavLink to="/dashboard/organizerProfile">
        <ImProfile></ImProfile>
            Organizer Profile
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/users">
        <FaUsers></FaUsers>
            All Participant
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/addCamp">
        <FaUtensils></FaUtensils>
            Add Camp
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/manageCamp">
        <TfiMenuAlt></TfiMenuAlt>
            Manage Camps
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/manageRegisteredCamp">
        <FaAddressBook></FaAddressBook>
            Manage Registered Camp
        </NavLink>
    </li>


</>

    :

<>

    {/* Users links */}

    <li>
        <NavLink to="/dashboard/analytics">
        <SiSimpleanalytics></SiSimpleanalytics>
            Analytics
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/userProfile">
        <ImProfile></ImProfile>
            Participant Profile
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/registeredCamp">
        <FaCashRegister></FaCashRegister>
            Registered Camps
        </NavLink>
    </li>

    <li>
        <NavLink to="/dashboard/payment-history">
        <GiWallet></GiWallet>
            Payment History
        </NavLink>
    </li>


</>
    }






    {/* shared NavLinks */}

    <div className="divider divider-warning"></div>



    <li>
        <NavLink to="/">
            <AiFillHome></AiFillHome>
            Home
        </NavLink>
    </li>
    <li>
        <NavLink to="/availableCamp">
        <MdEventAvailable></MdEventAvailable>
            Available Camps
        </NavLink>
    </li>




    </ul>
</div>


{/* dashboard content */}

<div className="flex-1">
    <Outlet></Outlet>
</div>

</div>

</div>

<Footer></Footer>

</div>
);
};

export default Dashboard;