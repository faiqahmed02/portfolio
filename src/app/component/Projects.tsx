import React from 'react';
import { Project } from '../types/interfaces';

const projects: Project[] = [
  {
    title: "Origin",
    description: "Full-stack application with TypeScript, Next.js, PostgreSQL, Prisma, and Firebase authentication.",
    link: "#",
  },
  {
    title: "BuiltList",
    description: "React and Firebase-based app with cloud functions for automated response generation.",
    link: "#",
  },
  {
    title: "FX1",
    description: "Frontend for a blockchain project ensuring mobile and desktop responsiveness.",
    link: "#",
  },
  {
    title: "Expense Calculator",
    description: "Created a complete application featuring a dashboard (Next.js) and mobile app (React Native).",
    link: "#"
  },
  {
    title: "Art Distributors App",
    description:"Developed a versatile dashboard and mobile app to support art distribution",
    link:"#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-700">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-primary mb-4">{project.title}</h3>
              <p className="text-lg text-gray-500 mb-4">{project.description}</p>
              <a href={project.link} className="text-primary text-lg font-medium inline-block mt-4 hover:underline">
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
