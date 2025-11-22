import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, Clock } from "lucide-react"

const certifications = {
  completed: [
    // HackerRank
  {
    title: "JavaScript (Basic) Certificate",
    issuer: "HackerRank",
    date: "Jan 2025",
    credentialId: "3bb27695ec7e",
    skills: ["JavaScript"],
  },
  {
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "Jan 2025",
    credentialId: "e7a09329c4af",
    skills: ["JavaScript", "Problem Solving"],
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Jun 2024",
    credentialId: "E4E0ACA16792",
    skills: ["React.js", "CSS", "Redux"],
  },

  // Udemy
  {
    title: "Linux Security Checkup: Quick Audit Essentials",
    issuer: "Udemy",
    date: "Jun 2024",
    credentialId: null,
    skills: ["Linux Security"],
  },
  {
    title: "Product Management + Agile Requirements Using Product Backlog",
    issuer: "Udemy",
    date: "Jun 2024",
    credentialId: null,
    skills: ["Backlog Management", "Agile Development", "Project Management"],
  },
  {
    title: "The Complete Full-Stack JavaScript Course",
    issuer: "Udemy",
    date: "Apr 2023",
    credentialId: "UC-939435c8-6a58-4890-b739-0846723a30d6",
    skills: [
      "React.js",
      "Express.js",
      "Node.js",
      "Design Patterns",
      "Agile Development",
      "JSX",
      "HTML5 Canvas",
      "Loopback",
    ],
  },

  // Coursera
  {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    issuer: "Coursera",
    date: "Sep 2019",
    credentialId: "KAPR5T3YEEXE",
    skills: ["Google Cloud Platform", "Server-Side Development"],
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "Jul 2019",
    credentialId: "WR2CDS7STA49",
    skills: ["Python", "Data Science"],
  },
  {
    title: "AI for Everyone",
    issuer: "Coursera",
    date: "Jun 2019",
    credentialId: "8RVHQ7AKEGXZ",
    skills: ["AI Basics", "Technology Strategy"],
  },
  ],
  ongoing: [
    {
        title: "The Complete Python Programming Course: Beginner to Advanced",
        issuer: "Udemy",
        instructors: ["Joseph Delgadillo", "Nick Germaine"],
        progress: 44,
        expectedCompletion: "2025",
        skills: ["Python", "OOP", "Scripting", "Backend Basics"],
      },
      {
        title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        issuer: "Udemy",
        instructors: [
          "Academind by Maximilian Schwarzmüller",
          "Maximilian Schwarzmüller",
        ],
        progress: 15,
        expectedCompletion: "2025",
        skills: ["Node.js", "REST APIs", "GraphQL", "Deno", "MVC Architecture"],
      },
  ],
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Certifications & Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Continuously expanding my expertise through professional certifications and advanced courses
          </p>
        </div>

        {/* Completed Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Completed Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.completed.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-pretty">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-4">ID: {cert.credentialId}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Clock className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Currently Pursuing</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.ongoing.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <span className="text-sm text-muted-foreground">ETA: {cert.expectedCompletion}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-pretty">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs font-semibold text-primary">{cert.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
