import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCamp from "../hooks/useCamp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ManageCamp = () => {

    const axiosSecure = useAxiosSecure();
    const [ camp, , refetch ] = useCamp();

    const handleDeleteItem = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/camps/${item._id}`);
                if(res.data.deletedCount > 0) {
                    refetch()
                Swal.fire({
                title: "Deleted!",
                text:  `${item.campName} has been deleted`,
                icon: "success"
            });
            }
        }
        });
        
    }




    return (
<div className="bg-slate-100 pb-56 pt-16">

    <h2 className="text-center text-5xl font-bold text-blue-600 my-12 uppercase">Manage All Medical Camps</h2>
    <p className="text-center text-xl font-medium text-green-500 mb-24">View, edit, and organize all listed medical camps in one place. Streamline camp details, track registrations, <br /> and ensure seamless management for a better participant experience</p>



<div className="bg-white p-12 mx-36">

    <Helmet>
        <title>MEDIC | DASHBOARD | ADMIN | MANAGE CAMPS</title>
    </Helmet>

<div className="overflow-x-auto">
    <table className="table w-full">
    {/* head */}
    <thead className="bg-blue-600 text-lg text-white font-semibold uppercase">
    <tr>
        <th>#</th>
        <th>Camp Image</th>
        <th>Camp Name</th>
        <th>Date & Time</th>
        <th>Location</th>
        <th>Healthcare Professional</th>
        <th>Action</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>

        {
            camp.map((item, idx) => 
            <tr key={item._id} className="text-[#737373] text-base font-normal hover">
                <td>
                    {idx + 1}
                </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={item.image}
                                alt={item.campName} />
                        </div>
                        </div>

                    </div>
                </td>
                <th>
                    {item.campName}
                </th>
                <td>
                    {item.dateTime}
                </td>
                <td>
                    {item.location}
                </td>
                <td>
                    $ {item.healthcareProfessional}
                </td>
                <th>
                    <Link to={`/dashboard/updateCamp/${item._id}`}>
                        <button 
                        className="btn bg-[#D1A054]"><FaRegEdit className="text-xl text-white"></FaRegEdit></button>
                    </Link>
                </th>
                <th>
                    <button 
                    onClick={() => handleDeleteItem(item)}
                    className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
                </th>
            </tr>
            )
        }

    </tbody>
    </table>
</div>

</div>
            
</div>
);
};

export default ManageCamp;