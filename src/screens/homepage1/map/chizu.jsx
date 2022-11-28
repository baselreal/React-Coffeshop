import React from "react";
import World from "./Vector.jpg";

const Chizu = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-gray-50">
 
      <div className="text-[#0B132A] text-3xl font-medium leading-[50px] w-[20%] text-center pt-5">Visit Our Store in the Spot on the Map Below</div>
      <div className="pt-10 w-[32%] text-center font-medium text-[#4F5665]">See our store in every city on the spot and spen your good day there. See you soon!</div>
      <div className="h-full flex justify-center items-center">
        <img className="bg-[#DDE0E4] mix-blend-multiply" src={World} alt="" />
      </div>
    </div>
  );
};

export default Chizu;
