import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <div className="f-social">
            <a href="#" className="social-link">
              <FaFacebook className="social-icon facebook" />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link">
              <FaInstagram className="social-icon instagram" />
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link">
              <FaYoutube className="social-icon youtube" />
              <span>Youtube</span>
            </a>
          </div>
        </div>

        {/* center */}
        <div className="flexColStart f-center">
          <h3>LIÊN HỆ VỚI TÔI</h3>
          <div className="contact-info">
            <p>Call me: +84 123 456</p>
            <p>Zalo: +84 123 456</p>
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <h3>EMAIL</h3>
          <p>youremail@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
