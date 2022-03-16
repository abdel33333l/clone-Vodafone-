import React from "react";
import "./categoryNav.css";
const CategoryNav = () => {
  return (
    <div className="app__catenav">
      <div className="container app__catenav-container">
        <nav className="app__category">
          <li className="active">
            <a href="#person">Personal</a>
          </li>
          <li>
            <a href="#business">Business</a>
          </li>
          <li>
            <a href="#vf-eg">Vodafone Egypt</a>
          </li>
        </nav>
        <div className="app__lang">
          <a href="#arabic">Arabic</a>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
