

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactForm = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'inquiry'
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: 'inquiry'
        });
        setTimeout(() => {
        setSubmitted(false);
    }, 5000);
    }, 1500);
    };

return (
    <section id="contact" className="py-20 bg-white">
    <div className="section-container">
        <h2 className="text-5xl font-bold text-black text-center">Get in Touch</h2>
        <p className="text-gray-600 mt-8 text-center text-xl font-medium">
            Have questions about our platform or want to schedule a demo? <br /> Reach out to our team.
        </p>
        
        <div className="w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
        <div>
            <div className="bg-blue-500 text-white rounded-lg p-8 shadow-lg h-full">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
                <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                    <div className="text-white/80 text-sm">Email</div>
                    <a href="mailto:info@medicampoasis.com" className="text-white hover:underline">info@medicampoasis.com</a>
                </div>
                </div>
                
                <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                    <div className="text-white/80 text-sm">Phone</div>
                    <a href="tel:+15551234567" className="text-white hover:underline">+1 (555) 123-4567</a>
                </div>
                </div>
                
                <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                    <div className="text-white/80 text-sm">Address</div>
                    <address className="text-white not-italic">
                        123 Healthcare Avenue<br />
                        Medical District<br />
                        San Francisco, CA 94107
                    </address>
                </div>
                </div>
            </div>
            <div className="mt-10">
                <h4 className="text-xl font-medium mb-4">Office Hours</h4>
                <table className="w-full text-white/90">
                <tbody>
                    <tr>
                        <td className="py-1">Monday - Friday:</td>
                        <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                        <td className="py-1">Saturday:</td>
                        <td>10:00 AM - 4:00 PM</td>
                    </tr>
                    <tr>
                        <td className="py-1">Sunday:</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            
            {submitted ? (
            <div className="text-center py-8">
                <div className="mb-4 w-16 h-16 bg-green-100 text-medical-green rounded-full mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="Enter your name"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="Enter your email"/>
                </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="Enter your phone (optional)"/>
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-blue focus:border-transparent">
                        <option value="inquiry">General Inquiry</option>
                        <option value="demo">Request a Demo</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Technical Support</option>
                    </select>
                </div>
                </div>
                
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="Tell us how we can help you"></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 text-base text-white flex items-center justify-center gap-2 bg-blue-500">
                {isSubmitting ? (
                    <>Processing...</>
                ) : (
                    <>
                    <Send className="h-5 w-5" />
                    Send Message
                    </>
                )}
                </button>
            </form>
            )}
        </div>
        </div>
    </div>
    </section>
);
};

export default ContactForm;
