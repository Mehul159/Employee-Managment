import React from "react";
import Logo from "../../assets/logo-01.png";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Sparkleo Logo" />
        <p className="logo-text">Mehul</p>
      </div>
      <p>Employee Management</p>
    </div>
  );
};

export default Header;
