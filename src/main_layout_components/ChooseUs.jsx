import doctor from './../assets/doctors/175x175x1.webp';
import medicine from './../assets/doctors/175x175x2.webp';
import report from './../assets/doctors/175x175x3.webp';

const ChooseUs = () => {
    return (
        <div className='my-12 pb-32 pt-16 bg-slate-100'>

            <h3 className='text-center text-5xl text-gray-600 font-semibold mb-24 uppercase'>Why Choose Us?</h3>
            
            <div className='w-8/12 mx-auto flex flex-col lg:flex-row justify-center items-center gap-4'>

                <div className='flex flex-col border-[#0CBBB6] border-4 p-6 transition hover:scale-105'>
                    <div>
                        <img src={doctor} alt="" />
                    </div>
                    <h3 className='text-2xl font-semibold my-3'>Skilled Doctors</h3>
                    <p className='text-base font-normal mb-2'>Experienced healthcare professionals providing expert care and personalized treatment for every patient</p>
                    <button className='w-8/12 btn bg-[#0CBBB6] text-white text-lg font-semibold uppercase border-none'>Read More</button>
                </div>

                <div className='flex flex-col border-[#0CBBB6] border-4 p-6 transition hover:scale-105'>
                    <div>
                        <img src={medicine} alt="" />
                    </div>
                    <h3 className='text-2xl font-semibold my-3'>Quality Medicine</h3>
                    <p className='text-base font-normal mb-2'>Certified and effective medications to ensure safe and reliable treatment for all conditions</p>
                    <button className='w-8/12 btn bg-[#0CBBB6] text-white text-lg font-semibold uppercase border-none'>Read More</button>
                </div>

                <div className='flex flex-col border-[#0CBBB6] border-4 p-6 transition hover:scale-105'>
                    <div>
                        <img src={report} alt="" />
                    </div>
                    <h3 className='text-2xl font-semibold my-3'>Medical Reports</h3>
                    <p className='text-base font-normal mb-2'>Accurate and detailed medical reports for better diagnosis, treatment, and health monitoring</p>
                    <button className='w-8/12 btn bg-[#0CBBB6] text-white text-lg font-semibold uppercase border-none'>Read More</button>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;