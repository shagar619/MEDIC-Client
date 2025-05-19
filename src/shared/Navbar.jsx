// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import logo from './../assets/logo/logo.webp'
// import Swal from "sweetalert2";
// import useAdmin from "../hooks/useAdmin";


// const Navbar = () => {

//     const { user, logOutUser } = useAuth();
//     const [isAdmin] = useAdmin();

//     const handleLogOut = () => {
//         logOutUser()
//         .then(result => {
//             Swal.fire({
//                 icon: "success",
//                 title: "Congratulation",
//                 text: "Successfully Sign Out!",
//             });
//         })
//         .catch(error => {
//             console.log(error.message);
//         })
//     }

//     const links = <>

//     <NavLink
//     className={({ isActive }) => `font-bold ${isActive? 'text-[#07332F] px-3 ': 'hover:text-blue-600 transition hover:scale-105'}`}
//     to="/">Home</NavLink>

//     <NavLink 
//     className={({ isActive }) => `font-bold ${isActive? 'text-white text-base px-3 py-[6px] rounded-[4px]': 'text-gray-500 hover:text-blue-600 transition hover:scale-105'}`}
//     to="/availableCamp">Available Camp</NavLink>

//     {
//         user && isAdmin && <NavLink 
//         className={({ isActive }) => `font-bold ${isActive? 'text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
//         to="/dashboard/organizerProfile">Dashboard</NavLink>
//     }

//     {
//         user && !isAdmin &&     <NavLink 
//         className={({ isActive }) => `font-bold ${isActive? 'text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
//         to="/dashboard/analytics">Dashboard</NavLink>
//     }





//     <NavLink 
//     className={({ isActive }) => `font-bold ${isActive? 'text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
//     to="/join">Join Us</NavLink>

//     <NavLink 
//     className={({ isActive }) => `font-bold ${isActive? 'text-white px-3 py-[6px] rounded-[4px]': 'hover:text-blue-600 transition hover:scale-105'}`}
//     to="/contact">Contact Us</NavLink>


//     </>

//     return (

// <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm w-full">

// <div className="navbar my-3">
//     <div className="navbar-start">
//         <div className="dropdown">
//         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//     </div>
//     <ul
//         tabIndex={0}
//         className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-2 space-y-4">
//         {links}
//     </ul>
//     </div>
//     <Link><img className=" h-[28px] rounded-md" src={logo} alt="" /></Link>
// </div>
//     <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 space-x-8 text-sm font-medium uppercase">
//             {links}
//         </ul>
// </div>
//     <div className="navbar-end space-x-4">

//     {
//         user ? 
//         <div className="flex items-center gap-6 ">
//             <h3 className="text-base font-medium">Welcome {user.displayName}</h3>
//             <button 
//             onClick={handleLogOut}
//             className="btn bg-[#07332F] text-white text-sm font-medium border-none rounded-[4px]">Sign Out</button>
//         </div>
//         : 
//         <>
//         <Link className="underline text-blue-500 text-2xl font-bold transition hover:scale-110 hover:text-warning" to="/signup">Register</Link>
//         <Link to="/signin"><button className="btn bg-[#07332F] text-white text-xl rounded-sm font-bold border-none">Sign In</button></Link>
//         </>
//     }


// </div>
// </div>
// </div>
// );
// };

// export default Navbar;























import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const { user, logOutUser } = useAuth();
  const [ isAdmin ] = useAdmin();


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


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "availableCamp", label: "Available Camp" },
    // { href: "AboutUs", label: "About Us" },
    // { href: "ContactUs", label: "Contact Us" },
    ...(user && isAdmin
      ? [{ href: "/dashboard/organizerProfile", label: "Dashboard" }]
      : user
      ? [{ href: "/dashboard/analytics", label: "Dashboard" }]
      : [{ href: "ContactUs", label: "Contact Us" }]),
  ];

  return (
    <motion.nav 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          ></motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"
          ></motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          variants={fadeIn('left', 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div 
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={fadeIn('down', 0.1 * (index + 1))}
            >
              <NavLink
                to={link.href}
                onClick={() => setActiveLink(link.href)}
                className={({ isActive }) =>
                  `text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                    isActive || activeLink === link.href
                      ? 'text-blue-600 after:w-full'
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.00 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block">

        {
        user ? 
        <div className="flex items-center gap-6 ">
            <h3 className="text-base font-medium">{user.displayName}</h3>
            <button 
            onClick={handleLogOut}
            className="btn bg-[#07332F] text-white text-lg font-medium border-none rounded-sm">Sign Out</button>
        </div>
        : 
        <>
        <Link className="underline text-blue-500 text-lg font-medium hover:text-slate-700 mr-6" to="/signup">Register</Link>
        <Link to="/signin"><button className="btn bg-blue-600 text-white text-lg rounded-sm font-medium border-none">Sign In</button></Link>
        </>
        }
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div 
            variants={fadeIn('down', 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={fadeIn('right', 0.1 * (index + 1))}>
                <NavLink
                  to={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-2 ${
                      isActive || activeLink === link.href
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              variants={fadeIn('up', 0.4)}
              whileHover={{ scale: 1.00 }}
              whileTap={{ scale: 0.98 }}>

        {
        user ? 
        <div className="flex items-center gap-6 ">
            <h3 className="text-base font-medium">{user.displayName}</h3>
            <button 
            onClick={handleLogOut}
            className="btn bg-[#07332F] text-white text-lg font-medium border-none rounded-sm">Sign Out</button>
        </div>
        : 
        <>
        <Link className="underline text-blue-500 text-lg font-medium hover:text-slate-700 mr-6" to="/signup">Register</Link>
        <Link to="/signin"><button className="btn bg-blue-600 text-white text-lg rounded-sm font-medium border-none">Sign In</button></Link>
        </>
        }

            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
