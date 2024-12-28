import React from 'react';

const interests: string[] = [
  "Exploring emerging technologies and AI integration.",
  "Building web and mobile apps with modern frameworks.",
  "Participating in coding challenges to enhance problem-solving skills.",
  "Learning German for cross-cultural communication.",
  "Blending storytelling with technology for creative solutions.",
];

const Interest: React.FC = () => {
  return (
    <section id="interests" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-amber-50 mb-12">
          Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <p className="text-secondary text-lg">{interest}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
