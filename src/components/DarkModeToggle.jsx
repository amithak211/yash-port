import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
