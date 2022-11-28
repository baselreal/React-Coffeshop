import React from "react";
import { Link } from "react-router-dom";
import "./navstyle.css";
import {GiHamburgerMenu} from 'react-icons/gi'

const Navcom = (props) => {

  const { logo, name, login, signup} = props;


  return (

    <>
      <div className="navigationBar w-[100%] h-[100px] flex flex-row justify-between items-center text-center font-rubik">
        <div className="flex space-x-5 pl-32">
        <img className="w-[35px] h-[35px]" src={logo} alt=""/>
        <div className="font-bold text-[20px]">{name}</div>
        </div>
        <ul className="navList flex space-x-12">
        <li className="font-bold"> <a href="">Home</a> </li>
        <li className=""> <a href="">Product</a> </li>
        <li className=""> <a href="">Your Cart</a> </li>
        <li className=""> <a href="">History</a> </li>
        </ul>
        <div className="nav-btn space-x-7 pr-32 flex">
        <div className="btn-toggle"> <GiHamburgerMenu/> </div>
        <button className="login font-bold" onClick={login}>Login</button> 
        <button className="daftar bg-[#FFBA33] w-36 h-11 rounded-3xl" onClick={signup}>Sign Up</button>
        
        </div>
      </div>
    </>
  );
};

export default Navcom;
