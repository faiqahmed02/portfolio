import React from "react";
import {ExperienceItem} from "../types/interfaces";
import Image from "next/image";

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "za:media",
    duration: "Nov 2024 – Present · Part-time",
    type: "Hybrid",
    location: "Mannheim, Germany",
    responsibilities: [
      "Led QA testing efforts to ensure application stability and performance.",
      "Provided technical solutions and improvements to enhance system functionality.",
      "Managed a small remote developer team and coordinated development cycles.",
    ],
    skills: [
      "Full-Stack Development",
      "QA Testing",
      "Project Management",
      "Team Leadership",
      "Technical Problem Solving",
    ],
    logo: "https://zamedia.de/wp-content/uploads/2024/02/zamedia-logo.png", // Replace with actual logo URL
  },
  {
    role: "Software Engineer",
    company: "TA Solutions",
    duration: "Aug 2024 - Dec 2024 · 5 months",
    type: "On-site",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Created responsive UIs using React and integrated Firebase for secure user authentication.",
      "Developed and maintained backend systems with Next.js, Node.js, and PostgreSQL using Prisma.",
      "Integrated AI-driven solutions with Gemini AI to enhance UX.",
      "Managed codebase using GitHub, with TypeScript and strict versioning practices.",
    ],
    skills: [
      "TypeScript",
      "Google Gemini",
      "Next.js",
      "Prisma ORM",
      "Firebase",
      "Code Review",
      "Debugging",
    ],
    logo: "https://tasolutions.io/wp-content/uploads/2022/11/Logo.png",
  },
  {
    role: "Sr. Full-stack Developer",
    company: "Creative Code Solution",
    duration: "Mar 2023 - Aug 2024 · 1 yr 6 months",
    type: "On-site",
    location: "Karachi Division, Sindh, Pakistan",
    responsibilities: [
      "Developed and maintained web and mobile apps using ReactJS, React Native, and Firebase.",
      "Oversaw server maintenance and deployment in AWS.",
      "Mentored junior developers and led project planning sessions.",
    ],
    skills: [
      "Problem Solving",
      "Team Management",
      "React Native",
      "Expo",
      "Software Design",
      "E-Commerce",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHfrcMneP5vdQ/company-logo_200_200/company-logo_200_200/0/1702648296678?e=1755734400&v=beta&t=6_rJeVchZ3lJ0wKbDxk__LafiEzvm23Ul4EiK5E-0_o",
  },
  {
    role: "Full-stack Developer",
    company: "Madcom Digital",
    duration: "Apr 2021 - Feb 2023 · 1 yr 11 months",
    type: "On-site",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Built and optimized scalable web applications using React and Next.js.",
      "Integrated REST APIs and improved project delivery timelines.",
    ],
    skills: [
      "Git",
      "Web Applications",
      "Node.js",
      "Next.js",
      "MongoDB",
      "REST APIs",
    ],
    logo: "https://madcomdigital.com/assets/images/AreebDigital.png",
  },
  {
    role: "WordPress Developer",
    company: "Erly Stage Studios",
    duration: "Jun 2020 - Mar 2021 · 10 months",
    type: "Remote",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Developed custom WordPress themes and plugins.",
      "Worked with stakeholders to ensure timely delivery and project success.",
    ],
    skills: [
      "WordPress",
      "TypeScript",
      "Manual QA Testing",
      "HTML5",
      "Front-End Development",
    ],
    logo: "https://www.erlystagestudios.com/image/logo.png",
  },
  {
    role: "Jr. Web Developer",
    company: "Mount Pixels",
    duration: "Jan 2020 - Jun 2020 · 6 months",
    type: "On-site",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Developed responsive front-end code using HTML5 and CSS3.",
      "Collaborated with designers to maintain UI consistency across projects.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "UI Collaboration",
      "Responsive Design",
      "Web Development",
      "WordPress",
    ],
    logo: "https://mountpixels.com/wp-content/uploads/2024/06/Asset-3-300x58-1.png",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">
          Experience
        </h2>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="mb-12 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Logo & Company Info */}
            {exp.logo && (
              <div className="flex items-center mb-4">
                <Image
                  width={64}
                  height={64}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
              </div>
            )}

            {/* Duration, Type & Location */}
            <p className="text-gray-500 text-sm italic">{exp.duration}</p>
            <p className="text-gray-500 text-sm mt-1">
              {[exp.type, exp.location].filter(Boolean).join(" · ")}
            </p>

            {/* Responsibilities */}
            {exp.responsibilities?.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-medium text-gray-700">
                  Responsibilities:
                </h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {exp?.skills?.length && exp.skills.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-700">Skills:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {exp?.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
