// import { useState } from "react";
import "./App.css";
import Gallery from "./Components/Gallery";
import WizNavbar from "./Components/WizNavbar";
import Services from "./Components/Services";
import SmartItems from "./Components/SmartItem";
import Technologies from "./Components/Technologies";
import ServicePackages from "./Components/ServicePackages";
import LogoSlider from "./Components/LogoSlider";
import Footer from "./Components/Footer";

// import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <WizNavbar />
      <SmartItems />
      <Technologies />
      <Services />
      <Gallery />
      <ServicePackages/>
      
      {/* <Blogs/> */}
      {/* <Icons/> */}
      <LogoSlider/>
      <Footer/>
    </>
  );
}

export default App;
