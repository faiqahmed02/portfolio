import React from 'react';
import { Project } from '../types/interfaces';

const projects: Project[] = [
  {
    title: "Origin",
    description: "Full-stack application built with TypeScript, Next.js, PostgreSQL, Prisma, and Firebase Authentication. Provides a modular, scalable architecture.",
    link: "#",
  },
  {
    title: "BuiltList",
    description: "A productivity tool using React and Firebase Cloud Functions for real-time updates and AI-powered responses.",
    link: "#",
  },
  {
    title: "FX1",
    description: "Frontend interface for a blockchain platform optimized for mobile and desktop with secure Web3 integrations.",
    link: "#",
  },
  {
    title: "Expense Calculator",
    description: "Cross-platform app for tracking expenses, built with Next.js (dashboard) and React Native (mobile), integrated with Firebase.",
    link: "#"
  },
  {
    title: "Art Distributors App",
    description: "Developed dashboard and mobile components for managing artwork distribution and inventory seamlessly.",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
