import './App.css'
import '../src/components/navcom/navstyle.css'
import React, { useState } from "react";
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
import ToogleNav from './components/navcom/toogle';


function App() {
  const [open, setOpen] = useState(false)
 
//choose the screen size 
  // const handleResize = () => {
  //   if (window.innerWidth < 1024) {
  //       setOpen(true)
  //   }
  //    else {
  //       setOpen(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize)
  // },[])

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
     {
      open ? (
        <div className="ease-in-out delay-75 lg:hidden md:flex flex">
        <Navbar open={open} handleOpen={handleOpen} />
        <div className='ease-in-out delay-75 w-full h-screen bg-white absolute '>
        <ToogleNav />
          <div/> 
          
        </div>
        </div>
      ): (
        <div className="App">
        <div>
          <Navbar open={open} handleOpen={handleOpen}  />
          <Home1/>
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
