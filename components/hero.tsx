import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Faiq Ahmed</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-medium">Full-Stack Software Engineer</h2>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
            I craft scalable web applications that blend elegant user interfaces with robust backend systems.
            Specializing in React, Next.js, TypeScript, and Node.js to build digital experiences that users love.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com/faiqahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/faiqahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:faiqahmedabbasi1@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
