// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMG1 from "../../../Image/discount-slider/1.png"
import IMG2 from "../../../Image/discount-slider/2.jpg"
import IMG3 from "../../../Image/discount-slider/3.png"
import IMG4 from "../../../Image/discount-slider/4.png"
import IMG5 from "../../../Image/discount-slider/9d52f51e-3154-4525-8f8a-0ddb1454116c.png"
import IMG6 from "../../../Image/discount-slider/ar_dk_eg-hero-banner-01 (50).1680691177.014071.png"
import IMG7 from "../../../Image/discount-slider/download-1.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

function DiscountSlider() {

  return (
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={IMG1} alt="IMG" /></SwiperSlide>
        <SwiperSlide><img src={IMG2} alt="IMG" /></SwiperSlide>
        <SwiperSlide><img src={IMG3} alt="IMG" /></SwiperSlide>
        <SwiperSlide><img src={IMG4} alt="IMG" /></SwiperSlide>
        <SwiperSlide><img src={IMG5} alt="IMG" /></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt="IMG" /></SwiperSlide>
        <SwiperSlide><img src={IMG7} alt="IMG" /></SwiperSlide>

      </Swiper>

  );

}


export default DiscountSlider