import doctor1 from './../assets/doctors/135x135x1.webp';
import doctor2 from './../assets/doctors/135x135x2.webp';
import doctor3 from './../assets/doctors/135x135x3.webp';


const DoctorsBanner = () => {
    return (

        <div className='container mx-auto'>
        <div className='bg-[#0CBBB6] text-white py-32'>
            <h3 className='text-5xl font-bold text-center uppercase mb-12'>Our Doctors</h3>

            <div className='w-1/2 mx-auto grid grid-cols-1 md:grid-cols-3 content-center gap-8'>

            <div className='flex flex-col justify-center items-center p-6 border-white border-4 transition hover:scale-110'>
                <div>
                    <img src={doctor1} alt="" />
                </div>
                <h3 className='text-2xl font-semibold my-3'>Lara Emily</h3>
                <p className='text-base font-medium'>Chief Doctor</p>
            </div>
            
            <div className='flex flex-col justify-center items-center p-6 border-white border-4 transition hover:scale-110'>
                <div>
                    <img src={doctor2} alt="" />
                </div>
                <h3 className='text-2xl font-semibold my-3'>Maria Julie</h3>
                <p className='text-base font-medium'>Chief Doctor</p>
            </div>

            <div className='flex flex-col justify-center items-center p-6 border-white border-4 transition hover:scale-110'>
                <div>
                    <img src={doctor3} alt="" />
                </div>
                <h3 className='text-2xl font-semibold my-3'>Joy Sherlin</h3>
                <p className='text-base font-medium'>Chief Doctor</p>
            </div>


            </div>

        </div>
        </div>
    );
};

export default DoctorsBanner;