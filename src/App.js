// src/App.jsx
import React from "react";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

const App = () => {
  return (
    <div className="min-h-screen md:container md:mx-auto px-4">
      <Navbar />

      <main>
        <Hero id="hero" />

        <FadeInSection>
          <About id="about" />
        </FadeInSection>

        <FadeInSection direction="up" delay={0.2}>
          <Skills id="skills" />
        </FadeInSection>

        <FadeInSection direction="up" delay={0.2}>
          <Projects id="projects" />
        </FadeInSection>

        <FadeInSection direction="up" delay={0.2}>
          <Contact id="contact" />
        </FadeInSection>
      </main>

      <Footer />
    </div>
  );
};

export default App;
