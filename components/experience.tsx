"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  { number: "01", period: "Dec 2024 to Present", title: "Project Manager", company: "GraintoX Technologies Limited", location: "Katsina, Nigeria", description: "Leading a 25-person team building an agritech platform that connects smallholder farmers to markets and financing.", impact: "1,800+ farmers · 178+ transactions", partners: "NITDA · AFAN · Development Bank of Nigeria" },
  { number: "02", period: "2025", title: "Team Lead, MediKey", company: "Hack4Freedom", location: "Kaduna, Nigeria", description: "Took a four-person team from problem definition to a working MVP for patient-owned health records, using cryptographic identity and encrypted Nostr events.", impact: "Patient-owned health records MVP", partners: "Bitcoin · Nostr · Healthcare" },
  { number: "03", period: "Apr 2023 to Apr 2024", title: "Event Coordinator", company: "Teen Girls in Blockchain", location: "Zaria, Nigeria", description: "Led technology outreach for around 100 secondary school girls and awarded internships across software development, cybersecurity, and project management.", impact: "About 100 students reached", partners: "Education · Blockchain · Community" },
  { number: "04", period: "2023 to 2024", title: "Web Development Intern", company: "Toggle Africa", location: "Nigeria", description: "Built web projects and contributed to client deliverables while developing skills in responsive design, API integration, and Git-based collaboration.", impact: "Responsive web · API integration", partners: "HTML · CSS · JavaScript · Git" },
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">A little history</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">The work behind<br />the work.</h2></div>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:justify-self-end">A path through technology, team leadership, and community building. Each role taught me to make the next thing more useful.</p>
        </div>
        <div className="border-t border-border">
          {experiences.map((exp, index) => (
            <motion.article key={exp.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.07 }} viewport={{ once: true }} className="grid gap-5 border-b border-border py-7 md:grid-cols-[88px_1fr_1.2fr] md:gap-8 md:py-9">
              <div className="flex items-center justify-between md:block"><span className="font-mono text-sm text-primary">{exp.number}</span><span className="text-sm text-muted-foreground md:mt-3 md:block">{exp.period}</span></div>
              <div><h3 className="text-xl font-semibold">{exp.title}</h3><p className="mt-1 text-sm text-muted-foreground">{exp.company} · {exp.location}</p></div>
              <div><p className="leading-relaxed text-muted-foreground">{exp.description}</p><p className="mt-4 text-sm font-medium">{exp.impact}</p><p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{exp.partners}</p></div>
            </motion.article>
          ))}
        </div>
        <a href="#projects" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">See selected projects <ArrowUpRight size={15} /></a>
      </div>
    </section>
  )
}
