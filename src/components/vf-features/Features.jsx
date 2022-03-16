import React from "react";
import "./features.css";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsShop } from "react-icons/bs";
const Features = () => {
  return (
    <div className="container app__features">
      <div className="app__feat">
        <IoIosPhonePortrait className="app__feat-icon" />
        <h3>Ana Vodafone App</h3>
        <a className="app__features-btn" href="#ana">
          Download now
        </a>
      </div>
      <div className="app__feat">
        <GiNetworkBars className="app__feat-icon icon-red" />
        <h3>4G</h3>
        <a className="app__features-btn" href="#ana">
          Check your Readiness
        </a>
      </div>
      <div className="app__feat">
        <BsShop className="app__feat-icon icon-red" />
        <h3>Store Locator</h3>
        <a className="app__features-btn" href="#ana">
          Find a Store
        </a>
      </div>
    </div>
  );
};

export default Features;
