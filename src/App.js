// src/App.jsx
import React from "react";
import {
  About,
  Contact,
  FadeInSection,
  Footer,
  Hero,
  Navbar,
  Projects,
  ScrollToTop,
  Skills,
} from "./components";
import ScrollToHash from "./components/ScrollToHash";

const App = () => {
  return (
    <div className="min-h-screen md:container md:mx-auto bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <ScrollToHash />
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

      <ScrollToTop />
    </div>
  );
};

export default App;
