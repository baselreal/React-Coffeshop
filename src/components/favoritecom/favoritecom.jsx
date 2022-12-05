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
      fav_btn: <button>Order Now</button>
    },
    {
      id: 30,
      fav_Image: Pinky,
      fav_name: "Pinky Promise",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["1 Shot of Coffee", "Vanilla Whipped Cream", "Chocolate Biscuits", "Strawberry Syrup", "Sliced strawberry on Top"],
      price: "IDR 30.000",
      fav_btn: <button>Order Now</button>
    },
    {
      id: 40,
      fav_Image: Chicken,
      fav_name: "Chicken Wings",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["Wings", "Drum Sticks", "Mayonaise and Lemon", "Hot Fried", "Secret Recipe", "Buy 1 Get 1 "],
      price: "IDR 40.000",
      fav_btn: <button>Order Now</button>
    },
  ];

  const handleFavProduct = favProduct.map((prod) => {
    return (
      <div key={prod.id} className=" w-full flex justify-center">
        <div className="box-border border-2 border-solid border-[#DDDDDD] justify-center">
          <div className="flex lg:flex-col md:flex-row">
        <div className="lg:pt-[62px] lg:justify-center flex">
          <img className="rounded-full" src={prod.fav_Image} alt="" />
        </div>
        <div className="lg:text-center lg:pt-10 font-bold">
          <div>{prod.fav_name}</div>
        </div>
        <div className="lg:py-10 lg:space-y-6 lg:h-[300px]">
          {prod.fav_desc.map((item) => {
            return (
              <div className="flex flex-row lg:px-20 lg:py-0 md:py-2 lg:space-x-3 lg:w-full md:w-[200px]">
                <div className="flex text-[#2FAB73]">{prod.fav_check}</div>
                <div className="flex flex-col -mt-1 text-[14px]">{item}</div>
              </div>
            );
          })}
        </div>
        <div className="justify-center lg:flex lg:py-6 md:inline-flex ">
        <div className=" font-bold ">{prod.price}</div>
        </div>
        <div className="flex lg:justify-center text-center items-end lg:h-fit pt-5 lg:pb-[50px]">
        <div className=" box-border border-2 border-solid  inline-block  py-3 px-10">
          {prod.fav_btn}
        </div>
        </div>
        </div>
        </div>
        
      </div>
    );
  });

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center ">
      <div className="lg:text-[35px] md:text-[30px] leading-[80px] text-[#0B132A]">{favTitle}</div>
      <div className="text-[#4F5665] leading-7">{descTitle}</div>
      <div className="flex lg:space-x-14 lg:space-y-0 md:space-y-10 pt-20 lg:flex-row md:flex-col ">{handleFavProduct}</div>
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
