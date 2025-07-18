import React from "react";

const interests: string[] = [
  "Exploring emerging technologies and AI integration.",
  "Building web and mobile apps with modern frameworks.",
  "Participating in coding challenges to enhance problem-solving skills.",
  "Learning German for cross-cultural communication.",
  "Blending storytelling with technology for creative solutions.",
];

const Interest: React.FC = () => {
  const accentColor = "#111827";

  return (
    <section id="interests" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2
          className="text-4xl font-extrabold text-center mb-12"
          style={{ color: accentColor, borderBottom: `4px solid ${accentColor}`, paddingBottom: 8, maxWidth: 180, margin: "0 auto" }}
        >
          Interests
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{ borderTop: `4px solid ${accentColor}` }}
            >
              <p className="text-gray-800 text-lg leading-relaxed">{interest}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
