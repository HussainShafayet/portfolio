// src/components/Hero.jsx
import profileImg from '../assets/images/self.jpg';
import resumePDF from '../assets/resume/shafayet_s_Resume.pdf';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center pt-24 md:pt-32 px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12 text-center md:text-left">
        {/* Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex-1 flex justify-center"
        >
          <img
            src={profileImg}
            alt="Shafayet Hussain"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 max-w-xl"
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0.3}
            className="text-lg font-medium text-gray-600 dark:text-gray-400"
          >
            Hi, I'm
          </motion.h2>
          <motion.h1
            variants={fadeInUp}
            custom={0.4}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100"
          >
            Shafayet Hussain
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={0.5}
            className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-6"
          >
            JavaScript Developer & Web App Specialist
          </motion.p>
          <motion.p
            variants={fadeInUp}
            custom={0.6}
            className="text-base leading-relaxed text-gray-700 dark:text-gray-300"
          >
            I craft dynamic, scalable web applications with clean code and seamless user experiences. With 3+ years of hands-on experience using <strong>React, Next.js, and Ember.js</strong>, I build performance-optimized tools that solve real problems.
            <br /><br />
            From HR systems to e-commerce platforms, I focus on modular architecture, real-time features, and user-first design.
            <br /><br />
            <span className="font-semibold text-blue-600 dark:text-blue-400">Let’s build something exceptional.</span>
          </motion.p>

          <motion.a
            variants={fadeInUp}
            custom={0.8}
            href={resumePDF}
            download="Shafayet_Hussain_Resume.pdf"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform duration-200 hover:-translate-y-1 active:scale-95"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
