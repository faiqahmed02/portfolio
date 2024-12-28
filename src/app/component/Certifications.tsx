import React from 'react';

const certifications: string[] = [
  "The Complete Full-Stack JavaScript Course – Udemy",
  "Become a WordPress Developer – Udemy",
  "Product Management + Agile Requirements – Product Backlog",
  "Google Cloud Platform Fundamentals",
  "Frontend Developer (React) – HackerRank",
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-700">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <p className="text-lg text-secondary font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
