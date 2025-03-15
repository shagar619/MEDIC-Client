import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from './../assets/logo/logo.webp'
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";


const Navbar = () => {

    const { user, logOutUser } = useAuth();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOutUser()
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Successfully Sign Out!",
            });
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const links = <>

    <NavLink
    className={({ isActive }) => `font-bold ${isActive? 'bg-blue-600 text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
    to="/">Home</NavLink>

    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'bg-blue-600 text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
    to="/availableCamp">Available Camp</NavLink>

    {
        user && isAdmin && <NavLink 
        className={({ isActive }) => `font-bold ${isActive? 'bg-blue-600 text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
        to="/dashboard/organizerProfile">Dashboard</NavLink>
    }

    {
        user && !isAdmin &&     <NavLink 
        className={({ isActive }) => `font-bold ${isActive? 'bg-blue-600 text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
        to="/dashboard/analytics">Dashboard</NavLink>
    }





    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'bg-blue-600 text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
    to="/join">Join Us</NavLink>

    <NavLink 
    className={({ isActive }) => `font-bold ${isActive? 'bg-blue-600 text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
    to="/contact">Contact Us</NavLink>
    

    </>

    return (

<div className="bg-blue-600 bg-opacity-25 shadow-lg text-white fixed w-full top-0 z-50">

<div className="navbar my-2">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-2 space-y-4">
        {links}
    </ul>
    </div>
    <img className=" h-12 rounded-md transition hover:scale-110" src={logo} alt="" />
</div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 text-xl font-bold uppercase">
            {links}
        </ul>
</div>
    <div className="navbar-end space-x-4">

    {
        user ? 
        <div className="flex items-center gap-6 ">
            <h3 className="text-xl font-bold">{user.email}</h3>
            <button 
            onClick={handleLogOut}
            className="btn bg-blue-600 text-white text-xl font-bold border-none">Sign Out</button>
        </div>
        : 
        <>
        <Link className="underline text-2xl font-bold transition hover:scale-110 hover:text-warning" to="/signup">Register</Link>
        <Link to="/signin"><button className="btn bg-blue-600 text-white text-xl font-bold border-none">Sign In</button></Link>
        </>
    }


</div>
</div>
</div>
);
};

export default Navbar;