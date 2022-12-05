import './App.css'
import React from "react";
import Navbar from './screens/homepage1/navbar/navbar';
import Home1 from './screens/homepage1/home1/home1';
// import Info from './screens/homepage1/info/info';
import Homecon from './screens/homepage1/homecontent/homecon';
import Favorite from './screens/homepage1/favorite/favorite';
<<<<<<< HEAD
import Chizu from './screens/homepage1/map/chizu';
import Partner from './screens/homepage1/partner/partner';
import Testimoni from './screens/homepage1/testimoni/testimoni';
import Slider from './components/testicom/assets/utility/slider';
import Promo from './screens/homepage1/promo/promo';
import Footer from './screens/homepage1/footer/footer';
=======
import Chizu from './screens/homepage1/map/chizu';  
import Partner from './screens/homepage1/partner/partner';
import Testimoni from './screens/homepage1/testimoni/testimoni';
>>>>>>> 45c9720ae58412f65192435b666b0915bff778b4


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <div>
        <Navbar />
        <Home1/>
        {/* <Info/> */}
      </div>
=======

      <Navbar/>
      <div className='flex flex-col'>
      <Home1/>
      <Info/>
      </div>

>>>>>>> 45c9720ae58412f65192435b666b0915bff778b4
      <Homecon/> 
      <Favorite/>
      <Chizu />
      <Partner/>
<<<<<<< HEAD
      <div>
        <Testimoni/>
        <Slider />
      </div>
      <div>
      <Promo />
      <Footer />
      </div>
=======
      <Testimoni/>

>>>>>>> 45c9720ae58412f65192435b666b0915bff778b4
     </div>
  );
}

export default App;
