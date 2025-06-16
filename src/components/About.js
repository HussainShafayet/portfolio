import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, BookOpen } from 'lucide-react';
import styles from '../assets/styles/components/About.module.css';

const timelineData = [
  {
    year: '2023 - Present',
    title: 'Senior Frontend Developer',
    company: 'Awesome Tech Co.',
    description:
      'Leading frontend teams, architecting scalable React & Next.js apps, mentoring juniors.',
    icon: <Briefcase size={24} />,
    type: 'work',
  },
  {
    year: '2020 - 2023',
    title: 'Frontend Developer',
    company: 'Innovative Web Solutions',
    description:
      'Built and maintained dynamic web applications with React and Ember.js.',
    icon: <Briefcase size={24} />,
    type: 'work',
  },
  {
    year: '2017 - 2020',
    title: 'BSc in Computer Science',
    company: 'State University',
    description: 'Graduated with honors, focusing on web development & software engineering.',
    icon: <BookOpen size={24} />,
    type: 'education',
  },
];

const About = () => {
  const { scrollYProgress } = useScroll({
    target: document.getElementById('timeline'),
    offset: ['start end', 'end start'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div
        className={styles.innerWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.story}>
            I’m Shafayet Hussain, a passionate JavaScript developer who loves crafting
            scalable, performant web apps. My specialty is React, Next.js, and Ember.js —
            transforming complex ideas into intuitive user experiences.
          </p>
          <p className={styles.story}>
            Beyond code, I enjoy hiking and photography — bringing creativity to every
            aspect of my life.
          </p>
          <p className={styles.highlight}>
            Core Skills: <strong>JavaScript, React, Next.js, Ember.js, CSS Modules, REST APIs</strong>
          </p>
        </div>

        <div className={styles.rightColumn} id="timeline">
          <h3 className={styles.timelineTitle}>Experience & Education</h3>
          <div className={styles.timeline}>
            <motion.div className={styles.timelineProgress} style={{ scaleY }} />
            {timelineData.map(({ year, title, company, description, icon, type }, idx) => (
              <motion.div
                key={idx}
                className={`${styles.timelineItem} ${styles[type]}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(43,108,176,0.25)' }}
              >
                <div className={styles.timelineIcon}>{icon}</div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{year}</span>
                  <h4 className={styles.timelinePosition}>{title}</h4>
                  <h5 className={styles.timelineCompany}>{company}</h5>
                  <p className={styles.timelineDesc}>{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
