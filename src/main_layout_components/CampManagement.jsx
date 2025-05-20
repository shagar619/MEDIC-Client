
import { Calendar, Users, Database, Heart, Shield, Activity, Ambulance, BookOpen } from 'lucide-react';

const Feature = ({ icon, title, description }) => {
return (
    <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {icon}
    </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);
};

const CampManagement = () => {
    const features = [
    {
        icon: <Calendar className="h-6 w-6 text-medical-blue" />,
        title: "Camp Scheduling",
        description: "Plan and organize medical camps efficiently with our intuitive scheduling system."
    },
    {
        icon: <Users className="h-6 w-6 text-medical-blue" />,
        title: "Volunteer Management",
        description: "Recruit, track, and coordinate healthcare professionals and support staff."
    },
    {
        icon: <Database className="h-6 w-6 text-medical-blue" />,
        title: "Patient Records",
        description: "Securely manage patient data, medical history, and treatment plans."
    },
    {
        icon: <Ambulance className="h-6 w-6 text-medical-blue" />,
        title: "Resource Allocation",
        description: "Optimize distribution of medical supplies and equipment across camps."
    },
    {
        icon: <Activity className="h-6 w-6 text-medical-blue" />,
        title: "Health Analytics",
        description: "Generate insights and reports on patient demographics and treatment outcomes."
    },
    {
        icon: <Shield className="h-6 w-6 text-medical-blue" />,
        title: "Compliance Tools",
        description: "Ensure adherence to healthcare regulations and documentation requirements."
    },
    {
        icon: <Heart className="h-6 w-6 text-medical-blue" />,
        title: "Patient Follow-ups",
        description: "Schedule and track post-camp patient follow-ups and referrals."
    },
    {
        icon: <BookOpen className="h-6 w-6 text-medical-blue" />,
        title: "Educational Resources",
        description: "Access health education materials for patients and training guides for staff."
    }
    ];

return (
    <section id="features" className="py-20 bg-white relative">
    <div className="section-container w-8/12 mx-auto">
        <h2 className="text-center text-5xl font-bold mb-8 pt-24 text-[#07332F]">Comprehensive Camp Management</h2>
        <p className="text-center text-xl font-medium text-gray-600 mb-24">
            Our platform offers end-to-end solutions for organizing and managing <br /> medical camps in any environment.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {features.map((feature, index) => (
            <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}/>
        ))}
        </div>
    </div>
    </section>
);
};

export default CampManagement;