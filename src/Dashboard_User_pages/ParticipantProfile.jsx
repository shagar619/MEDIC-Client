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
                    participant.name ? participant.name : "Back"
                }
            </h2>


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