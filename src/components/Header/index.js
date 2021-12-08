import React from "react";
import virus from "../../assets/images/virus.png";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1>COVID 19 APP</h1>
        <img src={virus} alt="covid19" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
