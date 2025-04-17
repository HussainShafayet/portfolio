// src/App.jsx
import React from 'react';
import {About, Contact, Hero, Navbar, Projects, ResearchPapers, Skills} from './components';
const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      <Hero id='hero' />
      <About id="about" />
      <Skills id="skills" />
      <ResearchPapers />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
};

export default App;
