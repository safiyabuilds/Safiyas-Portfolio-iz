"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Project Manager",
    company: "Sara Foundation - ArtifyPro",
    period: "2024 - Present",
    description:
      "Led cross-functional team to design and build an AI-powered creative tool. Managed product roadmap, coordinated with stakeholders, and ensured timely delivery of features.",
    achievements: ["Shipped 3 major features", "Team coordination", "Stakeholder management"],
  },
  {
    title: "Project Lead",
    company: "Hack4Freedom Hackathon - Team MediKey",
    period: "2024",
    description:
      "Oversaw product strategy and user research for a health-focused web app. Conducted user interviews and validated product-market fit.",
    achievements: ["Hackathon finalist", "User research", "Product validation"],
  },
  {
    title: "Web Development Intern",
    company: "Toggle Africa",
    period: "2023 - 2024",
    description:
      "Learning responsive web design, APIs, and collaboration tools. Built several web projects and contributed to client deliverables.",
    achievements: ["Responsive design", "API integration", "Team collaboration"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-card/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey and key accomplishments</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-background/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <ChevronRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                    {exp.title}
                  </h3>
                  <p className="text-secondary font-medium mt-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="flex gap-2 flex-wrap">
                {exp.achievements.map((achievement) => (
                  <span key={achievement} className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
