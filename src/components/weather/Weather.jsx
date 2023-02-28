import React from "react";
import "./Weather.css";

const weather = () => {
  return (
    <section id="weather">
      <h5>
        Better to be on the ground wishing you were in the air than in the air
        wishing you were on the ground
      </h5>
      <h2>Weather</h2>
      <div className="container weather_container">
        <div className="metar">
          <h3>Metar</h3>
          <div className="weather_content">
            <article className="weather_details">
              <div>
                <h4>LMML 271715Z VRB01KT CAVOK 15/12 Q1012 NOSIG</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF METAR */}
        <div className="taf">
          <h3>Taf</h3>
          <div className="weather_content">
            <article className="weather_details">
              <div>
                <h4>
                  TAF LMML 271700Z 2718/2818 24005KT CAVOK PROB30 2718/2807 8000
                </h4>
                <small className="text-light">BECMG 2721/2724 15010KT</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF TAF */}
      </div>
    </section>
  );
};

export default weather;
