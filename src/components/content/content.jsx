import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Content = (props) => {
    const {conimg} = props

    const conTitle = "We Provide Good Coffee and Healthy Meals"
    const conContent = "You can explore the menu that we provide with fun and have their own taste and make your day better."

    const text = [
            {   
                id: 1,
                check: <AiFillCheckCircle/>,
                desc: 'High quality beans'
            },
            {
                id: 2,
                check: <AiFillCheckCircle/>,
                desc: 'Healthy meals, you can request the ingredients'
            },
            {
                id: 3,
                check: <AiFillCheckCircle/>,
                desc: 'Chat with our staff to get better experience for ordering'
            },
            {
                id: 4,
                check: <AiFillCheckCircle/>,
                desc: 'Free member card with a minimum purchase of IDR 200.000.'
            }
    ]

    const handleText = text.map((obj) => {
        return (
            <ul key={obj.id} >
                <li className="flex lg:space-x-5 md:space-x-3 ">
                    <div className="text-[#2FAB73] text-lg">{obj.check}</div>
                   <div className="">{obj.desc}</div> 
                </li>
            </ul>
        )
    }) 




    

   
  return (
    <div className="content flex lg:flex-row md:flex-row flex-col w-full h-screen justify-center items-center font-rubik lg:space-x-16 md:space-x-10 ">
      <div className="img">
        <img className="lg:w-[600px] md:w-[450px]" src={conimg} alt="Content" />
      </div>
      <div className=" flex flex-col lg:w-[35%] md:w-[40%] pt-5 pr-5 lg:px-2 md:px-2 px-6 ">
        <div className="lg:text-[35px] md:text-[28px] text-[20px] font-bold leading-[50px] text-[#0B132A]">{conTitle}</div>
        <div className="lg:text-[16.5px] md:text-[13px] font-normal leading-7 pt-5 text-[#4F5665]">{conContent}</div>
        <div className="lg:text-[14px] md:text-[12px] pt-5 space-y-4">{handleText}</div>
      </div>
    </div>
  );
};

export default Content;

{
  /* <div className="content flex w-full h-screen justify-center items-center space-x-16 space-y-5">
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
    </div> */
}
