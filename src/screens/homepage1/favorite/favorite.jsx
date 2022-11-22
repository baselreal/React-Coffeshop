import React from "react";
import Hazelnut from "./Hazelnut.jpg";
import Pinky from "./Pinky.jpg";
import Chicken from "./Chicken.jpg";
import { AiOutlineCheck } from "react-icons/ai";

const Favorite = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center">
      <div className="text-[35px] leading-[100px] text-[#0B132A]">Here is People’s Favorite</div>
      <div className="text-[#4F5665] leading-7">Let's choose and have a bit taste of poeple’s favorite. It might be yours too!</div>
      <div className="flex flex-row justify-evenly w-[70%] pt-16 h-[100%] ">

        {/* awalan hazelnut */}

        <div className="box-border border-solid border-4 w-[350px] h-[760px] pt-10">
          <div className="flex items-center justify-center ">
            <img className=" w-[200px] border-2 rounded-full" src={Hazelnut} alt="" />
          </div>
          <div className="h-[72%] text-center pt-10">
            <div className="font-medium text-[20px] text-center">Hazelnut Latte</div>
            <div>
              <div className="flex flex-col pl-24 text-[14px] w-full pt-10 space-y-5">
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">HazelnutSyrup</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Wanilla Whipped Cream</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Ice / Hot</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Sliced Banana on Top</p>
                </div>
              </div>
              <div className="font-medium text-[25px] pt-32">IDR 25.000</div>
              <div className="w-[100%] flex justify-center pt-5">
                <div className="box-border border-2 border-solid h-[45px] w-[178px] border-[#FFBA33] rounded-3xl">
                  <div className="text-[#6A4029] leading-[19px] h-[40px] flex justify-center items-center content-center text-center font-bold">Order Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* akhir hazelnut */}

        {/* awalan pinky */}

        <div className="box-border border-solid border-4 w-[350px] h-[760px] pt-10">
          <div className="flex items-center justify-center ">
            <img className=" w-[200px] border-2 rounded-full h-[200px]" src={Pinky} alt="" />
          </div>
          <div className="h-[72%] text-center pt-[36px]">
            <div className="font-medium text-[20px] text-center text-[#0B132A]">Pinky promise</div>
            <div>
              <div className="flex flex-col pl-24 text-[14px] w-full pt-10 space-y-5">
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">1 Shot of Coffee</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Vanilla Whipped Cream</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Chocolate Biscuits</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Strawberry Syrup</p>
                </div><div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Sliced strawberry on Top</p>
                </div>
              </div>
              <div className="font-medium text-[25px] pt-[94px]">IDR 30.000</div>
              <div className="w-[100%] flex justify-center pt-5">
                <div className="box-border border-2 border-solid h-[45px] w-[178px] border-[#FFBA33] rounded-3xl">
                  <div className="text-[#6A4029] leading-[19px] h-[40px] flex justify-center items-center content-center text-center font-bold">Select</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* akhiran pinky */}

        {/* awalan chicken  */}

        <div className="box-border border-solid border-4 w-[350px] h-[760px] pt-10">
          <div className="flex items-center justify-center ">
            <img className=" w-[200px] border-2 rounded-full" src={Chicken} alt="" />
          </div>
          <div className="h-[72%] text-center pt-[36px]">
            <div className="font-medium text-[20px] text-center">Chicken Wings</div>
            <div>
              <div className="flex flex-col pl-24 text-[14px] w-full pt-8 space-y-5">
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Wings</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Drum Sticks</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Mayonaise and Lemon</p>
                </div>
                <div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Hot Fried</p>
                </div><div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Secret Recipe</p>
                </div><div className="flex space-x-2">
                  <div className="text-[#2FAB73]">
                    <AiOutlineCheck />
                  </div>
                  <p className="-mt-[5px]">Buy 1 Get 1 only for Dine in</p>
                </div>
              </div>
              <div className="font-medium text-[25px] pt-[64px]">IDR 40.000</div>
              <div className="w-[100%] flex justify-center pt-5">
                <div className="box-border border border-solid h-[45px] w-[178px] bg-[#FFBA33] rounded-3xl">
                  <div className="text-[#6A4029] leading-[19px] h-[40px] flex justify-center items-center content-center text-center font-bold">Select</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* akhiran chicken  */}
      </div>
    </div>
  );
};

export default Favorite;
