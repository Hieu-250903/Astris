import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
        <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/residencies">Residencies</Link>
            <Link to="/value">Our Value</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/get-started">Get Started</Link>
            <Link to="/profile" className="user-icon">
              <FaUser />
            </Link>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
