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
      fav_btn: <button>Order Now</button>,
    },
    {
      id: 30,
      fav_Image: Pinky,
      fav_name: "Pinky Promise",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["1 Shot of Coffee", "Vanilla Whipped Cream", "Chocolate Biscuits", "Strawberry Syrup", "Sliced strawberry on Top"],
      price: "IDR 30.000",
      fav_btn: <button>Order Now</button>,
    },
    {
      id: 40,
      fav_Image: Chicken,
      fav_name: "Chicken Wings",
      fav_check: <AiFillCheckCircle />,
      fav_desc: ["Wings", "Drum Sticks", "Mayonaise and Lemon", "Hot Fried", "Secret Recipe", "Buy 1 Get 1 "],
      price: "IDR 40.000",
      fav_btn: <button>Order Now</button>,
    },
  ];

  const handleFavProduct = favProduct.map((prod, index) => {
    return (
      <div key={prod.id}>
      <div  className=" w-full flex justify-center">
        <div className="box-border border-2 border-solid border-[#DDDDDD] justify-center">
          <div className="flex lg:flex-col md:flex-row flex-col sm:text-center sm:items-center">
            <div className="lg:pt-[62px]  py-8 lg:pl-0 pl-6 lg:justify-center flex sm:pr-6">
              <img className="rounded-full SE:h-[80px] SE:w-[80px]" src={prod.fav_Image} alt="" />
            </div>
            <div className="flex flex-col lg:pl-0 pl-5 SE:pl-2 SE:pr-">
            <div className="lg:text-center  lg:pt-10 pt-5 lg:pb-0 pb-2 font-bold ">
              <div className="SE:text-[13px]">{prod.fav_name}</div>
            </div>
            <div className="lg:py-10 lg:space-y-6 lg:h-[300px]">
              {prod.fav_desc.map((item, index) => {
                return (
                  <div key={index} className="flex flex-row lg:px-20 lg:py-0 sm:py-2 sm:px-2 lg:space-x-3 space-x-2 lg:w-full w-[200px]">
                    <div className="flex text-[#2FAB73]">{prod.fav_check}</div>
                    <div className="lg:flex flex flex-col -mt-1 text-[14px] SE:text-[12px]">{item}</div>
                  </div>
                );
              })}
            </div>
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="justify-center text-center lg:flex lg:py-6 md:items-end sm:py-5">
                <div className=" font-bold ">{prod.price}</div>
              </div>
              <div className="flex lg:justify-center text-center items-end lg:h-fit pt-5 lg:pb-[50px] sm:pb-5">
                <div className=" box-border border-2 border-solid  inline-block py-3 px-10 lg:mr-0 mr-3 SE:mr-[1px] sm:px-5 SE:px-5">{prod.fav_btn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  });

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center justify-center mt-20">
      <div className="text-[35px] vsm:text-[30px] mini:text-[25px] leading-[80px] text-[#0B132A] px-5">{favTitle}</div>
      <div className="text-[#4F5665] vsm:text-[13px] leading-7 px-5">{descTitle}</div>
      <div className="flex lg:space-x-14 lg:space-y-0 space-y-10 pt-10 lg:flex-row flex-col ">{handleFavProduct}</div>
    </div>
  );
};

export default Menu;
