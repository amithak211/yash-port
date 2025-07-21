import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded shadow p-6" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project One</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Built with React and Tailwind. A simple responsive UI layout.
            </p>
            <div className="flex gap-4">
              <a
                href="https://lakshmanstall.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </a>
              
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded shadow p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project Two</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              API integration with AOS animation, responsive design, and custom theming.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/your-username/project-two"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
