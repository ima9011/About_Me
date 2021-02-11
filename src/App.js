// import React, { Component } from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import Skillsection from "./sections/Skillsection";
import "./App.css";
import { Link, Element } from "react-scroll";



function App() {
  return (
    <div>
      <div class="navbar">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <a href="#About">About</a>
        </Link>

        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <a href="#Skills">Skills</a>
        </Link>
       
      </div>
      <TitlesAndIcons />
      <Element name="about" className="element" />
      <AboutSection />
      <Element name="Skills" className="element" />
      <Skillsection />
    </div>
  );
}

export default App;
