import img1 from './../assets/services/64x64x1.webp';
import img2 from './../assets/services/64x64x2.webp';
import img3 from './../assets/services/64x64x3.webp';
import img4 from './../assets/services/64x64x4.webp';
import '../CSS/OurServices.css';

const OurServicePage = () => {
    return (

        <div className='mb-36'>

        <h2 className="text-5xl font-bold text-black text-center">Our Healthcare Services</h2>
        <p className="text-gray-600 mt-8 text-center text-xl font-medium">
        We offer a range of medical services to ensure your health and well-being. <br />
        Our expert team is dedicated to providing high-quality care.
        </p>

        <div className=''>

        <div className='w-10/12 lg:w-8/12 mx-auto'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 text-black'>


            <div 
            className='flex items-center gap-4 bg-white shadow-md p-12 rounded-md rounded-br-[80px]'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-3xl font-bold'>Emergency Care</h3>
                    <p className='text-base font-normal'>For any kind emergency needed quick and effective emergency medical assistance 24/7.</p>
                    <button className='text-[#0CBBB6] font-bold'>Read More + </button>
                </div>
            </div>


            <div className='flex items-center gap-4 bg-white shadow-md p-12 rounded-md rounded-br-[80px]'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-3xl font-bold'>Operation Theater</h3>
                    <p className='text-base font-normal'>tate-of-the-art surgical facilities for critical procedures with world class treatment.</p>
                    <button className='text-[#0CBBB6] font-bold'>Read More + </button>
                </div>
            </div>

            <div className='flex items-center gap-4 bg-white shadow-md p-12 rounded-md rounded-br-[80px]'>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-3xl font-bold'>Blood Test</h3>
                    <p className='text-base font-normal'>Accurate and reliable blood testing services for diagnostics.</p>
                    <button className='text-[#0CBBB6] font-bold'>Read More + </button>
                </div>
            </div>

            <div className='flex items-center gap-4 bg-white shadow-md p-12 rounded-md rounded-br-[80px]'>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-3xl font-bold'>Pharmacy</h3>
                    <p className='text-base font-normal'>Well-stocked pharmacy with prescribed and over-the-counter medicines.</p>
                    <button className='text-[#0CBBB6] font-bold'>Read More + </button>
                </div>
            </div>

        </div>


    </div>
    </div>
    </div>
);
};

export default OurServicePage;