import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("navMenu");
  const [toggle, setToggle] = useState("toggle");

  const toogleHandle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

    // icon toogle
    toggle === "toggle" ? setToggle("toggle toggler") : setToggle("toggle");
  };

  return (
    <div className="navbar">
      <span className="brand">Miki Booking</span>
      <div className={active}>
        <button className="btn">Register</button>
        <button className="btn">Login</button>
      </div>
      <div onClick={toogleHandle} className={toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
