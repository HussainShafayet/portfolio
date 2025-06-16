// src/components/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Atom,
  Zap,
  Wrench,
  GitBranch,
  Database,
  Server,
  Settings,
  Globe,
} from 'lucide-react';


const categories = {
  All: [
    { name: 'JavaScript', icon: <Zap size={20} /> },
  { name: 'React', icon: <Atom size={20} /> },
  { name: 'Next.js', icon: <Server size={20} /> },
  { name: 'HTML/CSS', icon: <Code size={20} /> },
  { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
  { name: 'REST API', icon: <Settings size={20} /> },
  { name: 'Node.js', icon: <Database size={20} /> },
  { name: 'Build Tools', icon: <Wrench size={20} /> },
  ],
  Frontend: [
    { name: 'JavaScript', icon: <Zap size={20} /> },
    { name: 'React', icon: <Atom size={20} /> },
    { name: 'Next.js', icon: <Server size={20} /> },
    { name: 'HTML/CSS', icon: <Code size={20} /> },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
  { name: 'REST API', icon: <Settings size={20} /> },
  { name: 'Node.js', icon: <Database size={20} /> },
  { name: 'Build Tools', icon: <Wrench size={20} /> }
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium border ${
                activeCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
              className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-600 mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-800">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
