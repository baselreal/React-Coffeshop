import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import './infostyle.css'

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
  // border lg:py-16 md:py-[70px] py-[45px] lg:px-24 md:px-[60px] px-[25px]
  // lg:py-20 md:py-16 py-14 vsm:py-12 mini:py-8 vmini:py-5 lg:px-20 md:px-16 vsm:px-8 mini:px-[18px] vmini:px-1 px-14
  const handleInfoProps = infoProps.map((infos) => {
    return (
    <div key={infos.names} className="">
      <div className=' flex  rounded-sm  bg-white lg:space-x-4 md:space-x-3 space-x-2  border lg:py-20 md:py-20 py-16 vsm:py-14 mini:py-14 vmini:py-10 lg:px-20 md:px-16 vsm:px-8 mini:px-[20px] vmini:px-2 px-12'>
        <div className=" bg-yellow-400 lg:w-12 md:w-12 w-6 lg:h-12 md:h-12 h-6 lg:mt-0 md:mt-0 mt-1  rounded-full text-center items-center justify-center box-border border-3 flex text-lg ">
          {infos.logos}
        </div>
        <div className="">
          <div className="lg:text-3xl md:text-3xl text-lg vmini:text-[12px] font-bold">{infos.names}</div>
          <div className="vmini:text-[12px]">{infos.about}</div>
      </div>
      </div>
      </div>
      )
  })


  return (

    <div className=" flex text-center justify-center items-end h-max ">
      <div className='flex'>{handleInfoProps}</div>
    </div>

  )
}

export default Infocom

        // {/* // <div className="flex justify-around items-center -mt-20 box-border h-40 w-[70%] border bg-white ">
        // //   <div className="flex space-x-4">
        // //     <div className="border-3 bg-yellow-400 w-12 h-12 rounded-full text-2xl items-center justify-center text-center flex mt-2">
        // //       <BsPersonFill />
        // //     </div>
        // //     <div className="flex flex-col border-r-2 w-60">
        // //       <div className="text-3xl font-bold"> 90+ </div>
        // //       <div className="pl-1"> Staff</div>
        // //   </div>
        // // </div> */}