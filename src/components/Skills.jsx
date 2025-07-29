import React, { useRef } from 'react';
import { FaReact, FaJava, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

// Child component for each skill card
function TiltSkillCard({ icon, name, delay }) {
  const cardRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="perspective"
      style={{ perspective: '1000px' }}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div
        ref={cardRef}
        className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-[0_0_20px_#facc15] dark:hover:shadow-[0_0_20px_#facc15] transition-all duration-300 transform"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease' }}
      >
        <div className="text-4xl">{icon}</div>
        <p className="text-gray-800 dark:text-yellow-300 font-medium">{name}</p>
      </div>
    </div>
  );
}

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
            <TiltSkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
