import React, { useState } from "react";
import "./navbar.css";
import Icon from "../../assets/images/voda-logo.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="container app__navbar-container">
        <div className="app__navbar-logo">
          <a href="#">
            <img src={Icon} alt="" />
          </a>
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#promotions">Promotions</a>
          </li>
          <li>
            <a href="#rebalance">Recharge your balance</a>
          </li>
          <li>
            <a href="#paybill">Pay your bill</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
        </ul>
        <div className="app__navbar-user">
          <BiSearch className="icon__search" />
          <AiOutlineUser className="icon__user" />
        </div>
        <div className="clickable_icon">
          <RiMenu3Fill
            id="menu-icon"
            className="app__navbar-menuicon"
            onClick={() => {
              document
                .getElementById("link-overlay")
                .classList.add("app__disaber");
              document
                .getElementById("menu-icon")
                .classList.add("app__navbar-menuicon-h");
              document
                .getElementById("close-icon")
                .classList.add("app__navbar-closeicon-v");
            }}
          />
          <AiOutlineClose
            id="close-icon"
            className="app__navbar-closeicon"
            onClick={() => {
              document
                .getElementById("link-overlay")
                .classList.remove("app__disaber");
              document
                .getElementById("menu-icon")
                .classList.remove("app__navbar-menuicon-h");
              document
                .getElementById("close-icon")
                .classList.remove("app__navbar-closeicon-v");
            }}
          />
        </div>

        <div id="link-overlay" className="app__navbar-link-overlay">
          <ul className="app__navbar-links-small">
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a className="app__arabic-overlay" href="#arabic">
                العربية
              </a>
            </li>
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a href="#shop">Shop</a>
            </li>
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a href="#promotions">Promotions</a>
            </li>
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a href="#rebalance">Recharge your balance</a>
            </li>
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a href="#paybill">Pay your bill</a>
            </li>
            <li
              onClick={() => {
                document
                  .getElementById("link-overlay")
                  .classList.remove("app__disaber");
                document
                  .getElementById("menu-icon")
                  .classList.remove("app__navbar-menuicon-h");
                document
                  .getElementById("close-icon")
                  .classList.remove("app__navbar-closeicon-v");
              }}
            >
              <a href="#careers">Careers</a>
            </li>
            <div className="app__navbar-overlay-gray">
              <li
                className="app__navbar-dark-overlay"
                onClick={() => {
                  document
                    .getElementById("link-overlay")
                    .classList.remove("app__disaber");
                  document
                    .getElementById("menu-icon")
                    .classList.remove("app__navbar-menuicon-h");
                  document
                    .getElementById("close-icon")
                    .classList.remove("app__navbar-closeicon-v");
                }}
              >
                <a href="#bus">Business</a>
              </li>
              <li
                className="app__navbar-dark-overlay"
                onClick={() => {
                  document
                    .getElementById("link-overlay")
                    .classList.remove("app__disaber");
                  document
                    .getElementById("menu-icon")
                    .classList.remove("app__navbar-menuicon-h");
                  document
                    .getElementById("close-icon")
                    .classList.remove("app__navbar-closeicon-v");
                }}
              >
                <a href="#vf">Vodafone Egypt</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
