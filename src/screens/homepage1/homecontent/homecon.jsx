import React from "react";
import Imgcon from "./homecon.jpg";
import { AiFillCheckCircle } from "react-icons/ai";

const Homecon = () => {
  return (
    <div className="content flex w-full h-screen justify-center items-center space-x-16 space-y-5">
      <div className="img">
        <img src={Imgcon} alt="content" />
      </div>
      <div className="float-right flex flex-col w-[30%] pt-5 ">
        <div className="text-[35px] font-medium leading-[50px] text-[#0B132A]">We Provide Good Coffee and Healthy Meals</div>
        <div className="text-[16.5px] font-normal leading-7 pt-5 text-[#4F5665]">You can explore the menu that we provide with fun and have their own taste and make your day better.</div>
        <div className="pt-5 space-y-5">
          <div className="flex">
            <div className="text-[#2FAB73] text-xl">
              <AiFillCheckCircle />
            </div>
            <p className="-mt-[5px] text-sm leading-7 ml-2 text-[#4F5665]">High quality beans</p>
          </div>
          <div className="flex">
            <div className="text-[#2FAB73] text-xl">
              <AiFillCheckCircle />
            </div>
            <p className="-mt-[5px] text-sm leading-7 ml-2 text-[#4F5665]"> Healthy meals, you can request the ingredients</p>
          </div>
          <div className="flex">
            <div className="text-[#2FAB73] text-xl">
              <AiFillCheckCircle />
            </div>
            <p className="-mt-[5px] text-sm leading-7 ml-2 text-[#4F5665]" > Chat with our staff to get better experience for ordering </p>
          </div>
          <div className="flex">
            <div className="text-[#2FAB73] text-xl">
              <AiFillCheckCircle />
            </div>
            <p className="-mt-[5px] text-sm leading-7 ml-2 text-[#4F5665]"> Free member card with a minimum purchase of IDR 200.000.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecon;
