import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { GiCancel } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import { IoMdCheckmark } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";


const ManageRegisteredCamp = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data
        }
    })

    const handleConfirmPayment = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to accept this payment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
        }).then(result => {
            if(result.isConfirmed){
                axiosSecure.patch(`/payments/${id}`)
                .then(res => {
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: `This Payment is Confirm Now!`,
                            showConfirmButton: true,
                        });
                    }
                })
            }
        })
    }


    const handleCancelPayment = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this payment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then(result => {
            if(result.isConfirmed){
                axiosSecure.delete(`/payments/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: `This Payment is Cancel Now!`,
                            showConfirmButton: true,
                        });
                    }
                })
            }
        })
    }

    return (


<div className="bg-slate-100 pb-56 pt-16">

    <Helmet>
        <title>MEDIC | DASHBOARD | ADMIN | MANAGE REGISTERED CAMP</title>
    </Helmet>

<h2 className="text-center text-5xl font-bold text-blue-600 my-12 uppercase">Manage Registered Camps</h2>
<p className="text-center text-xl font-medium text-green-500 mb-24">View and organize all participant registrations for your medical camps.Easily track attendance, <br /> update details, and ensure a smooth experience for all attendees</p>



<div className="bg-white p-12 mx-36">

<div className="overflow-x-auto">
<table className="table w-full">
{/* head */}
<thead className="bg-blue-600 text-lg text-white font-semibold uppercase">
<tr>
    <th>#</th>
    <th>E-mail</th>
    <th>Camp Fees</th>
    <th>Transition ID</th>
    <th>Date & Time</th>
    <th>Status</th>
    <th>Confirm</th>
    <th>Cancel</th>
</tr>
</thead>
<tbody>

    {
        payments.map((item, idx) => 
        <tr key={item._id} className="text-[#737373] text-base font-normal hover">
            <th>
                {idx + 1}
            </th>
            <th>
                {item.email}
            </th>
            <td>
                $ {item.price}
            </td>
            <td>
                {item.transactionId}
            </td>
            <td>
                {item.date}
            </td>
            <td>
                {item.status}
            </td>

            {
                item.status === 'pending' ? 
                <>
                <td>
                    <button 
                    onClick={() => handleConfirmPayment(item._id)}
                    className="btn bg-[#80E2B7] h-12 w-12 rounded-full"><IoMdCheckmark className="text-white"></IoMdCheckmark></button>
                </td>
                </>
                :
                <>
                <td>
                    <button 
                    className="btn bg-[#287855] h-12 w-12 rounded-full"><IoMdCheckmark className="text-white"></IoMdCheckmark></button>
                </td>
                </>
            }

            {
                item.status === 'pending' ? 
                <>
                <td>
                    <button 
                    onClick={() => handleCancelPayment(item._id)}
                    className="btn bg-red-600 h-12 w-12 rounded-full"><MdCancel className="text-white"></MdCancel></button>
                </td>
                </>
                :
                <>
                <td>
                    <button 
                    className="btn bg-gray-400 h-12 w-12 rounded-full"><MdCancel className="text-white"></MdCancel></button>
                </td>
                </>
            }

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

export default ManageRegisteredCamp;