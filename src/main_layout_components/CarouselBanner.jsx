import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './../assets/banner/Untitled design (1).png';
import img2 from './../assets/banner/ims-web-banner.png';
import img3 from './../assets/banner/healthcare-and-medical-service-doctor-banner-medical-health-social-media-cover-design-realistic-hospital-webinar-template-free-vector.jpg';
import img4 from './../assets/banner/Untitled design.png';


const CarouselBanner = () => {
    return (

<div>
<Carousel>

    <div>
        <img src={img1} />
    </div>
    <div>
        <img src={img2} />
    </div>
    <div>
        <img src={img3} />
    </div>
    <div>
        <img src={img4} />
    </div>

</Carousel>

</div>

);
};

export default CarouselBanner;