import React from "react";
import Home from "./components/home/Home";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from "./components/about/About";
import Weather from "./components/weather/Weather";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Header />
      <Nav />
      <About />
      <Weather />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
