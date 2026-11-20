"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Trophy } from "lucide-react"

const credentials = [
  { title: "B.Sc. (Hons) Botany", organization: "Ahmadu Bello University, Zaria", description: "2019 – 2024", icon: GraduationCap },
  { title: "Google Project Management Professional Certificate", organization: "Coursera", description: "2022", icon: Award },
  { title: "Satoshi Sisters · Cohort 2", organization: "Capstone presentation · First place", description: "Bitcoin-backed microfinance · 2026", icon: Trophy },
  { title: "SheCluded · Cohort 7", organization: "Tech leadership & entrepreneurship", description: "Programme graduate", icon: Award },
  { title: "Tech4Youth", organization: "Web development training", description: "Frontend and backend: Node.js, TypeScript & MongoDB", icon: GraduationCap },
]

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-border bg-card/50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Education & Recognition</h2>
          <p className="text-muted-foreground">The learning and milestones that shape my work.</p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map(({ title, organization, description, icon: Icon }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }} className="rounded-xl border border-border bg-background p-6 transition hover:border-primary/50">
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon size={22} /></div>
              <h3 className="mb-1 text-lg font-semibold">{title}</h3>
              <p className="mb-2 text-sm font-medium text-secondary">{organization}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
