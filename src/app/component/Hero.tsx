import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-600 text-center py-20">
      <h1 className="text-4xl font-bold">Faiq Ahmed</h1>
      <p className="text-lg mt-2">Software Engineer | React | TypeScript | Node.js</p>
      <div className="mt-4">
        <a href="mailto:faiqahmed73@hotmail.com" className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-secondary">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;