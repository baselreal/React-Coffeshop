import './App.css'
import React, { useEffect, useState } from "react";
import Navbar from './screens/homepage1/navbar/navbar';
import Home1 from './screens/homepage1/home1/home1';
// import Info from './screens/homepage1/info/info';
import Homecon from './screens/homepage1/homecontent/homecon';
import Favorite from './screens/homepage1/favorite/favorite';
import Chizu from './screens/homepage1/map/chizu';
import Partner from './screens/homepage1/partner/partner';
import Testimoni from './screens/homepage1/testimoni/testimoni';
import Slider from './components/testicom/assets/utility/slider';
import Promo from './screens/homepage1/promo/promo';
import Footer from './screens/homepage1/footer/footer';


function App() {
  const [open, setOpen] = useState(false)
 
//choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 768) {
        setOpen(true)
    } else {
        setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const handleOpen = () => {
    setOpen(!open)
  }

  console.log(open)

  return (
    <>
     {
      open ? (
        <div className="App lg:hidden md:flex flex">
        <Navbar open={open} handleOpen={handleOpen} />
        <div className='w-full h-[80vh] bg-white absolute'>
          {/* compoenent disin */}
          <div/> 
        </div>
        </div>
      ): (
        <div className="App">
        <div>
          <Navbar open={open} handleOpen={handleOpen} />
          <Home1/>
          {/* <Info/> */}
        </div>
        <Homecon/> 
        <Favorite/>
        <Chizu />
        <Partner/>
        <div>
          <Testimoni/>
          <Slider />
        </div>
        <div>
        <Promo />
        <Footer />
        </div>
       </div>
      )
    }

     </>
  );
}

export default App;
