import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
    quote: "MediCamp Oasis has revolutionized how we organize our rural health initiatives. The platform's intuitive design has cut our administrative work by half, allowing us to focus more on patient care.",
    name: "Dr. Sarah Johnson",
    role: "Medical Director, HealthReach Foundation",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 5
    },

    {
    quote: "As a volunteer coordinator, managing healthcare professionals across multiple camps used to be a logistical nightmare. This platform has streamlined our operations and improved communication tremendously.",
    name: "Michael Torres",
    role: "Volunteer Coordinator, Global Health Partners",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 5
    },

    {
    quote: "The analytical tools provided by MediCamp Oasis have given us valuable insights into community health trends, helping us plan more targeted interventions and measure our impact effectively.",
    name: "Priya Sharma",
    role: "Health Program Analyst, Community Wellness Institute",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    rating: 4
    },

];

const TestimonialCard = ({ quote, name, role, image, rating }) => {
return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col h-full">
    <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
        <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill={i < rating ? 'currentColor' : 'none'}/>
        ))}
    </div>
    <blockquote className="text-gray-700 mb-6 flex-grow">"{quote}"</blockquote>
    <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
        </div>
    </div>
    </div>
);
};

const Testimonials = () => {
const [activeIndex, setActiveIndex] = useState(0);
const itemsPerPage =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
const totalPages = Math.ceil(testimonials.length / itemsPerPage);

const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
};

const handleNext = () => {
    setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
};

return (
    <div className=''>
    <div className='pt-24 pb-48 px-24 md:px-32 lg:px-64 bg-gradient-to-br from-blue-50 to-teal-50'>
    <div className="">
        <h2 className="text-5xl font-bold text-black text-center">What Our Users Say</h2>
        <p className="text-gray-600 mt-8 text-center text-xl font-medium">
            Hear from healthcare professionals who have transformed their medical <br /> camp operations with our platform.
        </p>

        <div className="mt-24 relative">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />))}
        </div>

        <div className="md:hidden">
            <TestimonialCard {...testimonials[activeIndex]} />

            <div className="flex justify-center mt-6 gap-2">
                {[...Array(testimonials.length)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-medical-blue' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}/>
            ))}
            </div>

            <div className="flex justify-between mt-4">
            <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100"
                aria-label="Previous testimonial">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100"
                aria-label="Next testimonial">
                <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
);
};

export default Testimonials;