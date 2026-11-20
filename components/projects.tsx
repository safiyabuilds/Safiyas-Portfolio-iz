"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "ArtifyPro",
    description:
      "AI-powered creative tool helping artists and designers streamline their creative process. Managed the product roadmap and coordinated cross-functional teams.",
    tags: ["Product Management", "Web Development", "AI Integration"],
    link: "#",
    github: "#",
  },
  {
    title: "MediKey",
    description:
      "Health-focused web application that helps users manage their medical information securely. Built during Hack4Freedom Hackathon.",
    tags: ["Healthcare", "Web App", "React"],
    link: "https://medikey-azure.vercel.app/",
    github: "https://github.com/medikey/medikey",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio showcasing projects and experience. Built with Next.js and Tailwind CSS with smooth animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Product Analytics Dashboard",
    description:
      "Dashboard for tracking user engagement and product metrics. Helped stakeholders make data-driven decisions.",
    tags: ["Analytics", "Dashboard", "Data Visualization"],
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of impactful projects combining product strategy and technical execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur transition duration-500 rounded-xl"></div>

              <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>

                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
