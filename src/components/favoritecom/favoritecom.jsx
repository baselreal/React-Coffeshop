import React from "react";
import Hazelnut from "./favimg/Hazelnut.jpg";
import Pinky from "./favimg/Pinky.jpg";
import Chicken from "./favimg/Chicken.jpg";
import { AiFillCheckCircle } from "react-icons/ai";

const Menu = () => {
  const favTitle = "Here is People’s Favorite";
  const descTitle = "Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!";

  const favProduct = [
    {
      id: 25,
      fav_Image: Hazelnut,
      fav_name: "Hazelnut Latte",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["HazelnutSyrup", "Vanilla Whipped Cream", "Ice / Hot", "Sliced Banana on Top"],
      price: "IDR 25.000",
    },
    {
      id: 30,
      fav_Image: Pinky,
      fav_name: "Pinky Promise",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["1 Shot of Coffee", "Vanilla Whipped Cream", "Chocolate Biscuits", "Strawberry Syrup", "Sliced strawberry on Top"],
      price: "IDR 30.000",
    },
    {
      id: 35,
      fav_Image: Chicken,
      fav_name: "Chicken Wings",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["Wings", "Drum Sticks", "Mayonaise and Lemon", "Hot Fried", "Secret Recipe", "Buy 1 Get 1 only for Dine in"],
      price: "IDR 35.000",
    },
  ];

  const handleFavProduct = favProduct.map((prod) => {
    return (
      <div key={prod.id} className="bg-gray-400 w-full h-screen">
        <div>
          <img src={prod.fav_Image} alt="" />
        </div>
        <div>
          <div>{prod.fav_name}</div>
        </div>
        <div>
          {prod.fav_desc.map((item) => {
            return (
              <div className="flex flex-row">
                <div className="flex">{prod.fav_check}</div>
                <div className="flex flex-col">{item}</div>
              </div>
            );
          })}
        </div>
        <div>{prod.price}</div>
      </div>
    );
  });

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center">
      <div className="text-[35px] leading-[100px] text-[#0B132A]">{favTitle}</div>
      <div className="text-[#4F5665] leading-7">{descTitle}</div>
      <div className="flex">{handleFavProduct}</div>
    </div>
  );
};

export default Menu;

// {/* <div className="text-[35px] leading-[100px] text-[#0B132A]">Here is People’s Favorite</div>
// <div className="text-[#4F5665] leading-7">Let's choose and have a bit taste of poeple’s favorite. It might be yours too!</div>
// <div className="flex flex-row justify-evenly w-[70%] pt-16 h-[100%] ">
//

// <div className="box-border border-solid border-4 w-[350px] h-[760px] pt-10">
//   <div className="flex items-center justify-center ">
//     <img className=" w-[200px] border-2 rounded-full" src={Hazelnut} alt="" />
//   </div>
//   <div className="h-[72%] text-center pt-10">
//     <div className="font-medium text-[20px] text-center">Hazelnut Latte</div>
//     <div>
//       <div className="flex flex-col pl-24 text-[14px] w-full pt-10 space-y-5">
//         <div className="flex space-x-2">
//           <div className="text-[#2FAB73]">
//             <AiOutlineCheck />
//           </div>
//           <p className="-mt-[5px]">HazelnutSyrup</p>
//         </div>
//         <div className="flex space-x-2">
//           <div className="text-[#2FAB73]">
//             <AiOutlineCheck />
//           </div>
//           <p className="-mt-[5px]">Wanilla Whipped Cream</p>
//         </div>
//         <div className="flex space-x-2">
//           <div className="text-[#2FAB73]">
//             <AiOutlineCheck />
//           </div>
//           <p className="-mt-[5px]">Ice / Hot</p>
//         </div>
//         <div className="flex space-x-2">
//           <div className="text-[#2FAB73]">
//             <AiOutlineCheck />
//           </div>
//           <p className="-mt-[5px]">Sliced Banana on Top</p>
//         </div>
//       </div>
//       <div className="font-medium text-[25px] pt-32">IDR 25.000</div>
//       <div className="w-[100%] flex justify-center pt-5">
//         <div className="box-border border-2 border-solid h-[45px] w-[178px] border-[#FFBA33] rounded-3xl">
//           <div className="text-[#6A4029] leading-[19px] h-[40px] flex justify-center items-center content-center text-center font-bold">Order Now</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
