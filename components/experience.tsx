"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const experiences = [
  { title: "Project Manager", company: "GraintoX Technologies Limited · Katsina", period: "Dec 2024 – Present", description: "Lead a 25-person team planning and delivering a platform that connects smallholder farmers to markets and financing.", achievements: ["1,800+ registered farmers", "178+ completed transactions", "Partners: NITDA, AFAN & DBN"] },
  { title: "Team Lead · MediKey", company: "Hack4Freedom · Kaduna", period: "2025", description: "Led a four-person team from problem definition to a working MVP for patient-owned health records, using cryptographic identity and signed, encrypted Nostr events across relays.", achievements: ["Team leadership", "Bitcoin & Nostr", "Health-tech MVP"] },
  { title: "Web Development Intern", company: "Toggle Africa", period: "2023 – 2024", description: "Practised responsive web design, API integration, and Git-based collaboration; built web projects and contributed to client deliverables.", achievements: ["Responsive web design", "API integration", "Git collaboration"] },
  { title: "Event Coordinator", company: "Teen Girls in Blockchain (TGIB) · Zaria", period: "Apr 2023 – Apr 2024", description: "Led technology outreach for around 100 secondary school girls and awarded internships in software development, cybersecurity, and project management.", achievements: ["~100 girls reached", "Tech outreach", "Internship awards"] },
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/30 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground">Building products, leading teams, and creating opportunities.</p>
        </motion.div>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.article key={exp.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.08 }} viewport={{ once: true }} className="rounded-xl border border-border p-6 transition hover:border-primary/50 hover:bg-background/50">
              <div className="mb-4"><h3 className="flex items-center gap-2 text-xl font-semibold"><ChevronRight size={20} className="text-primary" />{exp.title}</h3><p className="mt-1 font-medium text-secondary">{exp.company}</p><p className="text-sm text-muted-foreground">{exp.period}</p></div>
              <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>
              <ul className="flex flex-wrap gap-2">{exp.achievements.map((item) => <li key={item} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">{item}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
