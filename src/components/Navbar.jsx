import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-yellow-300">Basavaraj KL</h1>
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-yellow-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDark} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <button onClick={toggleDark} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      )}
    </nav>
  );
}
