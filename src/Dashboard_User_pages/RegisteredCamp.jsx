import { Link } from "react-router-dom";
import useParticipantCamp from "../hooks/useParticipantCamp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../shared/SectionTitle";



const RegisteredCamp = () => {

    const [ participantCamp, refetch ] = useParticipantCamp();
    const totalCampFees = participantCamp.reduce((total, item) => total + item.campFees, 0);

    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/register/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your food item has been Deleted.",
                    icon: "success"
            });
            }
            })

            }
        });
    }

    return (
        <div className="pt-24 bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pb-56">

        <Helmet>
            <title>MEDIC | DASHBOARD | USER | REGISTERED CAMPS</title>
        </Helmet>

            <h2 className="text-center text-5xl font-bold text-[#07332F] my-12 uppercase">Your Camp Registration History</h2>
            <p className="text-xl font-medium text-center text-gray-500">Keep track of all the medical camps you've registered for. View past and upcoming camps, <br /> their details, and manage your health journey effortlessly</p>

            <div className="flex justify-evenly items-center mb-8 mt-24">
            <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Participant : {participantCamp.length}</h1>

            <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Camp Fees : $ {totalCampFees}</h1>

        { participantCamp.length ? <Link to="/dashboard/payment">
            <button className="btn bg-[#07332F] text-white text-xl font-semibold rounded-sm">Pay</button>
        </Link> 
        :
        <button disabled className="btn bg-[#07332F] text-white text-xl font-semibold rounded-sm">Pay</button>
        }
    </div>


    <div className="bg-white p-12 mx-6 md:mx-24 lg:mx-56 rounded-sm shadow-xl">

    <div className="overflow-x-auto">
    <table className="table w-full">
    {/* head */}
    <thead className="bg-[#07332F] text-lg text-white font-semibold">
    <tr>
        <th>#</th>
        <th>Camp Name</th>
        <th>Participant E-mail</th>
        <th>Camp Fees</th>
        <th>Payment Status</th>
        <th>Cancel</th>
        <th>Feedback</th>
    </tr>
    </thead>
    <tbody>

        {
            participantCamp.map((item, idx) => 
            <tr key={item._id} className="text-[#737373] text-base font-medium hover">
                <th>
                    {idx + 1}
                </th>
                <th>
                    {item.campName}
                </th>
                <td>
                    {item.email}
                </td>
                <td>
                    $ {item.campFees}
                </td>
                <td>
                    Unpaid
                </td>
                <th>
                    <button 
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
                </th>
                <th>
                    <Link to={`/dashboard/feedback/${item._id}`}>
                    <button 
                    className="btn bg-blue-400"><VscFeedback className="text-xl text-white"></VscFeedback></button>
                    </Link>
                </th>
            </tr>
            )
        }

      {/* row 1 */}

    </tbody>
    </table>
    </div>

    </div>


</div>
    );
};

export default RegisteredCamp;