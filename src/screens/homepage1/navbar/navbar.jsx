import React from "react";
import Coffee1 from "./coffee1.jpg";
import Navcom from "../../../components/navcom/navcom";

const Navbar = (props) => {
  const {handleOpen, open} = props
  return (
    <>
      <Navcom open={open} handleOpen={handleOpen} logo={Coffee1} name='Coffee Shop'/>
    </>
  )
};

export default Navbar;