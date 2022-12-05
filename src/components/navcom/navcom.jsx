import { React } from "react";
import "./navstyle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navcom = (props) => {
  const { logo, name, login, signup } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const nav_list = [
    {
      Id: 125616,
      nbl: "Home",
    },
    {
      Id: 12347838,
      nbl: "Product",
    },
    {
      Id: 12067816,
      nbl: "Your Cart",
    },
    {
      Id: 1245853486,
      nbl: "History",
    },
  ];


const handleNavList = nav_list.map((nav) => {
  return (
    <ul key={nav.Id}>
      <li>
        <a href="">{nav.nbl}</a>
      </li>
    </ul>
  )
})

  return (
    <>
      <div className="w-full py-6 flex flex-row justify-between items-center text-center font-rubik">
        <div className="flex space-x-5 lg:pl-32 md:pl-32 pl-20">
          <img className="w-[35px] h-[35px]" src={logo} alt="" />
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
          <div className="btn-toggle text-xl cursor-pointer">
            <GiHamburgerMenu />{" "}
          </div>
  
        </div>
      </div>
    </>
  );
};

export default Navcom;
