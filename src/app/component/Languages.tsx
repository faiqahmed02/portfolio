import React from 'react';

const languages = [
  { name: "English", proficiency: "C1" },
  { name: "German", proficiency: "A2 (Learning)" },
];

const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Languages
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-8">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-secondary mb-2">
                {lang.name}
              </h3>
              <p className="text-lg text-gray-600">
                Proficiency: <span className="text-blue-500">{lang.proficiency}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
