"use client"

import { motion } from "framer-motion"
import { Code2, Briefcase, Terminal, Wrench, Languages } from "lucide-react"

const skillCategories = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React", "Next.js", "Tailwind CSS", "Responsive design"], icon: Code2 },
  { title: "Backend & APIs", skills: ["Node.js", "TypeScript", "MongoDB", "REST APIs", "Postman"], icon: Terminal },
  { title: "Python", skills: ["Scripting & automation", "Pillow", "ImageIO", "FFmpeg", "Command-line tools"], icon: Code2 },
  { title: "Product & Delivery", skills: ["Agile", "User research", "Roadmapping", "Stakeholder management", "Asana", "Team leadership"], icon: Briefcase },
  { title: "Tools", skills: ["Git & GitHub", "GitHub Pages", "Render", "Vercel", "Figma", "Microsoft Excel", "AI-assisted development"], icon: Wrench },
  { title: "Languages & Learning", skills: ["Hausa (native)", "English (fluent)", "Arabic (basic)", "Learning Rust"], icon: Languages },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Skills & Expertise</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">A practical mix of engineering, creative problem-solving, and product delivery.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, skills, icon: Icon }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.08 }} viewport={{ once: true }} className="skills-card rounded-xl border border-[#a8a29e] bg-[#d6d3d1] p-6 text-[#292524] transition hover:border-primary/70">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/15 text-primary"><Icon size={23} /></div>
              <h3 className="mb-4 text-xl font-semibold">{title}</h3>
              <ul className="flex flex-wrap gap-2">{skills.map((skill) => <li key={skill} className="skills-tag rounded-full border border-[#a8a29e] bg-[#e7e5e4] px-3 py-1 text-sm text-[#292524]">{skill}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
