import { React } from "react";
import "./navstyle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLink } from "./utilitynav";

const Navcom = (props) => {
  const { logo, name, login, handleOpen, open } = props;


const handleNavList = navLink.map((nav) => {
  return (
    <ul key={nav.Id}>
      <li>
        <a href="/">{nav.Nbl}</a>
      </li>
    </ul>
  )
})

  return (
    <>
      <div className="stick w-full z-50 py-6 flex flex-row justify-between items-center text-center font-rubik ">
        <div className="flex space-x-5 lg:pl-32 md:pl-32 pl-20 mini:pl-5">
          <img className="w-[35px] h-[35px] SE:w-6 SE:h-6" src={logo} alt="" />
          <div className="font-bold text-[20px]">{name}</div>
        </div>

        <div className="nav-list flex space-x-10 text-[16px]">{handleNavList}</div>
        <div className="nav-btn space-x-7 pr-24 flex">
          <button className="login font-bold" onClick={login}>
            Login
          </button>
          <button className="register bg-[#FFBA33] w-36 h-11 rounded-3xl">
            Sign Up
          </button>
  
        </div>
        <div onClick={handleOpen} className="btn-toggle text-xl cursor-pointer w-80% justify-end pr-20 SE:pr-10">
            {open ? <AiOutlineClose/> : <GiHamburgerMenu />}
          </div>
      </div>
    </>
  );
};

export default Navcom;
