//import style from '../assets/styles/components/Hero.module.css'


//// src/components/Hero.jsx
//const Hero = () => (
//    <section id="hero" className="h-screen flex items-center justify-center p-4">
//      <div className="container flex flex-col justify-start">
//        <h2 className={`${style.heroSubHeader}`}>Hi, I'm</h2>
//        <h1 className={`${style.heroHeader}`}>Shafayet Hussain</h1>
//        <small>JavaScript Developer & Web App Specialist</small>
//        <p className={`${style.heroText}`}>I craft dynamic, scalable web applications with clean code and seamless user experiences. With 3+ years of hands-on experience using React, Next.js, and Ember.js, I build performance-optimized tools that solve real problems. From HR systems to e-commerce platforms, I focus on modular architecture, real-time features, and user-first design.
//        <br></br>
//        <br></br>
//        Let’s build something exceptional.</p>
//      </div>
//    </section>
//  );
  
//  export default Hero;

// src/components/Hero.jsx
// src/components/Hero.jsx
import style from '../assets/styles/components/Hero.module.css';

const Hero = () => (
  <section id="hero" className={`h-screen flex items-center justify-center px-4 py-10 ${style.heroSection}`}>
    <div className={`max-w-3xl text-center md:text-left`}>
      <h2 className={`${style.heroSubHeader} ${style.fadeInModern} ${style.fadeDelay1}`}>Hi, I'm</h2>
      <h1 className={`${style.heroHeader} ${style.fadeInModern} ${style.fadeDelay2}`}>Shafayet Hussain</h1>
      <p className={`${style.heroTagline} ${style.fadeInModern} ${style.fadeDelay3}`}>JavaScript Developer & Web App Specialist</p>
      <p className={`${style.heroText} ${style.fadeInModern} ${style.fadeDelay4}`}>
        I craft dynamic, scalable web applications with clean code and seamless user experiences. With 3+ years of hands-on experience using React, Next.js, and Ember.js, I build performance-optimized tools that solve real problems.
        <br /><br />
        From HR systems to e-commerce platforms, I focus on modular architecture, real-time features, and user-first design.
        <br /><br />
        <span className={style.highlight}>Let’s build something exceptional.</span>
      </p>
    </div>
  </section>
);

export default Hero;


  