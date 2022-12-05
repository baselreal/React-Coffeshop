import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {testiArr} from './testimonial'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper";

export default function Slider() {
  return (
    <>
    <div className="changeSlider bg-gray-50">
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {testiArr.map((tester) => {
          return (
            <SwiperSlide key={tester.id}>
              <div className=" box-border border-4 border-solid bg-[#FFFFFF] rounded-xl">
                <div className="flex pt-7 pb-5 px-5 space-x-5">
                  <img className="w-[50px] h-[50px] rounded-full" src={tester.test_img} alt="" />
                  <div className="flex flex-col">
                    <div className="text-[#0B132A] text-[18px] font-bold w-max">{tester.test_name}</div>
                    <div className="text-[14px] flex">{tester.test_town}</div>
                  </div>
                  <div className=" flex flex-row space-x-1 pt-2 w-full h-fit justify-end">
                    <div className="font-bold"> {tester.test_score} </div>
                    <div className="text-yellow-400 pt-1">{tester.test_star}</div>
                  </div>
                </div>
                <div className="flex items-end py-2">
                  <div className="text-[#0B132A] leading-7 font-semibold px-5 py-2">{tester.test_comment}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </>
  );
}
