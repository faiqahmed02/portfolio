import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2025 — Present",
    title: "Full-Stack Developer",
    company: "za:media GmbH",
    description:
      "Architecting full-stack solutions with React, Next.js, and Node.js. Optimized frontend performance by 30% and mentoring junior developers while improving code quality and delivery workflows.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    period: "2024 — 2024",
    title: "Software Engineer",
    company: "TA Solutions",
    description:
      "Developed high-performance UI components with React and TypeScript. Built scalable REST APIs and optimized PostgreSQL queries, reducing response times by 30%. Integrated cloud services supporting 10K+ concurrent users.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Cloud Functions"],
  },
  {
    period: "2023 — 2024",
    title: "Full-Stack Developer",
    company: "Creative Code Solution",
    description:
      "Built modular UI systems using React, Next.js, and React Native. Improved frontend load times by 50% using code splitting and lazy loading. Automated CI/CD with GitHub Actions, reducing deployment time by 60%.",
    technologies: ["React", "Next.js", "React Native", "TypeScript", "CI/CD"],
  },
  {
    period: "2021 — 2023",
    title: "Full-Stack Developer",
    company: "Madcom Digital",
    description:
      "Developed end-to-end web applications using React, Node.js, and MongoDB. Implemented secure authentication with Firebase & JWT and reduced manual deployment errors by 90% through CI/CD pipelines.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "JWT"],
  },
  {
    period: "2020 — 2021",
    title: "WordPress Developer",
    company: "Erly Stage Studios",
    description:
      "Developed and maintained WordPress applications, improving mobile responsiveness and boosting site traffic by 30%.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    period: "2020 — 2020",
    title: "Junior Web Developer",
    company: "Mount Pixels",
    description:
      "Worked on frontend features, bug fixes, and responsive UI development as an entry-level developer.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    period: "2018 — 2020",
    title: "IT Consultant",
    company: "WINTrio LLC",
    description:
      "Provided IT consulting, web maintenance, and system support for US-based clients.",
    technologies: ["Web Hosting", "Support", "Troubleshooting"],
  },
];


export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground text-lg text-balance">
            My professional journey building impactful software solutions
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
