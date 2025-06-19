import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Code,
  FileCode,
  GitBranch,
  LayoutDashboard,
  Network,
  Wrench,
  Zap,
  Braces,
  Paintbrush,
} from 'lucide-react';

const categories = {
  All: [
    { name: 'JavaScript', icon: <Zap size={20} /> },
    { name: 'React', icon: <Atom size={20} /> },
    { name: 'Next.js', icon: <LayoutDashboard size={20} /> },
    { name: 'HTML/CSS', icon: <Code size={20} /> },
    { name: 'Tailwind CSS', icon: <Paintbrush size={20} /> },
    { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
    { name: 'REST API', icon: <Network size={20} /> },
    { name: 'Django', icon: <Braces size={20} /> },
    { name: 'Python', icon: <FileCode size={20} /> },
    { name: 'Build Tools', icon: <Wrench size={20} /> },
  ],
  Frontend: [
    { name: 'JavaScript', icon: <Zap size={20} /> },
    { name: 'React', icon: <Atom size={20} /> },
    { name: 'Next.js', icon: <LayoutDashboard size={20} /> },
    { name: 'Tailwind CSS', icon: <Paintbrush size={20} /> },
    { name: 'HTML/CSS', icon: <Code size={20} /> },
  ],
  Backend: [
    { name: 'Python', icon: <FileCode size={20} /> },
    { name: 'Django', icon: <Braces size={20} /> },
    { name: 'REST API', icon: <Network size={20} /> },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
    { name: 'Build Tools', icon: <Wrench size={20} /> },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium border text-sm transition ${
                activeCategory === category
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {categories[activeCategory].map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-md dark:shadow-black/30 p-4 rounded-xl hover:shadow-lg dark:hover:shadow-blue-900 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
