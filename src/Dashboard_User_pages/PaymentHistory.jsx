import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })

    return (
        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pb-56 pt-24">

        <Helmet>
            <title>MEDIC | DASHBOARD | USER | PAYMENT HISTORY</title>
        </Helmet>

            <h2 className="text-center text-5xl font-bold text-[#07332F] uppercase">Your Payment History</h2>
            <p className="text-center text-xl font-medium text-gray-500 mt-12 mb-28">Review all your completed transactions for medical camps. Stay organized with detailed records <br /> of your payments and ensure a hassle-free experience</p>

            <div className="bg-white p-12 mx-36">

        <h1 className="text-[#151515] text-[32px] font-bold uppercase mb-8">Total Payments : {payments.length}</h1>

                <div className="overflow-x-auto">
                <table className="table w-full">
                {/* head */}
                <thead className="bg-[#07332F] text-base text-white font-semibold uppercase">
                <tr>
                    <th>
                        #
                    </th>
                    <th>E-mail</th>
                    <th>Price</th>
                    <th>Transaction ID</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
            
                    {
                        payments.map((item, idx) => 
                        <tr key={item._id} className="text-[#737373] text-base font-medium hover">
                            <th>
                                {idx + 1}
                            </th>

                            <td>
                                {item.email}
                            </td>
                            <td>
                                $ {item.price}
                            </td>
                            <th>
                                {item.transactionId}
                            </th>
                            <th>
                                {item.date}
                            </th>
                            <th>
                                {item.status}
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

export default PaymentHistory;