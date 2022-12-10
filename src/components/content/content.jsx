import React from "react";
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
                <li className="flex lg:space-x-4 md:space-x-3 space-x-2">
                    <div className="text-[#2FAB73] text-lg">{obj.check}</div>
                   <div className="">{obj.desc}</div> 
                </li>
            </ul>
        )
    }) 




    

   
  return (
    <div className="content flex lg:flex-row flex-col w-full h-screen justify-center items-center font-rubik mt-32 vmini:mt-40 ">
      <div className="img">
        <img className="" src={conimg} alt="Content" />
      </div>
      <div className=" flex flex-col space-y-5 pt-5 px-9">
        <div className="text-[35px]  font-bold leading-[50px] text-[#0B132A]">{conTitle}</div>
        <div className="text-[15px]  font-normal leading-7  text-[#4F5665]">{conContent}</div>
        <div className="text-[14px]  space-y-3">{handleText}</div>
      </div>
    </div>
  );
};

export default Content;