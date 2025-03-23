import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { MdJoinFull } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { IoMdTime } from "react-icons/io";


const ParticipantProfile = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [participant] = useUser();

    const { data: stats = [] } = useQuery({
        queryKey: ['register'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/register?email=${user.email}`);
            return res.data;
        }
    })

    const totalFees = stats.reduce((total, item) => total + item.campFees, 0);


    return (
        <div className="pl-16 pt-12 pb-24 bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]">

            <Helmet>
                <title>MEDIC | DASHBOARD | USER | PARTICIPANT PROFILE</title>
            </Helmet>

            <h2 className="text-[#07332F] text-5xl font-semibold mt-12 mb-24 uppercase">
                <span>Hi, Welcome </span>
                {
                    participant?.displayName || participant.name ? participant.displayName || participant.name : "Back"
                }
            </h2>

            <div className="flex flex-col lg:flex-row">

                <div className="bg-green-200 flex-1 w-full py-24 flex flex-col justify-center items-center">
                    <div className="bg-white h-52 w-52 rounded-full">
                        <img className="w-full h-full transition hover:scale-110 rounded-full" src={participant?.image} alt="" />
                    </div>
                    <h3 className="text-[#151515] text-4xl font-semibold mt-12">{participant.displayName}</h3>
                </div>

                <div className="bg-blue-100 flex-1 w-full pt-24 uppercase">
                    <h3 className="text-[#151515] text-[40px] font-semibold mb-8 ml-4 md:ml-24">Your Activities</h3>

                    <h4 className="flex items-center gap-4 text-[#0088FE] text-2xl font-semibold ml-4 md:ml-24"><MdJoinFull className="text-6xl"></MdJoinFull>Total Camp Join : {stats.length}</h4>

                    <h4 className="flex items-center gap-4 text-[#00C4A1] text-2xl font-semibold ml-4 md:ml-24"><IoWalletSharp className="text-6xl"></IoWalletSharp>Total Camp Fees : {totalFees}</h4>

                </div>

            </div>

            <p className="text-center mt-12"><Link to="/dashboard/updateUser"><button 
            className="btn text-white text-lg font-semibold bg-[#07332F] uppercase">Update Profile</button></Link></p>



            <div className="w-10/12 mx-auto bg-white rounded-sm shadow-lg">
                <div className="bg-[#07332F] h-24 rounded-t-sm"></div>

            <div className="px-8 pb-24">

                <div className="relative left-6 -top-10">
                    <img class="inline-block size-24 rounded-full ring-2 ring-[#07332F] transition hover:scale-110" src="https://i.ibb.co.com/21nvy17z/Shagar619-removebg-preview-1.png" alt=""/>
                    <h2 className="text-black text-3xl font-bold mt-6 uppercase">{participant.name}</h2>
                    <p className="text-xl font-medium text-gray-600">{user.email}</p>
                </div>
                <hr className="border border-gray-300" />
                <h3 className="text-lg font-medium text-slate-500 flex items-center gap-2 my-6"><IoMdTime></IoMdTime> Joined : {participant.creationTime}</h3>
                <hr className="border border-gray-300" />

                <div className="mt-8">
                    <h3 className="text-2xl text-black font-medium">Your Activity : </h3>

                    <h4 className="flex items-center gap-4 text-[#07332fef] text-lg font-semibold ml-4 md:ml-24 my-4 uppercase"><MdJoinFull className="text-6xl"></MdJoinFull>Total Camp Join : {stats.length}</h4>
                    <h4 className="flex items-center gap-4 text-[#07332fef] text-lg font-semibold ml-4 md:ml-24 uppercase"><IoWalletSharp className="text-6xl"></IoWalletSharp>Total Camp Fees : $ {totalFees}</h4>
                    <p className="text-center mt-12"><Link to="/dashboard/updateUser"><button 
                        className="btn text-white text-lg font-semibold bg-[#07332F] uppercase rounded-sm">Update Profile</button></Link></p>
                </div>
                </div>

            </div>

        </div>
    );
};

export default ParticipantProfile;