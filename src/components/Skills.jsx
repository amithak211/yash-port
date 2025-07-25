import React from 'react';
import { FaReact, FaJava, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Java', icon: <FaJava className="text-orange-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-yellow-300">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-gray-800 dark:text-yellow-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
