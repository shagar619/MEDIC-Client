
import { Button } from './../ui/button';
import { Calendar, Users, ArrowRight, Heart } from 'lucide-react';
import './../CSS/Hero.css';
import './../CSS/Animation.css';

const Hero = () => {
return (
    <div className="py-16 md:py-24 lg:pt-56 lg:pb-40 hero-gradient overflow-hidden">
    <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
        <div className="inline-block bg-white shadow-sm px-4 py-1 rounded-full border border-medical-100">
            <span className="text-medical-600 font-medium text-base flex items-center">
                <span className="bg-medical-100 text-medical-600 p-1 rounded-full mr-2">
                <Heart className="h-3 w-3" />
                </span>
                <span className='text-blue-600'>Medical Camp Management System</span>
            </span>
        </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Streamline Your <span className="text-gradient">Medical Camps</span> With Ease
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
            Efficiently manage medical camps, track patients, and coordinate
            healthcare services with our comprehensive management system.
            </p>
        <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-blue-500 rounded-full">
                <span className='text-white text-base'>Get Started</span> <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
            <Button variant="outline" size="lg" className="text-blue-500 border border-blue-500 border-medical-600 text-medical-600 hover:bg-medical-50 rounded-full">
                Watch Demo
            </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((index) => (
                <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-600">U{index}</span>
                </div>))}
            </div>
            <p className="text-sm text-gray-600">
                <span className="text-medical-600 font-semibold"><span className='text-blue-600'>500+</span></span> medical professionals trust us
            </p>
        </div>
        </div>
        
        <div className="relative animate-fade-in-up-slow">
        <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl animate-float">
            <img 
                src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000&t=st=1716303010~exp=1716303610~hmac=a9de643095cf3919ef26b9bb97381c0b24f5921dc6ae12d71d91cd1a42ab7b14" 
                alt="Medical Camp" 
                className="w-full h-auto rounded-lg object-cover aspect-video"/>
            
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg animate-pulse-light">
            <div className="flex items-center gap-3">
                <div className="bg-medical-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <p className="text-xs text-gray-500">Total Patients</p>
                    <p className="text-lg font-bold text-gray-800">5,240+</p>
                </div>
            </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg animate-pulse-light">
            <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                    <p className="text-xs text-gray-500">Medical Camps</p>
                    <p className="text-lg font-bold text-gray-800">120+</p>
                </div>
            </div>
            </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-medical-500/10 rounded-full -z-10 blur-3xl"></div>
        </div>
    </div>
    </div>
);
};

export default Hero;
