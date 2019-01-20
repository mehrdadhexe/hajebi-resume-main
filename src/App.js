import React, { Component } from 'react';
import logo from './logo.svg';
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import NavigationSection from "./components/NavigationSection";

import SnowStorm from 'react-snowstorm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <SnowStorm followMouse={true} snowColor ='#3498db'/>
      
      <NavigationSection />
      <TitlesSection />
      <AboutSection />
      <SkillSection />
      
    </div>
    );
  }
}

export default App;
