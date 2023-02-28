import React from "react";
import "./Nav.css";
import { BiHome, BiInfoCircle, BiMessageAltDetail } from "react-icons/bi";
import { TiWeatherCloudy } from "react-icons/ti";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiInfoCircle />
      </a>
      <a
        href="#weather"
        onClick={() => setActiveNav("#weather")}
        className={activeNav === "#weather" ? "active" : ""}
      >
        <TiWeatherCloudy />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
