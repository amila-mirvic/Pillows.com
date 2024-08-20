import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Header from './Components/Header'
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import PerfectPillow from "./Components/PerfectPillow";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Reviews from "./Components/Reviews";
import Resorts from "./Components/Resorts";
import Brands from "./Components/Brands";
import IconBoxes from "./Components/IconBoxes";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <PerfectPillow />
      <Banner />
      <Cards />
      <Reviews />
      <Resorts />
      <Brands />
      <IconBoxes />
      <Footer />
    </div>
  );
};

export default App;