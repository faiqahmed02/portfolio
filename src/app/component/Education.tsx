import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Education
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-xl mx-auto hover:shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            ILMA University, Karachi
          </h3>
          <p className="text-lg text-gray-700">BS in Software Engineering</p>
          <p className="text-sm text-gray-500">2016 – 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
