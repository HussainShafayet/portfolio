// src/App.jsx
import React from 'react';
import {About, Contact, Hero, Navbar, Projects, ResearchPapers, Skills} from './components';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      <Hero id='hero' />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default App;
