import React from "react";
import Info from "../../screens/homepage1/info/info";

const Homecom = (props) => {
  const { background, title, description } = props;

  return (
    <div>
    <div className="w-full h-[80vh] bg-no-repeat bg-cover opacity-[.9]" style={{ backgroundImage: `url(${background})` }}>
      <input className="float-right mt-20 mb-2 lg:mr-28 md:mr-16 lg:w-72 md:w-72 w-[90%] lg:mx-0 md:mx-0 mx-5 h-[60px] rounded-[30px] pl-10" type="text" placeholder="Search" />
      <div className="flex flex-col h-[65vh] lg:w-[50%] md:w-[70%] w-full justify-center lg:pl-36 md:pl-20 md:pb-56 lg:pt-32 pb-[150px]">
        <div className="text-white lg:text-5xl md:text-4xl text-4xl lg:px-0 md:px-0 px-10 font-bold pt-10 pb-2 leading-[70px]">{title}</div>
        <div className="text-white lg:text-xl md:text-lg text-base py-2 lg:px-0 md:px-0 px-10 leading-[30px]">{description}</div>
        <div className="flex w-full  lg:justify-start md:justify-start justify-center">
          <div className="bg-[#FFBA33] w-64 h-[50px] text-[18px] text-center items-center rounded-[10px] lg:justify-center py-3 mt-6 px-20">
            <button className="" onClick="">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Info />
    </div>
    </div>
  );
};

export default Homecom;
