import React from "react";
import "./services.css";
import { BsSim } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsShop } from "react-icons/bs";

const Services = () => {
  return (
    <div className="app__services">
      <div className="container app__services-container">
        <div className="app__services-card">
          <div className="app__services-card-icon">
            <BsSim />
          </div>
          <h5>Recharge your balance</h5>
        </div>
        <div className="app__services-card">
          <div className="app__services-card-icon">
            <MdOutlineAttachMoney />
          </div>
          <h5>Pay your bill</h5>
        </div>
        <div className="app__services-card">
          <div className="app__services-card-icon">
            <AiOutlineUser />
          </div>
          <h5>Manage Account</h5>
        </div>
        <div className="app__services-card">
          <div className="app__services-card-icon">
            <BsShop />
          </div>
          <h5>Shop</h5>
        </div>
        <div className="app__services-card">
          <div className="app__services-card-icon">
            <BsHeadset />
          </div>
          <h5>Chat with us</h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
