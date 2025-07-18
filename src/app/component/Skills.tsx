import React, { useEffect, useState } from "react";

const Skills: React.FC = () => {
  // Optional: simple fade-in on scroll effect
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const top = document.getElementById("skills")?.getBoundingClientRect().top || 0;
      if (top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const accentColor = "#111827";

  // Icon for bullet points (checkmark)
  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-gray-400 flex-shrink-0"
      fill="none"
      stroke={accentColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );

  const categories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "TypeScript",
        "SCSS",
        "Redux Toolkit",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Firebase",
        "PHP",
        "PostgreSQL",
        "MySQL",
        "Prisma ORM",
      ],
    },
    {
      title: "CMS / E-Commerce",
      skills: ["WordPress", "Craft CMS", "Shopify", "Shopware"],
    },
    {
      title: "Other Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS (basic)",
        "CI/CD",
        "Agile/Scrum",
        "Socket.IO",
        "GraphQL (basic)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 bg-gray-50 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Skills Section"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-wide"
          style={{ borderBottom: `4px solid ${accentColor}`, paddingBottom: 8, maxWidth: 180, margin: "0 auto" }}
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {categories.map(({ title, skills }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4"
              style={{ borderTopColor: accentColor }}
              tabIndex={0}
              aria-labelledby={`${title.toLowerCase()}-title`}
            >
              <h3
                id={`${title.toLowerCase()}-title`}
                className="text-2xl font-semibold mb-6"
                style={{ color: accentColor }}
              >
                {title}
              </h3>
              <ul className="space-y-4 text-gray-700">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-3 border-b border-gray-200 last:border-b-0 pb-2"
                  >
                    <CheckIcon />
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
