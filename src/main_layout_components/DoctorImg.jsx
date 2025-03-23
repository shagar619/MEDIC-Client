import doctorImg from './../assets/banner/272x272.webp';
import doctorSign from './../assets/banner/160x45.webp';

const DoctorImg = () => {
    return (
    <div className=''>
    <div className="my-24">
            <div className="w-9/12 mx-auto text-center">
                <h1 className="text-5xl font-bold text-[#07332F] my-12 uppercase">Medic Health Care</h1>
                <p className="text-lg font-medium text-gray-600">Welcome to Medic Camp Connect – your one-stop solution for organizing and participating in medical camps. From streamlined camp management to secure registrations, we empower healthcare professionals and participants to collaborate seamlessly. Start your journey to better health today!</p>
            </div>

        <div 
        style={{backgroundImage: `url('https://i.ibb.co.com/93ZsfZWV/creative-collage-telehealth-consultation-1.jpg')`}}
        className='mt-24 relative bg-cover bg-fixed bg-center py-36'>

        <div className='transition hover:scale-105 inset-0 bg-black bg-opacity-40 backdrop-blur-md w-8/12 mx-auto py-12 px-12'>    

        <div className='flex flex-col md:flex-row items-center'>

        <div className='flex-1'>
            <img src={doctorImg} alt="" />
        </div>

        <div className='flex-1 text-white'>
            <h4 className='text-2xl font-semibold'>Welcome to</h4>
            <h3 className='text-5xl font-semibold my-4'>Medic Health Care</h3>
            <p className='text-xl font-normal'>Join our medical camps to access quality healthcare services from expert professionals. Whether it's general check-ups, specialized treatments, or wellness programs, we connect you with the best healthcare opportunities. Register now and take a step toward a healthier future!</p>
            <img className='my-8' src={doctorSign} alt="" />
            <button className='btn bg-[#07332F] text-white text-lg font-semibold uppercase border-none rounded-sm'>Read More</button>
        </div>

        </div>
        </div>

        </div>
        
        </div>
        </div>
);
};

export default DoctorImg;