import React from "react";
import Infocom from "../../../components/infocom/infocom";
import { BsPersonFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

const Info = () => {
  return (
    <div className="flex justify-center items-center text-center -mt-32">
     <div className=""> <Infocom logos={<BsPersonFill/>} names="90+" about='Staff'/> </div>
     <div> <Infocom logos={<MdLocationPin/>} names="30+" about='Store'/></div>
     <div> <Infocom logos={<AiOutlineHeart/>} names="800+" about='Customer'/> </div>
    </div>
  );
};

export default Info;



{/* <div className="flex justify-around items-center -mt-20 box-border h-40 w-[70%] border bg-white ">
        <div className="flex space-x-4">
          <div className="border-3 bg-yellow-400 w-12 h-12 rounded-full text-2xl items-center justify-center text-center flex mt-2">
            <BsPersonFill />
          </div>
          <div className="flex flex-col border-r-2 w-60">
            <div className="text-3xl font-bold"> 90+ </div>
            <div className="pl-1"> Staff</div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4  ">
          <div className="border-3 bg-yellow-400 w-12 h-12 rounded-full text-2xl items-center justify-center text-center flex mt-2">
            <MdLocationPin />
          </div>
          <div className="flex flex-col border-r-2 w-48 ">
            <div className="text-3xl font-bold ">30+</div>
            <div className="pl-1">Store</div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="border-3 bg-yellow-400 w-12 h-12 rounded-full text-2xl items-center justify-center text-center flex mt-2">
            <AiOutlineHeart />
          </div>
          <div className="flex flex-col pr-10">
            <div className="text-3xl font-bold">800+</div>
            <div className="">Customers</div>
          </div>
        </div>
      </div> */}