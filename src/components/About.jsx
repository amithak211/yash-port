import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      data-aos="fade-right"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-yellow-300">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-yellow-300 leading-relaxed">
          Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Basavaraj KL</span>,
          a passionate React developer from Karnataka with a focus on creating engaging, responsive,
          and accessible websites. I enjoy solving problems with clean code and beautiful UI design.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-yellow-300 leading-relaxed">
          I have hands-on experience with <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and
          <strong> Java</strong>. I'm currently exploring backend technologies and building real-world
          projects like a portfolio and general store website.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-yellow-300 leading-relaxed">
          When I'm not coding, you can find me sketching, exploring nature, or learning something new online.
        </p>
      </div>
    </section>
  );
}
