import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header-class">
        <div class="main-class">
          <div class="sub-main">
            <div class="logo-class">Logo</div>
            <ul class="ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/boys">Boys</Link>
              </li>
              <li>
                <Link to="/girls">Girls</Link>
              </li>
              <li>
                <Link to="/mens">Mens</Link>
              </li>
              <li>
                <Link to="/womens">Womens</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
