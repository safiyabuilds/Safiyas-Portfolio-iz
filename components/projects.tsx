"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

const projects = [
  { number: "01", category: "Health tech · Team lead", title: "MediKey", description: "A patient-owned health record MVP where identity is a cryptographic key pair and records are signed, encrypted Nostr events distributed across relays.", tags: ["Bitcoin", "Nostr", "Health records"], live: "https://medikey-azure.vercel.app/", code: "https://github.com/medikey/medikey", style: "bg-[#e8e9e2]" },
  { number: "02", category: "Creative coding · Python", title: "Birth Flower", description: "A personalized birthday greeting generator that draws 720 animation frames with Pillow and encodes them into an MP4 with ImageIO and FFmpeg.", tags: ["Python", "Pillow", "FFmpeg"], code: "https://github.com/Morhsophie", style: "bg-[#eee5dc]" },
  { number: "03", category: "Web development · React", title: "Sophias Nexa", description: "A marketing website for a digital agency offering web design, software, and growth services, built and deployed with React.", tags: ["React", "Web design", "Deployment"], style: "bg-[#e8e5ed]" },
  { number: "04", category: "Backend · Tech4Youth", title: "Tech4Youth Capstone", description: "A backend application built with Node.js and TypeScript on MongoDB, deployed on Render, with endpoints tested in Postman.", tags: ["Node.js", "TypeScript", "MongoDB"], style: "bg-[#e3e9e5]" },
  { number: "05", category: "Frontend · Responsive design", title: "NOVA Studio", description: "A multi-section creative studio website with mobile navigation that works across phones, tablets, and desktop screens.", tags: ["HTML", "CSS", "JavaScript"], style: "bg-[#ece8df]" },
  { number: "06", category: "Frontend · JavaScript", title: "Student Card Generator", description: "A form-driven app that turns a student's name, school, and course into a styled digital card using vanilla JavaScript and DOM manipulation.", tags: ["HTML", "CSS", "JavaScript"], style: "bg-[#e3e8ed]" },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">A few things I&apos;ve made</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">My work, one door<br className="hidden sm:block" /> per skill.</h2></div>
          <p className="max-w-sm text-muted-foreground">From thoughtful interfaces to backend systems and playful experiments, here&apos;s where ideas became real.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index % 2 * 0.08 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className={`${project.style} relative flex min-h-48 items-center justify-between overflow-hidden px-7 py-8 sm:min-h-56 sm:px-10`}>
                <span className="absolute -right-4 -top-16 select-none font-mono text-[11rem] font-semibold leading-none text-foreground/[0.06] transition-transform duration-500 group-hover:scale-110">{project.number}</span>
                <div className="relative z-10"><span className="rounded-full border border-foreground/15 bg-white/40 px-3 py-1 text-xs font-medium text-foreground/70">{project.category}</span><h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{project.title}</h3></div>
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background"><ArrowUpRight size={20} /></div>
              </div>
              <div className="p-6 sm:p-8"><p className="leading-relaxed text-muted-foreground">{project.description}</p><ul className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}</ul>{(project.live || project.code) && <div className="mt-6 flex gap-5 border-t border-border pt-4">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><ExternalLink size={15} />Live project</a>}{project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><Github size={15} />Code</a>}</div>}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
