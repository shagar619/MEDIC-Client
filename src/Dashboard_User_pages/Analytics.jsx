import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import { IoWalletSharp } from "react-icons/io5";
import { MdJoinFull } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const Analytics = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['register'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/register?email=${user.email}`);
            return res.data;
        }
    })

    const totalFees = stats.reduce((total, item) => total + item.campFees, 0);


    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
        
    const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
        
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className="pl-16 pt-12 pb-24 bg-slate-100">

            <Helmet>
                <title>MEDIC | DASHBOARD | USER | ANALYTICS</title>
            </Helmet>

            <h2 className="text-[#151515] text-5xl font-semibold my-12 uppercase">
                <span>Hi, Welcome </span>
                {
                    user?.displayName || user.name ? user.displayName || user.name : "Back"
                }
            </h2>

    <div className="flex flex-col md:flex-row gap-8 my-16">


        <div 
            style={{ 'background': 'linear-gradient(90.00deg, rgb(106, 174, 255),rgb(182, 247, 255) 100%)'}}
            className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
        <div>
            <div><MdJoinFull className="text-6xl"></MdJoinFull></div>
        </div>
        <div>
            <h3 className="text-2xl font-medium uppercase">Total Camp join</h3>
            <h3 className="text-[40px] font-extrabold">{stats.length}</h3>
        </div>
        </div>

        <div 
            style={{ 'background': 'linear-gradient(90.00deg, rgb(187, 52, 245),rgb(252, 219, 255) 100%)'}}
            className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
        <div>
            <div><IoWalletSharp className="text-6xl"></IoWalletSharp></div>
        </div>
        <div>
            <h3 className="text-2xl font-medium uppercase">Total Camp Fees</h3>
            <h3 className="text-[40px] font-extrabold">$ {totalFees}</h3>
        </div>

    </div>



        </div>    


    <div>

                {/* chart */}
    <div className="">
    <BarChart
        width={700}
        height={400}
        data={stats}
        margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
        }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="campName" />
    <YAxis />
    <Bar dataKey="campFees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {stats.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 6]} />))}
    </Bar>
    </BarChart>
    </div>

    </div>
    </div>
);
};

export default Analytics;