import React, { useState, useEffect, useContext } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const sections = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight - 100) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (id, label) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={closeMenu}
      className={`text-base transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 ${
        activeSection === id
          ? "text-blue-600 dark:text-blue-400 font-semibold"
          : "text-gray-800 dark:text-gray-200"
      }`}
    >
      {label}
    </a>
  );

  const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <button
        onClick={toggleTheme}
        className="ml-4 px-4 py-1 text-sm border rounded dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 inset-x-0 z-20 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Shafayet
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((id) => navLink(id, id.charAt(0).toUpperCase() + id.slice(1)))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-800 dark:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden flex flex-col items-center space-y-4 pb-4 text-gray-800 dark:text-white overflow-hidden"
            >
              {sections.map((id) => navLink(id, id.charAt(0).toUpperCase() + id.slice(1)))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
