import React from 'react'
import videoBg from '../../assets/homeWallpaper.mp4'
import "./Home.css";
const Home = () => {
  return (
    <div className="main">
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
        </div>
      </div>
    </div>
  );
}

export default Home
