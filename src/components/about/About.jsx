import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import { TiPlaneOutline } from "react-icons/ti";
import { MdOutlineNavigation, MdOutlineHeadsetMic } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>All about us</h5>
      <h2>About MyFlyer</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TiPlaneOutline className="about_icon" />
              <h5>Aviate</h5>
              <small>Fly first</small>
            </article>

            <article className="about_card">
              <MdOutlineNavigation className="about_icon" />
              <h5>Navigate</h5>
              <small>Be Aware</small>
            </article>

            <article className="about_card">
              <MdOutlineHeadsetMic className="about_icon" />
              <h5>Communicate</h5>
              <small>ATC is your friend</small>
            </article>
          </div>

          <p>
            MyFlyer is an innovative website designed to provide pilots with
            comprehensive information and resources they need to fly with
            confidence. As a one-stop-shop for aviation enthusiasts, the
            platform offers an extensive range of features, including real-time
            weather updates, aviation news, airport information, and flight
            planning tools. With MyFlyer, pilots can easily access current
            weather conditions, view radar imagery, and analyze METARs and TAFs
            for their departure and destination airports. This website also
            provides detailed airport information such as runway details,
            parking and fuel availability, as well as any relevant NOTAMs or
            restrictions. The platform's flight planning tools are equally
            impressive, allowing pilots to calculate their flight's optimal
            route, fuel consumption, and more. Additionally, MyFlyer also
            provides information about nearby aviation events and seminars, so
            pilots can stay up to date with the latest industry trends and
            developments. Overall, MyFlyer is an indispensable resource for
            pilots seeking accurate and up-to-date information for their
            flights. Its user-friendly interface and robust feature set make it
            an essential tool for aviation professionals and enthusiasts alike.
          </p>

          <a href="#contact" className="btn btn-primary">
            Radio Check
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
