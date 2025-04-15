// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className="py-4 sticky top-0 z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-end items-center  ${styles.navitem}`}>
          <div className="space-x-6">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
