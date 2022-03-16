import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import CategoryNav from "./components/navbar/CategoryNav";
import Landing from "./components/swiper/Landing";
import Services from "./components/services/Services";
import Offers from "./components/offers/Offers";
import Features from "./components/vf-features/Features";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <CategoryNav />
      <Navbar />
      <Landing />
      <Services />
      <Offers />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
