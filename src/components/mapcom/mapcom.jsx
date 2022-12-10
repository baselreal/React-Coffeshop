import React from 'react'
import World from './Vector.jpg'

const Mapcom = () => {

    const mapTitle = 'Visit Our Store in the Spot on the Map Below'
    const mapDesc = 'See our store in every city on the spot and spen your good day there. See you soon!'

  return (
    <div className="flex flex-col items-center w-full bg-gray-50 font-rubik pt-10">
      <div className="text-[#0B132A] text-3xl font-bold leading-[50px] lg:w-[30%] px-5 w-full text-center pt-5">{mapTitle}</div>
      <div className="pt-10 lg:w-[32%] px-5 w-full text-center font-medium text-[#4F5665]">{mapDesc}</div>
      <div className="flex items-center pt-10">
        <img className="bg-[#DDE0E4] mix-blend-multiply" src={World} alt="" />
      </div>
    </div>
  )
}

export default Mapcom