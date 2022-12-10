import React from "react";
import { navLink } from "./utilitynav";

const ToogleNav = () => {
    const handleList = navLink.map((nav)  =>  {
        return (
            <ul key={nav.Id}>
              <li>
                <a href="/">{nav.Nbl}</a>
              </li>
            </ul>
          )
    })

  return (
    <div className="flex justify-center items-center bg-white h-max w-full mt-60">
        <div className="w-full">
      <div className="justify-center items-center text-center space-y-20">{handleList}</div>
      <div className="flex items-center justify-around text-center pt-52">
        <button className=" font-bold" onClick=''>
          Login
        </button>
        <button className=" bg-[#FFBA33] w-36 h-11 rounded-3xl">
          Sign Up
        </button>
      </div>
      </div>
    </div>
  );
};

export default ToogleNav;
