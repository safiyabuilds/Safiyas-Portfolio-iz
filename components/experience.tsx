"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const chapters = [
  {
    number: "01",
    period: "2023 to 2024",
    title: "Web Development Intern",
    company: "Toggle Africa",
    location: "Nigeria",
    description: "Built web projects and contributed to client deliverables while growing my skills in responsive design, API integration, and Git-based collaboration.",
    impact: "Responsive web · API integration",
    disciplines: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    number: "02",
    period: "Apr 2023 to Apr 2024",
    title: "Event Coordinator",
    company: "Teen Girls in Blockchain",
    location: "Zaria, Nigeria",
    description: "Led technology outreach for around 100 secondary school girls and awarded internships across software development, cybersecurity, and project management.",
    impact: "Around 100 students reached",
    disciplines: ["Education", "Blockchain", "Community"],
  },
  {
    number: "03",
    period: "Dec 2024 to Present",
    title: "Project Manager",
    company: "GraintoX Technologies Limited",
    location: "Katsina, Nigeria",
    description: "Leading a 25-person team building an agritech platform that connects smallholder farmers to markets and financing.",
    impact: "1,800+ farmers · 178+ transactions",
    disciplines: ["Agritech", "Product", "Team leadership"],
  },
  {
    number: "04",
    period: "2025",
    title: "Team Lead, MediKey",
    company: "Hack4Freedom",
    location: "Kaduna, Nigeria",
    description: "Took a four-person team from problem definition to a working MVP for patient-owned health records, using cryptographic identity and encrypted Nostr events.",
    impact: "Patient-owned health records MVP",
    disciplines: ["Bitcoin", "Nostr", "Health tech"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">The path so far</p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">Let&apos;s go back<br className="hidden sm:block" /> in time.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">From building for the web to leading teams and community projects, each chapter has shaped how I make useful things with people.</p>
        </div>
        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-8 left-[1.1rem] top-8 w-px bg-border sm:left-[2.1rem]" />
          <div className="space-y-3">
            {chapters.map((chapter, index) => (
              <motion.article key={chapter.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.07 }} viewport={{ once: true }} className="relative grid gap-5 rounded-2xl border border-border/80 bg-card/75 p-5 sm:grid-cols-[4.5rem_1fr] sm:gap-7 sm:p-7 lg:grid-cols-[5rem_0.72fr_1.28fr] lg:items-start lg:gap-8 lg:p-8">
                <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-border bg-background font-mono text-xs text-primary sm:size-11">{chapter.number}</div>
                <div className="lg:pt-1">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.13em] text-muted-foreground">{chapter.period}</p>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{chapter.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{chapter.company} · {chapter.location}</p>
                </div>
                <div className="sm:col-start-2 lg:col-start-3 lg:pt-1">
                  <p className="max-w-2xl leading-relaxed text-muted-foreground">{chapter.description}</p>
                  <p className="mt-4 text-sm font-medium">{chapter.impact}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${chapter.title} focus areas`}>
                    {chapter.disciplines.map((discipline) => <li key={discipline} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{discipline}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <a href="#projects" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">See selected projects <ArrowUpRight size={15} /></a>
      </div>
    </section>
  )
}
