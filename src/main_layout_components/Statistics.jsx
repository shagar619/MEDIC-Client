
import { Users, Map, Calendar, Heart } from 'lucide-react';

const StatCard = ({ icon, value, label }) => {
return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-blue-100">
            {icon}
        </div>
        <div>
            <div className="text-3xl font-bold text-blue-500 mb-1">{value}</div>
            <div className="text-gray-600">{label}</div>
        </div>
    </div>
    </div>
);
};

const Statistics = () => {
return (
    <div className="w-8/12 mx-auto py-20 bg-white">
    <div className="section-container">
        <h2 className="text-5xl font-bold text-black text-center">Our Impact</h2>
        <p className="text-gray-600 mt-8 text-center text-xl font-medium">
            Through our technology-driven approach, we've helped healthcare providers reach more  <br />  communities and deliver better care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <StatCard
            icon={<Users className="h-6 w-6 text-blue-500" />}
            value="50,000+"
            label="Patients Treated"/>
        <StatCard
            icon={<Map className="h-6 w-6 text-blue-500" />}
            value="120+"
            label="Communities Served"/>
        <StatCard
            icon={<Calendar className="h-6 w-6 text-blue-500" />}
            value="350+"
            label="Camps Organized"/>
            <StatCard
            icon={<Heart className="h-6 w-6 text-blue-500" />}
            value="1,200+"
            label="Healthcare Volunteers"/>
        </div>
        
        <div className="mt-16 bg-blue-500 text-white rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
                <h3 className="text-2xl font-semibold mb-4">Making Healthcare Accessible</h3>
                <p className="mb-6">
                Through our platform, medical camps have reached areas that previously had limited access to healthcare, resulting in improved health outcomes and community wellness.
                </p>
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-blue-100">Increase in preventive care</div>
                </div>
                <div>
                    <div className="text-2xl font-bold">63%</div>
                    <div className="text-blue-100">Reduction in administrative time</div>
                </div>
                <div>
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-blue-100">Patient satisfaction rate</div>
                </div>
                <div>
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-blue-100">More patients served per camp</div>
                </div>
            </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-white" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Statistics;
