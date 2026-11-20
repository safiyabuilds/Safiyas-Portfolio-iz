"use client"

import { motion } from "framer-motion"
import {
  Aperture,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Flower2,
  Github,
  IdCard,
  ShieldCheck,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react"

type PortfolioProject = {
  number: string
  category: string
  title: string
  description: string
  tags: string[]
  logo: LucideIcon
  logoImage?: string
  brandColor?: string
  live?: string
  code?: string
  style: string
}

const projects: PortfolioProject[] = [
  {
    number: "01",
    category: "Agritech · Project Manager",
    title: "GraintoX",
    description: "Leading a 25-person team building an agritech platform that connects smallholder farmers to markets and financing.",
    tags: ["Project management", "Agritech", "1,800+ farmers"],
    logo: Sprout,
    logoImage: "https://graintox.com/favicon.png",
    brandColor: "#2f7f3f",
    live: "https://graintox.com",
    style: "bg-[#f0f5ef]",
  },
  {
    number: "02",
    category: "Health tech · Team lead",
    title: "MediKey",
    description: "A patient-owned health record MVP where identity is a cryptographic key pair and records are signed, encrypted Nostr events distributed across relays.",
    tags: ["Bitcoin", "Nostr", "Health records"],
    logo: ShieldCheck,
    logoImage: "https://medikey-azure.vercel.app/medikey-logo.png",
    brandColor: "#d2691e",
    live: "https://medikey-azure.vercel.app/",
    code: "https://github.com/medikey/medikey",
    style: "bg-[#fbf2e9]",
  },
  {
    number: "03",
    category: "Creative coding · Python",
    title: "Birth Flower",
    description: "A personalized birthday greeting generator that draws 720 animation frames with Pillow and encodes them into an MP4 with ImageIO and FFmpeg.",
    tags: ["Python", "Pillow", "FFmpeg"],
    logo: Flower2,
    code: "https://github.com/Morhsophie",
    style: "bg-[#eee5dc]",
  },
  {
    number: "04",
    category: "Web development · React",
    title: "Sophias Nexa",
    description: "A marketing website for a digital agency offering web design, software, and growth services, built and deployed with React.",
    tags: ["React", "Web design", "Deployment"],
    logo: Sparkles,
    style: "bg-[#e8e5ed]",
  },
  {
    number: "05",
    category: "Backend · Tech4Youth",
    title: "Tech4Youth Capstone",
    description: "A backend application built with Node.js and TypeScript on MongoDB, deployed on Render, with endpoints tested in Postman.",
    tags: ["Node.js", "TypeScript", "MongoDB"],
    logo: Code2,
    style: "bg-[#e3e9e5]",
  },
  {
    number: "06",
    category: "Frontend · Responsive design",
    title: "NOVA Studio",
    description: "A multi-section creative studio website with mobile navigation that works across phones, tablets, and desktop screens.",
    tags: ["HTML", "CSS", "JavaScript"],
    logo: Aperture,
    style: "bg-[#ece8df]",
  },
  {
    number: "07",
    category: "Frontend · JavaScript",
    title: "Student Card Generator",
    description: "A form-driven app that turns a student's name, school, and course into a styled digital card using vanilla JavaScript and DOM manipulation.",
    tags: ["HTML", "CSS", "JavaScript"],
    logo: IdCard,
    style: "bg-[#e3e8ed]",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">A few projects I&apos;ve helped build</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">My work, one door<br className="hidden sm:block" /> per skill.</h2></div>
          <p className="max-w-sm text-muted-foreground">From thoughtful interfaces to backend systems and playful experiments, here&apos;s where ideas became real.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Logo = project.logo

            return (
              <motion.article key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: (index % 2) * 0.08 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div
                  className={`${project.style} relative flex min-h-48 items-center justify-between gap-4 overflow-hidden px-6 py-8 sm:min-h-56 sm:px-8`}
                  style={project.brandColor ? { backgroundImage: `linear-gradient(135deg, ${project.brandColor}14, transparent 72%)` } : undefined}
                >
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-8 z-0 flex w-3/5 items-center justify-center opacity-[0.16] transition-transform duration-500 group-hover:scale-105">
                    {project.logoImage ? <img src={project.logoImage} alt="" className="size-40 object-contain mix-blend-multiply sm:size-52" /> : <Logo className="size-40 text-foreground/80 sm:size-52" strokeWidth={1.05} />}
                  </div>
                  <div className="relative z-10 flex min-w-0 flex-1 flex-col items-start gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/45">{project.number}</span>
                      <span className="inline-flex rounded-full border border-foreground/15 bg-white/45 px-3 py-1 text-xs font-medium text-foreground/70">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{project.title}</h3>
                  </div>
                  <div className="relative z-20 flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background"><ArrowUpRight size={20} /></div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}</ul>
                  {(project.live || project.code) && <div className="mt-6 flex gap-5 border-t border-border pt-4">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><ExternalLink size={15} />Live project</a>}{project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><Github size={15} />Code</a>}</div>}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
