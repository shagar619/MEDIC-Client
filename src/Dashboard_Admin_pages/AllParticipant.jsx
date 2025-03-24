import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AllParticipant = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: true,
                });
            }
        })
    }




    const handleDeleteUser = (id) => {
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

            axiosSecure.delete(`/users/${id}`)
            .then(res => {
            if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            }
            })
            }
        });
    }



    return (
        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pb-56 pt-16">

            <Helmet>
                <title>MEDIC | DASHBOARD | ADMIN | ALL PARTICIPANT</title>
            </Helmet>
            
            <h2 className="text-center text-5xl font-bold text-[#07332F] my-8 uppercase">Manage All Users</h2>
            <p className="text-center text-xl font-medium text-gray-500 mb-28">Access and manage user profiles with ease. View details, update information, and maintain <br /> a seamless experience for all participants and organizers</p>

        <div className="bg-white rounded-sm shadow-xl p-12 mx-12 md:mx-24 lg:mx-56">

            <h2 className="text-[#151515] text-3xl font-bold mb-8 uppercase">Total Users : {users.length}</h2>

            {/* table */}

        <div className="overflow-x-auto">

        <table className="table w-full">

    {/* head */}
        <thead className="bg-[#07332F] text-lg text-white font-semibold uppercase">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Role</th>
                <th>Action</th>
                </tr>
        </thead>

        <tbody>

    {
        users.map((user, idx) => 
        <tr key={idx} className="text-[#737373] text-base font-medium hover">
            <th>{idx + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>

            { 

            user.role === 'admin' ? 'Admin' 

            :

            <button 
                onClick={() => handleMakeAdmin(user)}
                className="btn bg-[#D1A054]"><FaUsers className="text-xl text-white"></FaUsers>
            </button> }

            </td>
            <td>
                <button 
                onClick={() => handleDeleteUser(user._id)}
                className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
            </td>
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

export default AllParticipant;