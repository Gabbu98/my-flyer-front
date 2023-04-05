import React from 'react'
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://facebook.com">
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials
