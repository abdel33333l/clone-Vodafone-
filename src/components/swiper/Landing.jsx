import React from "react";
import "./landing.css";

import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.jpeg";
import banner3 from "../../assets/images/banner-3.jpeg";
import banner4 from "../../assets/images/banner-4.png";
import banner5 from "../../assets/images/banner-5.png";
import banner6 from "../../assets/images/banner-6.jpeg";
import banner7 from "../../assets/images/banner-7.jpeg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Landing = () => {
  return (
    <div>
      <Swiper
        className="app__swiper"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="app_swiperslide">
          <img className="app__banner" src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="app__banner" src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="app__banner" src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="app__banner" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="app__banner" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="app__banner" src={banner6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="app__banner" src={banner7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Landing;
