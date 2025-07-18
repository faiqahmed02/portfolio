import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[white]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-black mb-12">
          Education
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-blue-700">
              ILMA University, Karachi
            </h3>
            <p className="text-lg text-gray-800 mt-1">
              Bachelor of Science in Software Engineering
            </p>
            <p className="text-sm text-gray-600 mt-1">2016 – 2020</p>
          </div>
          <div className="mt-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Completed a comprehensive 4-year undergraduate program covering core software
              engineering disciplines including programming, databases, algorithms, web technologies,
              software architecture, and IoT systems. Final year project focused on real-time fire and gas
              detection using IoT and MATLAB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
