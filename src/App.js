import './App.css'
import React from "react";
import Navbar from './screens/homepage1/navbar/navbar';
import Home1 from './screens/homepage1/home1/home1';
import Info from './screens/homepage1/info/info';
import Homecon from './screens/homepage1/homecontent/homecon';
import Favorite from './screens/homepage1/favorite/favorite';
import Chizu from './screens/homepage1/map/chizu';  
import Partner from './screens/homepage1/partner/partner';
import Testimoni from './screens/homepage1/testimoni/testimoni';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <div className='flex flex-col'>
      <Home1/>
      <Info/>
      </div>

      <Homecon/> 
      <Favorite/>
      <Chizu />
      <Partner/>
      <Testimoni/>

     </div>
  );
}

export default App;
