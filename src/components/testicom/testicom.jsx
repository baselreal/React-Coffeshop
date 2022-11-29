import React from 'react'
import Kim from '../testicom/testimage/kim.png'
import Viezh from '../testicom/testimage/viezh.png'
import Yessica from '../testicom/testimage/yessica.png'
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonial.css"

const Testicom = () => {

    const testTitle = 'Loved by Thousand of Happy Customer'
    const testDesc = 'These are the stories of our customers who have visited us with great pleasure.'

    const testiArr = [
        {
            id: 45,
            test_img: Viezh,
            test_name: 'Viezh Robert',
            test_town: 'Warsaw, Poland',
            test_star: <AiFillStar/>,
            test_score:  4.5,
            test_comment: '“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!'

        },
        {
            id: 50,
            test_img: Yessica,
            test_name: 'Yessica Christy',
            test_town: 'Shanxi, China',
            test_star: <AiFillStar/>,
            test_score:  4.5,
            test_comment: '“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte'

        },
        {
            id: 45,
            test_img: Kim,
            test_name: 'Kim Young Jou',
            test_town: 'Seoul, South Korea',
            test_star: <AiFillStar/>,
            test_score:  4.5,
            test_comment: '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!'

        }
    ]

    const handleSlider = testiArr.map((slider) => {
        return (
            <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div key={slider.id} className=" box-border border-4 border-solid bg-[#FFFFFF] rounded-xl w-full">
            <div className='flex pt-7 pb-5 px-5 space-x-5 h-[100px]'>     
            <img className="w-[50px] h-[50px] rounded-full" src={slider.test_img} alt="" />
          <div className="flex flex-col">
            <div className="text-[#0B132A] text-[18px] font-bold">{slider.test_name}</div>
            <div className="text-[14px]">{slider.test_town}</div>
          </div>
          <div className=" flex flex-row space-x-1 pt-2 justify-end float-right ">
            <div className="font-medium"> {slider.test_score} </div>
            <div className="text-yellow-400 pt-1">
             {slider.test_star}
            </div>
          </div>
          </div>
          <div className="flex items-end pt-2 w-[full] h-[100px]">
            <div className="text-[#0B132A] leading-7 font-semibold px-5 py-2">{slider.test_comment}</div>
          </div>
        </div>
        </SwiperSlide>
           
          </Swiper>
        )
    })

    // const handleTestiArr = testiarr.map((tester) => {
    //     return (
    //     <div key={tester.id} className=" box-border border-4 border-solid bg-[#FFFFFF] rounded-xl">
    //         <div className='flex pt-7 pb-5 px-5 space-x-5'>     
    //         <img className="w-[50px] h-[50px] rounded-full" src={tester.test_img} alt="" />
    //       <div className="flex flex-col">
    //         <div className="text-[#0B132A] text-[18px] font-bold">{tester.test_name}</div>
    //         <div className="text-[14px]">{tester.test_town}</div>
    //       </div>
    //       <div className=" flex flex-row space-x-1 pl-20 pt-2">
    //         <div className="font-medium"> {tester.test_score} </div>
    //         <div className="text-yellow-400 pt-1">
    //          {tester.test_star}
    //         </div>
    //       </div>
    //       </div>
    //       <div className="flex items-end">
    //         <div className="text-[#0B132A] leading-7 font-semibold px-5 py-2">{tester.test_comment}</div>
    //       </div>
    //     </div>

    //     )

    // })
  return (
    <div className='items-center flex flex-col font-rubik w-full'>
        <div className='text-[35px] font-bold leading-[50px] text-[#0B132A] w-[30%] text-center py-10'>{testTitle}</div>
        <div className='font-normal leading-7 w-[35%] text-center pb-10'>{testDesc}</div>
           <div className='flex space-x-10'>{handleSlider}</div>
    </div>
  )
}

export default Testicom