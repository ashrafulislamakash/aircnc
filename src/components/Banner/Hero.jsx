import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import slider5 from "../../assets/images/slider5.webp";
import slider6 from "../../assets/images/slider6.webp";
import slider7 from "../../assets/images/slider7.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import requirose modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeroseSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        classNameName="mySwiper "
      >
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Start Your Vacation Now
            </h1>
          </div>

          <img src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Start Your Vacation Now
            </h1>
          </div>
          <img src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Start Your Vacation Now
            </h1>
          </div>
          <img src={slider3} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Start Your Vacation Now
            </h1>
          </div>
          <img src={slider4} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Find Your Dream Home
            </h1>
          </div>
          <img src={slider5} alt="slider5" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Start Your Vacation Now
            </h1>
          </div>
          <img src={slider6} alt="slider6" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
            text-center absolute
  top-50%
  left-50%
  transform-translate(-50%, -50%);
  text-white px-20  "
          >
            <h1 className="text-4xl md:text-9xl font-bold pt-0 md:pt-20 ">
              Start Your Vacation Now
            </h1>
          </div>
          <img src={slider7} alt="slider7" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
