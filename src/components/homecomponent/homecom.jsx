import React from "react";
import Info from "../../screens/homepage1/info/info";

const Homecom = (props) => {
  const { background, title, description } = props;

  // </div> <div className="w-full">
  //   <div className="w-full bg-no-repeat bg-cover opacity-[.9]" style={{ backgroundImage: `url(${background})` }}>
  //     <div className="flex flex-col w-full">
  //     <input className="justify-end w-full  flex mt-10 mb-2 lg:mr-28 md:mr-16 lg:w-72 md:w-72 lg:mx-0 md:mx-0 mx-5 h-[60px] rounded-[30px] pl-10" type="text" placeholder="Search" />
  //     <div className="flex flex-col h-[65vh] lg:w-[50%] md:w-[70%] w-full justify-center lg:pl-36 md:pl-20 md:pb-56 lg:pt-32 pb-[150px]">
  //       <div className="text-white lg:text-5xl md:text-4xl text-4xl lg:px-0 md:px-0 px-10 font-bold pt-40 pb-2 leading-[70px]">{title}</div>
  //       <div className="text-white lg:text-xl md:text-lg text-base py-2 lg:px-0 md:px-0 px-10 leading-[30px]">{description}</div>
  //       <div className="flex w-full  lg:justify-start md:justify-start justify-center">
  //         <div className="bg-[#FFBA33] w-64 h-[50px] text-[18px] text-center items-center rounded-[10px] lg:justify-center py-3 mt-6 px-20">
  //           <button className="" onClick="">
  //             Get Started
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <Info />
  //     </div>
  //   </div>
  //   </div>

  //   lg:mt-56 md:mt-72
  // lg:-mb-24 md:-mb-8

  return (
    <div className="flex w-full mb-90 font-rubik">
      <div className="w-full flex bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <div className="flex flex-col w-full">
          <div className="w-full flex lg:justify-end md:justify-center justify-start  py-10 lg:pr-[100px] md:pr-0 lg:pl-0 md:pl-0 pl-10">
            <input className="py-5 rounded-[30px] lg:w-[25%] pl-5 md:w-[70%] w-[90%] font-bold shadow-md lg:text-left md:text-center" type="text" placeholder="Search" />
          </div>

          <div className="w-full flex flex-col md:px-20 px-1">
            <div className=" pt-18 lg:w-[45%] w-full space-y-8 lg:text-left text-center">
              <div className=" text-white lg:text-5xl text-4xl font-bold leading-[70px]">{title}</div>

              <div className="text-white text-xl leading-[30px]">{description}</div>
               
              <button className=" px-16 py-5 w-fit rounded-[10px] bg-[#FFBA33] text-[18px] text-center">
                Get Started
              </button>
            </div>
            <div className="flex w-full h-full items-end justify-center lg:-mb-20 md:-mb-20 -mb-20 vmini:-mb-12 lg:pt-60 md:pt-60 pt-52">
            <Info />
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Homecom;
