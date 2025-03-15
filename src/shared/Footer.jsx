import { FaApple, FaFacebook, FaGooglePlay, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from './../assets/logo/logo.webp'


const Footer = () => {
    return (
        <div className="bg-blue-100 px-8 pb-8">
        <div>
            <hr className="mt-4 mb-16" />
            <div className="flex justify-between items-start">

                <div>
                <div className='flex items-center'>
                <img className='rounded' src={logo} alt="" />
                </div>
                    <p className='my-6 text-base font-normal text-gray-500'>MEDIC is the heart of the design community and the <br /> best resource to discover and connect with <br /> doctors worldwide.</p>
                    <div className='flex items-center gap-4'>
                        <Link><FaFacebook className='h-8 w-8 text-white bg-blue-600 rounded-full'></FaFacebook></Link>
                        <Link><FaTwitter className='h-8 w-8 text-blue-600 bg-white rounded-full'></FaTwitter></Link>
                        <Link><FaInstagram className='h-8 w-8 text-blue-600 bg-white rounded-full'></FaInstagram></Link>
                    </div>
                </div>

                <div className='flex flex-col space-y-3 text-base font-normal text-gray-500'>
                    <h3 className='text-xl font-semibold text-black mb-3'>Resources</h3>
                    <Link>About Us</Link>
                    <Link>Our Team</Link>
                    <Link>Services</Link>
                    <Link>Contact</Link>
                </div>

                <div className='flex flex-col space-y-3 text-base font-normal text-gray-500'>
                    <h3 className='text-xl font-semibold text-black mb-3'>Community</h3>
                    <Link>Features</Link>
                    <Link>Pricing</Link>
                    <Link>Credit</Link>
                    <Link>FAQ</Link>
                </div>

                <div className='flex flex-col space-y-3 text-base font-normal text-gray-500'>
                    <h3 className='text-xl font-semibold text-black mb-3'>Quick Links</h3>
                    <Link>iOS</Link>
                    <Link>Android</Link>
                    <Link>Microsoft</Link>
                    <Link>Desktop</Link>
                </div>

                <div className='flex flex-col space-y-3 text-base font-normal text-gray-500'>
                    <h3 className='text-xl font-semibold text-black mb-3'>More</h3>
                    <Link>Privacy</Link>
                    <Link>Help</Link>
                    <Link>Terms</Link>
                    <Link>FAQ</Link>
                </div>


                <div>
                    <h3 className='text-xl font-semibold text-black mb-5'>Download App</h3>
                    <p className='text-sm font-normal text-gray-500 mb-4'>Download our Apps in Google PlayStore or iOS AppStore!</p>

                <div className='flex items-center gap-3'>

                <Link className='bg-blue-600 text-white px-3 py-2 rounded-lg'>
                        <div className='flex items-center gap-3'>
                            <p><FaApple className='h-10 w-8'></FaApple></p>
                            <div>
                                <p className='text-xs font-normal'>Download on the</p>
                                <h3 className='text-xl font-medium'>App Store</h3>
                            </div>
                        </div>
                    </Link>

                    <Link className='bg-blue-600 text-white px-3 py-2 rounded-lg'>
                        <div className='flex items-center gap-3'>
                            <p><FaGooglePlay className='h-10 w-8'></FaGooglePlay></p>
                            <div>
                                <p className='text-xs font-normal'>GET IT ON</p>
                                <h3 className='text-xl font-medium'>Google Play</h3>
                            </div>
                        </div>
                    </Link>

                </div>


                </div>

            </div>
            <hr className="mt-10 mb-4" />
            <div className='flex justify-between items-center my-6 text-sm font-medium text-gray-500'>
                <h3>Copyright © 2025. MEDIC all right reserved</h3>
                <div className='flex gap-5'>
                    <Link>Privacy Policy</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Security</Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;