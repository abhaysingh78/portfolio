import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../design/5106185.jpg";
import Ecommerce from "../../design/book.jpg";
import HOC from "../../design/bookB1.png";
import MusicApp from "../../design/groc.jpg";
const DesignPortfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DesignPortfolio;
