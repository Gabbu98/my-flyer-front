import React from 'react'
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials
