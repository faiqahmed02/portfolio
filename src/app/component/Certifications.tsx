import React from "react";

const certifications: string[] = [
  "The Complete Full-Stack JavaScript Course – Udemy",
  "Become a WordPress Developer – Udemy",
  "Product Management + Agile Requirements – Product Backlog",
  "Google Cloud Platform Fundamentals",
  "Frontend Developer (React) – HackerRank",
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide drop-shadow-lg">
          Certifications
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-4
                         transform transition duration-300 hover:scale-105 hover:shadow-2xl
                         animate-fadeIn"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <svg
                className="w-8 h-8 text-indigo-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg font-semibold text-gray-800">{cert}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Add a simple fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% {opacity: 0; transform: translateY(10px);}
            100% {opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation-name: fadeIn;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
            opacity: 0;
          }
        `}
      </style>
    </section>
  );
};

export default Certifications;
