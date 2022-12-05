import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

const Infocom = () => {
  const infoProps = [
    {
      logos: <BsPersonFill />,
      names: '90+',
      about: 'Staff'
    },
    {
      logos: <MdLocationPin />,
      names: '30+',
      about: 'Stores'
    },
    {
      logos: <AiOutlineHeart />,
      names: '800+',
      about: 'Customers'
    },
  ]

  const handleInfoProps = infoProps.map((infos) => {
    return (
    <div key={infos.names} className="flex box-border lg:py-20 md:py-20 py-14 lg:px-[100px] md:px-[65px] px-[34px] bg-white border lg:space-x-4 md:space-x-3 space-x-2 ">
        <div className=" bg-yellow-400 lg:w-12 md:w-12 w-8 lg:h-12 md:h-12 h-8 lg:mt-0 md:mt-0 mt-2  rounded-full text-center items-center justify-center box-border border-3 flex text-lg ">
          {infos.logos}
        </div>
        <div className="">
          <div className="lg:text-3xl md:text-3xl text-xl font-bold">{infos.names}</div>
          <div className="">{infos.about}</div>
      </div>
      </div>
      )
  })


  return (

    <div className="flex w-full items-end h-full lg:text-center pt-44 justify-center px-20 ">
      <div className='flex '>{handleInfoProps}</div>
    </div>

  )
}

export default Infocom

        {/* // <div className="flex justify-around items-center -mt-20 box-border h-40 w-[70%] border bg-white ">
        //   <div className="flex space-x-4">
        //     <div className="border-3 bg-yellow-400 w-12 h-12 rounded-full text-2xl items-center justify-center text-center flex mt-2">
        //       <BsPersonFill />
        //     </div>
        //     <div className="flex flex-col border-r-2 w-60">
        //       <div className="text-3xl font-bold"> 90+ </div>
        //       <div className="pl-1"> Staff</div>
        //   </div>
        // </div> */}