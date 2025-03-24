import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useUser from "../hooks/useUser";
import { MdJoinFull, MdMenuBook } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { IoMdMenu, IoMdTime } from "react-icons/io";


const OrganizerProfile = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [participant] = useUser();

    const { data: stats = [] } = useQuery({
        queryKey: ['stats'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/stats`);
            return res.data;
        }
    })



    return (
        <div className="pl-16 pt-8 pb-56 pr-8 bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]">

            <Helmet>
                <title>MEDIC | DASHBOARD | ADMIN | ORGANIZER PROFILE</title>
            </Helmet>

            <h2 className="text-[#07332F] text-5xl font-semibold mt-12 mb-16 uppercase">
                <span>Hi, Welcome </span>
                {
                    participant.name ? participant.name : "Back"
                }
            </h2>


{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 uppercase">

<div 
style={{ 'background': 'linear-gradient(90.00deg, rgb(187, 52, 245),rgb(252, 219, 255) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><IoWalletSharp className="text-6xl"></IoWalletSharp></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.revenue}</h3>
        <h3 className="text-2xl font-medium">Fees</h3>
    </div>
</div>

<div 
style={{'background': 'linear-gradient(90.00deg, rgb(211, 162, 86),rgb(253, 232, 192) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><FaUsers className="text-6xl"></FaUsers></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.users}</h3>
        <h3 className="text-2xl font-medium">Users</h3>
    </div>
</div>

<div 
style={{'background': 'linear-gradient(90.00deg, rgb(254, 72, 128),rgb(254, 205, 233) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><IoMdMenu className="text-6xl"></IoMdMenu></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.totalCamp}</h3>
        <h3 className="text-2xl font-medium">Camp</h3>
    </div>
</div>

<div 
style={{ 'background': 'linear-gradient(90.00deg, rgb(106, 174, 255),rgb(182, 247, 255) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><MdMenuBook className="text-6xl"></MdMenuBook></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.join}</h3>
        <h3 className="text-2xl font-medium">Join</h3>
    </div>
</div>

</div>



<div className="flex flex-col lg:flex-row">

<div className="bg-[#FFEDD5] flex-1 w-full py-24 flex flex-col justify-center items-center">
    <div className="bg-white h-52 w-52 rounded-full">
        <img className="w-full h-full transition hover:scale-110 rounded-full" src={participant?.image} alt="" />
    </div>
    <h3 className="text-[#151515] text-4xl font-semibold mt-12">{participant.name}</h3>
</div>

<div className="bg-[#FEF9C3] flex-1 w-full pt-12 uppercase">
    <h3 className="text-green-700 text-5xl font-semibold mb-8 ml-4 md:ml-24">Statistics</h3>

    <h4 className="flex items-center gap-4 text-[#00C4A1] text-2xl font-semibold ml-4 md:ml-24"><IoMdMenu className="text-6xl"></IoMdMenu>Total Camp : {stats.totalCamp}</h4>

    <h4 className="flex items-center gap-4 text-orange-500 text-2xl font-semibold ml-4 md:ml-24"><IoWalletSharp className="text-6xl"></IoWalletSharp>Total Camp Fees : $ {stats.revenue}</h4>

    <h4 className="flex items-center gap-4 text-pink-500 text-2xl font-semibold ml-4 md:ml-24"><FaUsers className="text-6xl"></FaUsers>Total Users : $ {stats.users}</h4>

    <h4 className="flex items-center gap-4 text-[#0088FE] text-2xl font-semibold ml-4 md:ml-24"><MdJoinFull className="text-6xl"></MdJoinFull>Total Participant : {stats.join}</h4>

</div>

</div>

<p className="text-center mt-12"><Link to="/dashboard/updateUser"><button 
style={{'background': 'linear-gradient(90.00deg, rgb(131, 93, 35),rgb(181, 129, 48) 100%)'}}
className="btn text-white text-xl font-semibold uppercase">Update Profile</button></Link></p> */}


{/* profile */}
            <div className="md:w-10/12 md:mx-auto bg-white rounded-sm shadow-lg mx-">
                <div className="bg-[#07332F] h-24 rounded-t-sm"></div>

            <div className="px-8 pb-24">

                <div className="relative left-6 -top-10">
                    <img class="inline-block size-24 rounded-full ring-2 ring-[#07332F] transition hover:scale-110" src={participant?.image} alt=""/>
                    <h2 className="text-black text-3xl font-bold mt-6 uppercase">{participant.name}</h2>
                    <p className="text-xl font-medium text-gray-600">{user.email}</p>
                </div>
                <hr className="border border-gray-300" />
                <h3 className="text-lg font-medium text-slate-500 flex items-center gap-2 my-6"><IoMdTime></IoMdTime> Joined : {participant.creationTime}</h3>
                <hr className="border border-gray-300" />

                <div className="mt-12">
                    <h3 className="text-2xl text-black font-medium mb-4">Statistics : </h3>

                    <h4 className="flex items-center gap-4 text-[#07332F] text-xl font-semibold ml-4 md:ml-24"><IoMdMenu className="text-6xl"></IoMdMenu>Total Camp : {stats.totalCamp}</h4>

                    <h4 className="flex items-center gap-4 text-[#07332F] text-xl font-semibold ml-4 md:ml-24"><IoWalletSharp className="text-6xl"></IoWalletSharp>Total Camp Fees : $ {stats.revenue}</h4>

                    <h4 className="flex items-center gap-4 text-[#07332F] text-xl font-semibold ml-4 md:ml-24"><FaUsers className="text-6xl"></FaUsers>Total Users : $ {stats.users}</h4>

                    <h4 className="flex items-center gap-4 text-[#07332F] text-xl font-semibold ml-4 md:ml-24"><MdJoinFull className="text-6xl"></MdJoinFull>Total Participant : {stats.join}</h4>

                    <p className="text-center mt-12"><Link to="/dashboard/updateUser"><button 
                        className="btn text-white text-lg font-semibold bg-[#07332F] uppercase rounded-sm">Update Profile</button></Link></p>
                </div>
                </div>

            </div>


</div>
);
};

export default OrganizerProfile;