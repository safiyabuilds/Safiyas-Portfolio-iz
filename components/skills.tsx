"use client"

import { motion } from "framer-motion"
import { Code2, Briefcase, Palette, Users, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Project Management",
    skills: ["Strategic Planning", "Team Leadership", "Agile Methodology", "Stakeholder Management"],
    icon: Briefcase,
    color: "from-primary to-primary/60",
  },
  {
    title: "Product Development",
    skills: ["User Research", "Product Strategy", "Market Analysis", "Feature Prioritization"],
    icon: Zap,
    color: "from-secondary to-secondary/60",
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"],
    icon: Code2,
    color: "from-primary to-secondary",
  },
  {
    title: "UI/UX Collaboration",
    skills: ["Figma", "Design Systems", "User Testing", "Accessibility"],
    icon: Palette,
    color: "from-secondary to-primary",
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Creativity", "Adaptability"],
    icon: Users,
    color: "from-primary/80 to-secondary/80",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive skill set combining project management, product strategy, and modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl"
                  style={
                    {
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      "--tw-gradient-from": "rgb(147 112 219 / 0.2)",
                      "--tw-gradient-to": "rgb(34 211 238 / 0.2)",
                    } as any
                  }
                ></div>

                <div className="relative bg-card border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
