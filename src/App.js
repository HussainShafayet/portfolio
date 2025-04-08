// src/App.jsx
import React from 'react';
import {About, Contact, Hero, Navbar, Projects, Skills} from './components';
const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <Navbar />
      <Hero id='hero' />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
};

export default App;
