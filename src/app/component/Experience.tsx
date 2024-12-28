import React from "react";
import { ExperienceItem } from "../types/interfaces";


const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "TA Solutions",
    duration: "Aug 2024 - Present",
    type: "Remote",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Created responsive UIs using React and integrated Firebase for secure user authentication.",
      "Developed and maintained backend systems with Next.js, Node.js, and PostgreSQL using Prisma for schema management.",
      "Integrated AI-driven solutions with Gemini AI to enhance user experience and data-driven responses.",
      "Managed codebase using GitHub, following strict versioning and type-safe practices with TypeScript.",
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
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFKBb4JX7A_Kg/company-logo_200_200/company-logo_200_200/0/1687244204766/tasolutionsinc_logo?e=1743638400&v=beta&t=goqafsvCdVFUTE2TprNgrNt6Ar3NLA6y6POrkSVbOZ8",
  },
  {
    role: "Senior Software Developer",
    company: "Creative Code Solution",
    duration: "Mar 2023 - Aug 2024 · 1 yr 6 months",
    type: "On-site",
    location: "Karachi Division, Sindh, Pakistan",
    responsibilities: [
      "Developed and maintained web and mobile applications using ReactJS, React Native, and Firebase.",
      "Ensured optimal performance and responsiveness of applications.",
      "Oversaw server maintenance and deployment, with experience in AWS.",
      "Collaborated with the development team to define and implement effective solutions.",
      "Conducted cross-platform mobile application testing to ensure high-quality user experiences.",
      "Maintained and updated company websites, ensuring functionality and performance.",
      "Provided technical guidance and mentorship to junior developers.",
    ],
    skills: [
      "Problem Solving",
      "Team Management",
      "Software Design",
      "E-Commerce",
      "Code Review",
      "Front-End Design",
      "Technology Trends",
      "Technical Documentation",
      "Internet Design",
      "Software Industry",
      "React Native",
      "Expo",
      "expo cli",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHfrcMneP5vdQ/company-logo_200_200/company-logo_200_200/0/1702648296678?e=1743638400&v=beta&t=UfK2Cjn-dFdCuohdXU3GMA4E4l7SIGQT9B813pR8mig",
  },
  {
    role: "Full-stack Developer",
    company: "Madcom Digital",
    duration: "Apr 2021 - Feb 2023 · 1 yr 11 months",
    type: "On-site",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Built and optimized scalable web applications using React and Next.js, resulting in a 30% improvement in load times.",
      "Increased data accuracy by integrating RESTful APIs across multiple projects, reducing data errors and enhancing reliability.",
      "Facilitated cross-functional collaboration that improved project delivery timelines by 15%.",
    ],
    skills: [
      "Git",
      "Web Applications",
      "TypeScript",
      "Web Development",
      "Node.js",
      "Express.js",
      "JavaScript Frameworks",
      "MongoDB",
      "HTML5",
      "Redux.js",
      "Next.js",
      "Front-End Development",
      "Client Side",
      "REST APIs",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEMPPnpMXUyGQ/company-logo_200_200/company-logo_200_200/0/1719256584939/madcomdigital_logo?e=1743638400&v=beta&t=N9vyn8FsVx7XW7rTPmuyJ5p3Tyo19cV9RizR_WAhIpU",
  },
  {
    role: "Wordpress Developer",
    company: "Erly Stage Studios",
    duration: "Jun 2020 - Mar 2021 · 10 months",
    type: "",
    location: "",
    responsibilities: [
      "Developed custom WordPress themes and plugins, achieving a 20% increase in client website performance.",
      "Worked directly with stakeholders to define project requirements, leading to 100% on-time delivery of all projects within this role.",
    ],
    skills: [
      "Web Applications",
      "TypeScript",
      "JavaScript Frameworks",
      "MongoDB",
      "HTML5",
      "Front-End Development",
      "Client Side",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHxr_4wrqhAnQ/company-logo_200_200/company-logo_200_200/0/1658927978001/erly_stage_studios_logo?e=1743638400&v=beta&t=geNCYy9oQoE4D8Ao-9jkbM9KP-bSBPPyLYd_8Gx_e-U",
  },
  {
    role: "Jr. Web Developer",
    company: "Mount Pixels",
    duration: "Jan 2020 - Jun 2020 · 6 months",
    type: "On-site",
    location: "Karāchi, Sindh, Pakistan",
    responsibilities: [
      "Developed responsive and consistent front-end code that improved user engagement metrics by 15%.",
      "Collaborated with designers to maintain visual consistency across projects and enhance the overall user interface.",
    ],
    skills: ["HTML5", "Front-End Development", "Client Side"],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGGEHzlB6szmg/company-logo_200_200/company-logo_200_200/0/1630541928044/mountpixels_logo?e=1743638400&v=beta&t=Qp-uzNX7adLRFc9gEXzKvljVJShgiGYeXYDTFTgnXtY",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="mb-12 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Logo */}
            {exp.logo && (
              <div className="flex items-center mb-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  {/* Role and Company */}
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
              </div>
            )}

            {/* Duration */}
            <p className="text-gray-500 text-sm italic">{exp.duration}</p>

            {/* Type and Location */}
            <p className="text-gray-500 text-sm mt-2">
              {exp.type && <span>{exp.type}</span>}
              {exp.location && exp.type ? (
                <span> · {exp.location}</span>
              ) : (
                exp.location
              )}
            </p>

            {/* Responsibilities */}
            {exp.responsibilities.length > 0 && (
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
            {exp.skills && exp.skills.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-700">Skills:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
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
