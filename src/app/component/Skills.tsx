import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 border-t-4 border-primary">
            <h3 className="font-semibold text-2xl mb-4 text-primary">Frontend</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>React.js</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>React Native</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>HTML, CSS, JavaScript</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>TypeScript, Next.js</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Redux, Material UI</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Tailwind CSS, Bootstrap, SCSS</span>
              </li>
            </ul>
          </div>
          {/* Backend */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 border-t-4 border-primary">
            <h3 className="font-semibold text-2xl mb-4 text-primary">Backend</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Node.js</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Firebase</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>RESTful APIs</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>AWS (EC2, Route 53)</span>
              </li>
            </ul>
          </div>
          {/* Tools & Libraries */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 border-t-4 border-primary">
            <h3 className="font-semibold text-2xl mb-4 text-primary">Tools & Libraries</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Git, JIRA</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Agile</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>lodash, moment, Axios</span>
              </li>
              <li className="flex items-center space-x-2 text-black">
                <span className="text-accent">•</span>
                <span>Linear</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
