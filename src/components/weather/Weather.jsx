import React, { useEffect, useState } from "react";
import IcaoMenu from "./IcaoMenu";
import "./Weather.css";

const Weather = () => {
  const [metar, setMetar] = useState();
  const [taf, setTaf] = useState();

  useEffect(() => {

    Promise.all([
      fetch('https://my-flyer-api.onrender.com/metars/licb'),
      fetch('https://my-flyer-api.onrender.com/tafs/licb'),
    ])
      .then(([metarResponse, tafResponse]) =>
        Promise.all([metarResponse.text(), tafResponse.text()])
      )
      .then(([metarData, tafData]) => {
        setMetar(metarData);
        setTaf(tafData);
      });
  }, []);

  const updateWeather = (icao) => {
    console.log(icao);
    // GET request using fetch with error handling
    Promise.all([
      fetch('https://my-flyer-api.onrender.com/metars/'.concat(icao)),
      fetch('https://my-flyer-api.onrender.com/tafs/'.concat(icao)),
    ])
      .then(([metarResponse, tafResponse]) =>
        Promise.all([metarResponse.text(), tafResponse.text()])
      )
      .then(([metarData, tafData]) => {
        setMetar(metarData);
        setTaf(tafData);
      });
  };

  return (
    <section id="weather">
      <h5>
        Better to be on the ground wishing you were in the air than in the air
        wishing you were on the ground
      </h5>
      <h2>Weather</h2>
      <IcaoMenu updateWeather = {updateWeather}/>
      
      <div className="container weather_container">
        <div className="metar">
          <h3>Metar</h3>
          <div className="weather_content">
            <article className="weather_details">
              <div>
                <h4>{metar}</h4>
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
                <h4>{taf}</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF TAF */}
      </div>
    </section>
  );
};

export default Weather;
