import React from "react";


const Testicom = () => {
  const testTitle = "Loved by Thousand of Happy Customer";
  const testDesc = "These are the stories of our customers who have visited us with great pleasure.";

  return (
    <div className="items-center flex flex-col font-rubik w-full bg-gray-50">
      <div className="lg:text-[35px] md:text-[30px] text-[25px] font-bold leading-[50px] text-[#0B132A] lg:w-[30%] w-full px-5  text-center py-10">{testTitle}</div>
      <div className="font-normal leading-7 lg:w-[35%] w-full px-5 text-center pb-10">{testDesc}</div>
    </div>
  );
};

export default Testicom;