
import { CheckCircle } from 'lucide-react';

const OurMission = () => {
return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
    <div className="w-8/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 animate-fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg">
                At MediCamp Oasis, we're dedicated to improving healthcare access in under served communities through well-organized medical camps. Our platform bridges the gap between healthcare providers and those in need.
            </p>
            
            <div className="space-y-4 mb-8">
            {[
                "Bringing quality healthcare to remote and under served areas",
                "Empowering medical professionals with efficient tools",
                "Creating sustainable healthcare delivery models",
                "Building healthier communities through education and prevention"
                ].map((item, index) => (
                <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-medical-green mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                </div>))}
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
                <p className="text-gray-600">
                We believe that technology should simplify, not complicate healthcare delivery. Our platform is designed with input from medical professionals who work in challenging environments, ensuring it meets real-world needs.
                </p>
            </div>
        </div>
        <div className="lg:w-1/2 animate-fade-left">
            <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform rotate-2">
                <img 
                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                    alt="Medical Camp" 
                    className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform -rotate-2 mt-10">
                <img 
                    src="https://images.unsplash.com/photo-1581056771392-8a90ddb76831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Doctor with patient" 
                    className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform -rotate-3 mt-6">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1672759455907-bdaef741cd88?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Medical supplies" 
                    className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform rotate-3">
                <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                    alt="Rural medical care" 
                    className="w-full h-full object-cover"/>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default OurMission;