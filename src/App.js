// import React, { Component } from "react";
import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import Skillsection from './sections/Skillsection';

import "./App.css";

function App() {
  return (  
    <div className="App">
      <div className="navigation"></div>
      <TitlesAndIcons/>
      <AboutSection/>
      <Skillsection/>
    </div>
  );
}

export default App;
