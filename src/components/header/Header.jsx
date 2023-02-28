import React from 'react';
import './Header.css';
import HeaderSocials from './HeaderSocials';
import videoBg from "../../assets/homeWallpaper.mp4";
const Header = () => {
  return (
    <header>
      <div className="main">
        {/* <div className="container header_container"> */}
          <div className="overlay">
            <video src={videoBg} autoPlay loop muted></video>
            <div className="title-content">
              <h5>Welcome to</h5>
              <h1>
                <div class="logo">
                  <span>My</span>
                  <span>Flyer</span>
                </div>
              </h1>
              <h5 className="text-light">
                The aviation tool to get you flying.
              </h5>
              <HeaderSocials />
{/* 
              <div>
                <img className="plane" src={PLANE} alt="plane" />
              </div> */}

              <a href="#contact" className="scroll_down">
                Scroll Down
              </a>
            </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header
