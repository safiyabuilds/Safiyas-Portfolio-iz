"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const chapters = [
  {
    number: "01",
    year: "2024",
    period: "Dec 2024 to Present",
    title: "Project Manager",
    company: "GraintoX Technologies Limited",
    location: "Katsina, Nigeria",
    description: "Leading a 25-person team building an agritech platform that connects smallholder farmers to markets and financing.",
    impact: "1,800+ registered farmers · 178+ transactions",
    disciplines: ["Agritech", "Product", "Team leadership"],
  },
  {
    number: "02",
    year: "2025",
    period: "2025",
    title: "Team Lead, MediKey",
    company: "Hack4Freedom",
    location: "Kaduna, Nigeria",
    description: "Took a four-person team from problem definition to a working MVP for patient-owned health records, using cryptographic identity and encrypted Nostr events.",
    impact: "Patient-owned health records MVP",
    disciplines: ["Bitcoin", "Nostr", "Health tech"],
  },
  {
    number: "03",
    year: "2023",
    period: "Apr 2023 to Apr 2024",
    title: "Event Coordinator",
    company: "Teen Girls in Blockchain",
    location: "Zaria, Nigeria",
    description: "Led technology outreach for around 100 secondary school girls and awarded internships across software development, cybersecurity, and project management.",
    impact: "Around 100 students reached",
    disciplines: ["Education", "Blockchain", "Community"],
  },
  {
    number: "04",
    year: "2023",
    period: "2023 to 2024",
    title: "Web Development Intern",
    company: "Toggle Africa",
    location: "Nigeria",
    description: "Built web projects and contributed to client deliverables while growing my skills in responsive design, API integration, and Git-based collaboration.",
    impact: "Responsive web · API integration",
    disciplines: ["HTML", "CSS", "JavaScript", "Git"],
  },
]

export default function Experience() {
  const [activeChapter, setActiveChapter] = useState(0)
  const active = chapters[activeChapter]

  useEffect(() => {
    const entries = Array.from(document.querySelectorAll<HTMLElement>("[data-story-index]"))
    if (!entries.length) return

    let frame = 0
    const updateActiveChapter = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.36
        const current = entries.find((entry) => {
          const bounds = entry.getBoundingClientRect()
          return bounds.top <= marker && bounds.bottom >= marker
        }) ?? entries.reduce((closest, entry) => {
          const bounds = entry.getBoundingClientRect()
          const closestBounds = closest.getBoundingClientRect()
          const distance = Math.abs((bounds.top + bounds.bottom) / 2 - marker)
          const closestDistance = Math.abs((closestBounds.top + closestBounds.bottom) / 2 - marker)
          return distance < closestDistance ? entry : closest
        })

        setActiveChapter(Number(current.getAttribute("data-story-index")))
      })
    }

    window.addEventListener("scroll", updateActiveChapter, { passive: true })
    window.addEventListener("resize", updateActiveChapter)
    updateActiveChapter()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateActiveChapter)
      window.removeEventListener("resize", updateActiveChapter)
    }
  }, [])

  return (
    <section id="experience" className="border-t border-border px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">My story</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Let&apos;s go back<br className="hidden sm:block" /> in time.</h2>

          <div role="img" aria-label={`Timeline clock: ${active.period}`} className="relative mx-auto mt-8 aspect-square w-full max-w-[25rem] overflow-hidden rounded-full">
            <div aria-hidden="true" className="absolute inset-0 rounded-full border border-border/60" />
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full border border-border/60" />
            <div aria-hidden="true" className="absolute inset-[18%] rounded-full border border-border/60" />
            <div aria-hidden="true" className="absolute inset-[29%] rounded-full border border-border/60" />
            <div aria-hidden="true" className="absolute inset-0 rounded-full opacity-35" style={{ backgroundImage: "repeating-conic-gradient(from 0deg, rgba(67, 58, 47, 0.2) 0deg 0.3deg, transparent 0.3deg 6deg)" }} />
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full opacity-25" style={{ backgroundImage: "repeating-conic-gradient(from 0deg, rgba(67, 58, 47, 0.18) 0deg 0.4deg, transparent 0.4deg 12deg)" }} />
            <div aria-hidden="true" className="absolute inset-0 motion-safe:animate-[spin_60s_linear_infinite] motion-reduce:animate-none">
              <span className="absolute left-1/2 top-[7%] h-[43%] w-px -translate-x-1/2 bg-primary/60" />
            </div>
            <motion.div key={`${active.year}-${active.number}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0 flex items-center justify-center font-semibold leading-none tracking-[-0.09em] text-foreground [font-size:clamp(4.5rem,11vw,8rem)]" aria-hidden="true">
              {active.year}
            </motion.div>
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_6px_rgba(116,146,103,0.18)]" />
          </div>

          <div className="mx-auto mt-2 flex max-w-[25rem] items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span>{active.period}</span>
            <span className="shrink-0 font-mono text-foreground">{active.number} / {String(chapters.length).padStart(2, "0")}</span>
          </div>
          <div aria-hidden="true" className="mx-auto mt-3 h-px max-w-[25rem] bg-border">
            <motion.div className="h-full bg-primary" animate={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }} transition={{ duration: 0.35 }} />
          </div>
        </div>

        <div className="relative pl-7 sm:pl-10">
          <div aria-hidden="true" className="absolute bottom-8 left-[5px] top-5 w-px bg-border sm:left-[7px]" />
          <div className="flex flex-col gap-10 sm:gap-14">
            {chapters.map((chapter, index) => (
              <motion.article key={chapter.number} data-story-index={index} initial={{ y: 18 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true, amount: 0.2 }} className={`relative transition-opacity duration-300 ${activeChapter === index ? "opacity-100" : "opacity-55"}`}>
                <span aria-hidden="true" className={`absolute -left-[2.15rem] top-1.5 size-3 rounded-full border-2 border-background sm:-left-[2.4rem] ${activeChapter === index ? "bg-primary shadow-[0_0_0_5px_rgba(116,146,103,0.18)]" : "bg-muted-foreground/50"}`} />
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{chapter.period}</p>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{chapter.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{chapter.company} · {chapter.location}</p>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{chapter.description}</p>
                <p className="mt-4 text-sm font-medium">{chapter.impact}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${chapter.title} focus areas`}>
                  {chapter.disciplines.map((discipline) => <li key={discipline} className="experience-discipline-tag rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{discipline}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <a href="#projects" className="mx-auto mt-10 inline-flex max-w-6xl items-center gap-2 text-sm font-medium text-primary hover:underline">See selected projects <ArrowUpRight size={15} /></a>
    </section>
  )
}
