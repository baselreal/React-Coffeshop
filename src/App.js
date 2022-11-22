import './App.css'
import React from "react";
import Navbar from './screens/homepage1/navbar/navbar';
import Home1 from './screens/homepage1/home1/home1';
import Rectangle from './screens/homepage1/rectangle/rectangle';
import Homecon from './screens/homepage1/homecontent/homecon';
import Favorite from './screens/homepage1/favorite/favorite';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home1/>
      <Rectangle/>
      <Homecon/>
      <Favorite/>

     </div>
  );
}

export default App;
