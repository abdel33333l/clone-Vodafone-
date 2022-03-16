import React from "react";
import { VscTerminalUbuntu } from "react-icons/vsc";
import "./footer.css";
const Footer = () => {
  return (
    <div className="app__footer">
      <footer className="container app__footer-container">
        <div className="app__footer-ask">
          <h4>Ask our community</h4>
          <VscTerminalUbuntu className="ask__icon" />
        </div>
        <div className="footer__links">
          <ul className="footer__about-links">
            <h5 className="footer__links-title">About Vodafone</h5>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                About us
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Careers
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                New & press releases
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Sustainable business
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                TV Commercials
              </a>
            </li>
          </ul>
          <ul className="footer__about-links">
            <h5 className="footer__links-title">Help</h5>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Services FAQ's
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Be protected
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Call us
              </a>
            </li>
          </ul>
          <ul className="footer__about-links">
            <h5 className="footer__links-title">Products and services</h5>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Phone
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Broadband
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Accessories
              </a>
            </li>
            <li className="footer__links-li">
              <a href="#" className="footer__links-li-a">
                Discounts
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-contact">
          <h5>Contact US</h5>
          <h5>Switch to business</h5>
        </div>
        <div className="app__footer-last">
          <div className="footer__terms">
            <p>Terms & conditions</p>
            <p>Privacy Notice</p>
          </div>
          <div className="myname">© 2022 Cloned Vodafone By Mo-Adel</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
