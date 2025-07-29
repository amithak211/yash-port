import React, { useRef } from 'react';

function TiltCard({ title, description, link, delay }) {
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
      className="perspective group"
      style={{ perspective: '1000px' }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        ref={cardRef}
        className="bg-white dark:bg-gray-700 rounded-lg shadow-md transition-all duration-300 transform p-6 hover:shadow-[0_0_20px_#facc15] dark:hover:shadow-[0_0_20px_#facc15]"
        style={{
          transition: 'transform 0.2s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-yellow-300">{title}</h3>
        <p className="text-gray-700 dark:text-yellow-300 mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-yellow-300 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard
            title="Project One"
            description="Built with React and Tailwind. A simple responsive UI layout."
            link="https://lakshmanstall.vercel.app"
            delay="0"
          />
          <TiltCard
            title="Project Two"
            description="API integration with AOS animation, responsive design, and custom theming."
            link="https://github.com/your-username/project-two"
            delay="200"
          />
        </div>
      </div>
    </section>
  );
}
