import React from "react";
import offer1 from "../../assets/images/card-1.jpeg";
import offer2 from "../../assets/images/card-2.jpeg";
import offer3 from "../../assets/images/card-3.jpeg";
import offer4 from "../../assets/images/card-4.jpeg";
import { IoIosArrowForward } from "react-icons/io";

import "./offers.css";
const Offers = () => {
  return (
    <div className="container app__offers-container">
      <div className="app__offers-card">
        <div className="offers__img-div">
          <img src={offer2} alt="Offer Pic" />
        </div>
        <div className="offers__title">
          <h3>Customize your Offer</h3>
          <IoIosArrowForward className="offer__card-icon" />
        </div>
        <p>Customize your Offer now and choose between several Gifts</p>
      </div>
      <div className="app__offers-card">
        <div className="offers__img-div">
          <img src={offer1} alt="Offer Pic" />
        </div>
        <div className="offers__title">
          <h3>Vodafone rate plans</h3>
          <IoIosArrowForward className="offer__card-icon" />
        </div>
        <p> Explore all Vodafone Rateplans and pick your best match. </p>
      </div>
      <div className="app__offers-card">
        <div className="offers__img-div">
          <img src={offer3} alt="Offer Pic" />
        </div>
        <div className="offers__title">
          <h3>Internet Bundles</h3>
          <IoIosArrowForward className="offer__card-icon" />
        </div>
        <p>
          Now you can Choose between the different Extreme internet bundles for
          your phone, tablet that suit you best.
        </p>
      </div>
      <div className="app__offers-card">
        <div className="offers__img-div">
          <img src={offer4} alt="Offer Pic" />
        </div>
        <div className="offers__title">
          <h3>DSL</h3>
          <IoIosArrowForward className="offer__card-icon" />
        </div>
        <p>
          Now enjoy new speeds up to 30Mbps & 100Mbps at the most affordable
          prices.
        </p>
      </div>
    </div>
  );
};

export default Offers;
