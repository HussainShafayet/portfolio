import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const sections = ['about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 80) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      onClick={closeMenu}
      className={`hover:text-blue-500 transition ${
        activeSection === id ? 'text-blue-600 font-semibold' : ''
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="py-4 sticky top-0 z-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Shafayet</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLink('about', 'About')}
            {navLink('skills', 'Skills')}
            {navLink('projects', 'Projects')}
            {navLink('contact', 'Contact')}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden flex flex-col space-y-4 mt-4 text-center overflow-hidden"
            >
              {navLink('about', 'About')}
              {navLink('skills', 'Skills')}
              {navLink('projects', 'Projects')}
              {navLink('contact', 'Contact')}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
