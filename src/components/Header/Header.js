// @ts-nocheck
import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navigation">
        <img src={logo} alt="" />
        <div>
          <a href="/home">Home</a>
          <a href="/orders">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="/about us">About </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
