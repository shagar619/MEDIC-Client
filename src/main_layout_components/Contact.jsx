import telephone from './../assets/contact/20x20x1.webp';
import email from './../assets/contact/20x20x2.webp';
import calendar from './../assets/contact/20x20x3.webp';


const Contact = () => {
    return (

        <div className='container mx-auto'>

        <div className='py-16 bg-[#0CBBB6]'>

            <div className="md:w-7/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">

                <div className="border-white border-4 text-white px-12 py-[84px] transition hover:scale-110">
                    <h3 className="text-3xl font-semibold mb-6">Working Hours</h3>
                    <div className="text-xl font-semibold flex items-center gap-8">
                        <div className="flex flex-col space-y-3">
                            <h4>Mon-Wed</h4>
                            <h4>Thu-Fri</h4>
                            <h4>Sat-Sun</h4>
                        </div>
                        <div className="space-y-3">
                            <h4>08:00 AM- 07:00 PM</h4>
                            <h4>08:00 AM- 05:00 PM</h4>
                            <h4>08:00 AM- 05:00 PM</h4>
                        </div>
                    </div>
                </div>

                <div className="border-white border-4 text-white px-24 py-20 transition hover:scale-110">
                    <h3 className="text-3xl font-semibold mb-6">Contact Details</h3>
                    <h4 className='flex items-center gap-4 text-xl font-semibold'><img src={telephone} alt="" />+8801608093455</h4>
                    <h4 className='flex items-center gap-4 my-4 text-xl font-semibold'><img src={email} alt="" />ashagar619@gmail</h4>
                    <h4 className='flex items-center gap-4 text-xl font-semibold'><img src={calendar} alt="" />Book Appointment</h4>
                </div>

            </div>
        
        </div>
        </div>
    );
};

export default Contact;