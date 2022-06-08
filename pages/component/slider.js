import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container pt-10">
            <div className="banner-content">
              <Fade left>
                <h1>More Possibilities with Convertpool</h1>
                <p className="text-gray-500 pr-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  odio nulla.
                </p>
                <br />
                <button className="btn btn-outline btn-info get-started">
                  Get Started
                </button>
              </Fade>
            </div>

              <div className="banner-images">
                <img
                  className="image4 animate__animated animate__fadeInUp "
                  src="https://i.ibb.co/cxtD5Md/bc86e-12.png"
                  alt=""
                />

                <img
                  className="image2 animate__animated animate__fadeInLeft"
                  src="https://i.ibb.co/vvdmmPc/b2422-10.png"
                  alt=""
                />

                <img
                  className="image3 animate__animated animate__fadeInLeft"
                  src="https://i.ibb.co/f4JPqQM/b33c3-11.png"
                  alt=""
                />

                <img
                  className="image5 animate__animated animate__fadeInRight"
                  src="https://i.ibb.co/qF6PXVg/b1482-09.png"
                  alt=""
                />
              </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-container pt-10">
            <div className="banner-content ">
             
                <h1 className="animate__animated animate__fadeInLeft animate__delay-5s	5s">Grow big your Business </h1>
                <br />
                <p className="text-gray-500  animate__animated animate__fadeInLeft animate__delay-5s	5s ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  odio nulla.
                </p>
                <br />
                <button className="btn btn-outline btn-info get-started animate__animated animate__fadeInLeft animate__delay-5s	5s ">
                  Get Started
                </button>
              
            </div>

           
              <div className="banner-images2">
              <img
                  className="image5 animate__animated animate__fadeInDown animate__delay-5s	5s "
                  src="https://i.ibb.co/6wWZRPf/63023-12.png"
                  alt=""
                />
                <img
                  className="image4 animate__animated animate__fadeInUp animate__delay-5s	5s  "
                  src="https://i.ibb.co/8gNkpmV/41966-15.png"
                  alt=""
                />
             
                <img
                  className="image2 animate__animated animate__fadeInRight animate__delay-5s	5s "
                  src="https://i.ibb.co/Bsmc6ww/b7030-13.png"
                  alt=""
                />

             
                <img
                  className="image3 animate__animated animate__fadeInLeft animate__delay-5s	5s "
                  src="https://i.ibb.co/j8QXxZw/34673-14.png"
                  alt=""
                />





              </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
