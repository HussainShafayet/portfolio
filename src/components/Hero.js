// src/components/Hero.jsx
import style from '../assets/styles/components/Hero.module.css';
import profileImg from '../assets/images/self.jpg'; // Your profile image
import resumePDF from '../assets/resume/shafayet_s_Resume.pdf'; // Path to your resume
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => (
  <section id="hero" className={`h-screen flex items-center justify-center px-4 py-10 ${style.heroSection}`}>
    <div className={`${style.heroContainer}`}>
      <motion.div
        className={style.heroImageWrapper}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        <img src={profileImg} alt="Shafayet Hussain" className={style.heroImage} />
      </motion.div>

      <motion.div className={style.heroContent} initial="hidden" animate="visible">
        <motion.h2 variants={fadeInUp} custom={0.3} className={style.heroSubHeader}>
          Hi, I'm
        </motion.h2>
        <motion.h1 variants={fadeInUp} custom={0.4} className={style.heroHeader}>
          Shafayet Hussain
        </motion.h1>
        <motion.p variants={fadeInUp} custom={0.5} className={style.heroTagline}>
          JavaScript Developer & Web App Specialist
        </motion.p>
        <motion.p variants={fadeInUp} custom={0.6} className={style.heroText}>
          I craft dynamic, scalable web applications with clean code and seamless user experiences. With 3+ years of hands-on experience using React, Next.js, and Ember.js, I build performance-optimized tools that solve real problems.
          <br /><br />
          From HR systems to e-commerce platforms, I focus on modular architecture, real-time features, and user-first design.
          <br /><br />
          <span className={style.highlight}>Let’s build something exceptional.</span>
        </motion.p>

        <motion.a
          variants={fadeInUp}
          custom={0.8}
          href={resumePDF}
          download="Shafayet_Hussain_Resume.pdf"
          className={style.resumeButton}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
