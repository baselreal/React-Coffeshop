import React from "react";
import Coffee1 from './coffee1.jpg'
import '../style.css'

const Navbar = () => {
  return (
    <div className="w-full h-full justify-center items-center text-center ">
      <nav className="flex w-full justify-between h-20 text-center items-center">
        <div className="brand flex space-x-2 pl-12 ">
          <div className="w-7">
            <img src={Coffee1} alt="" />
          </div>
          <div className="text-xl font-bold">Coffe Shop</div>
        </div>
        <div className="feature flex space-x-5 text-md">
          <div className="text-[#6A4029] font-bold ">Home</div>
          <div>Product</div>
          <div>Your Cart</div>
          <div>History</div>
        </div>
        <div className="account text-center items-center flex space-x-5 text-md pr-12">
          <div>Login</div>
          <div className="bg-[#FFBA33] w-36 h-11 rounded-3xl pt-2">Sign Up</div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;