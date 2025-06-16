
import style from '../assets/styles/components/Hero.module.css';
import profileImg from '../assets/images/self.jpg'; // Update with your image path

const Hero = () => (
  <section id="hero" className={`h-screen flex items-center justify-center px-4 py-10 ${style.heroSection}`}>
    <div className={`${style.heroContainer}`}>
      <div className={style.heroImageWrapper}>
        <img src={profileImg} alt="Shafayet Hussain" className={style.heroImage} />
      </div>

      <div className={style.heroContent}>
        <h2 className={`${style.heroSubHeader} ${style.fadeInModern} ${style.fadeDelay1}`}>Hi, I'm</h2>
        <h1 className={`${style.heroHeader} ${style.fadeInModern} ${style.fadeDelay2}`}>Shafayet Hussain</h1>
        <p className={`${style.heroTagline} ${style.fadeInModern} ${style.fadeDelay3}`}>
          JavaScript Developer & Web App Specialist
        </p>
        <p className={`${style.heroText} ${style.fadeInModern} ${style.fadeDelay4}`}>
          I craft dynamic, scalable web applications with clean code and seamless user experiences. With 3+ years of
          hands-on experience using React, Next.js, and Ember.js, I build performance-optimized tools that solve real problems.
          <br /><br />
          From HR systems to e-commerce platforms, I focus on modular architecture, real-time features, and user-first design.
          <br /><br />
          <span className={style.highlight}>Let’s build something exceptional.</span>
        </p>
      </div>
    </div>
  </section>
);

export default Hero;



  