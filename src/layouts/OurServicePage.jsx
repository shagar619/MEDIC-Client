import img1 from './../assets/services/64x64x1.webp';
import img2 from './../assets/services/64x64x2.webp';
import img3 from './../assets/services/64x64x3.webp';
import img4 from './../assets/services/64x64x4.webp';

const OurServicePage = () => {
    return (
        <div 
        style={{backgroundImage: `url('https://i.ibb.co.com/fVKQQHKd/pharmacy-store-customer-buying-vitamin-paying-drugstore-checkout-pharmaceutical-assistant-selling-su.jpg')`}}
        className='py-32 my-16 bg-cover relative bg-fixed'>

        <div className='transition hover:scale-110 inset-0 bg-black bg-opacity-40 backdrop-blur-md py-16 w-10/12 mx-auto'>

        <h2 className="text-6xl font-bold text-white text-center">Our Services</h2>
        <p className="text-white mt-12 mb-8 text-center text-xl">
        We offer a range of medical services to ensure your health and well-being. 
        Our expert team is <br /> dedicated to providing high-quality care.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-9/12 mx-auto my-24 text-white'>

            <div className='flex items-center gap-4'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-4xl font-bold'>Emergency Care</h3>
                    <p className='text-lg font-medium'>quick and effective emergency medical assistance 24/7.</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-4xl font-bold'>Operation Theater</h3>
                    <p className='text-lg font-medium'>tate-of-the-art surgical facilities for critical procedures.</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-4xl font-bold'>Blood Test</h3>
                    <p className='text-lg font-medium'>Accurate and reliable blood testing services for diagnostics.</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-4xl font-bold'>Pharmacy</h3>
                    <p className='text-lg font-medium'>Well-stocked pharmacy with prescribed and over-the-counter medicines.</p>
                </div>
            </div>

        </div>


    </div>
    </div>
    );
};

export default OurServicePage;