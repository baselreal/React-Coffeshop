import React from "react";


const Testicom = () => {
  const testTitle = "Loved by Thousand of Happy Customer";
  const testDesc = "These are the stories of our customers who have visited us with great pleasure.";

  return (
    <div className="items-center flex flex-col font-rubik w-full bg-gray-50">
      <div className="text-[35px] font-bold leading-[50px] text-[#0B132A] w-[30%]  text-center py-10">{testTitle}</div>
      <div className="font-normal leading-7 w-[35%] text-center pb-10">{testDesc}</div>

    </div>
  );
};

export default Testicom;

// const handleTestiArr = testiArr.map((tester) => {
//   return (
//     <div key={tester.id} className=" box-border border-4 border-solid bg-[#FFFFFF] rounded-xl">
//       <div className="flex pt-7 pb-5 px-5 space-x-5">
//         <img className="w-[50px] h-[50px] rounded-full" src={tester.test_img} alt="" />
//         <div className="flex flex-col">
//           <div className="text-[#0B132A] text-[18px] font-bold w-max">{tester.test_name}</div>
//           <div className="text-[14px]">{tester.test_town}</div>
//         </div>
//         <div className=" flex flex-row space-x-1 pt-2 w-full h-fit justify-end">
//           <div className="font-bold"> {tester.test_score} </div>
//           <div className="text-yellow-400 pt-1">{tester.test_star}</div>
//         </div>
//       </div>
//       <div className="flex items-end py-2">
//         <div className="text-[#0B132A] leading-7 font-semibold px-5 py-2">{tester.test_comment}</div>
//       </div>
//     </div>
//   );
// });
