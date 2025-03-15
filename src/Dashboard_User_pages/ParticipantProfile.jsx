import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { MdJoinFull } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";


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
        <div className="pl-16 pt-12 pb-56 pr-8 bg-slate-100">

            <Helmet>
                <title>MEDIC | DASHBOARD | USER | PARTICIPANT PROFILE</title>
            </Helmet>

            <h2 className="text-orange-500 text-5xl font-semibold mt-12 mb-24 uppercase">
                <span>Hi, Welcome </span>
                {
                    participant?.displayName || participant.name ? participant.displayName || participant.name : "Back"
                }
            </h2>

            <div className="flex flex-col lg:flex-row">

                <div className="bg-[#FFEDD5] flex-1 w-full py-24 flex flex-col justify-center items-center">
                    <div className="bg-white h-52 w-52 rounded-full">
                        <img className="w-full h-full transition hover:scale-110 rounded-full" src={participant?.image} alt="" />
                    </div>
                    <h3 className="text-[#151515] text-4xl font-semibold mt-12">{participant.displayName}</h3>
                </div>

                <div className="bg-[#FEF9C3] flex-1 w-full pt-24 uppercase">
                    <h3 className="text-[#151515] text-[40px] font-semibold mb-8 ml-4 md:ml-24">Your Activities</h3>

                    <h4 className="flex items-center gap-4 text-[#0088FE] text-2xl font-semibold ml-4 md:ml-24"><MdJoinFull className="text-6xl"></MdJoinFull>Total Camp Join : {stats.length}</h4>

                    <h4 className="flex items-center gap-4 text-[#00C4A1] text-2xl font-semibold ml-4 md:ml-24"><IoWalletSharp className="text-6xl"></IoWalletSharp>Total Camp Fees : {totalFees}</h4>

                </div>

            </div>

            <p className="text-center mt-12"><Link to="/dashboard/updateUser"><button 
            style={{'background': 'linear-gradient(90.00deg, rgb(131, 93, 35),rgb(181, 129, 48) 100%)'}}
            className="btn text-white text-xl font-semibold uppercase">Update Profile</button></Link></p>

        </div>
    );
};

export default ParticipantProfile;