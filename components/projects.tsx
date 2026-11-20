"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({})

  return (
    <section id="projects" className="border-t border-border px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">A few things I&apos;ve helped build</p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">My work, one door<br className="hidden sm:block" /> per project.</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">Choose a door to step inside each project and see the work behind it.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Logo = project.logo
            const isOpen = Boolean(openProjects[project.number])
            const detailsId = `project-details-${project.number}`

            return (
              <motion.article key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (index % 3) * 0.06 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative [perspective:1100px]">
                  <div className={`${project.style} relative h-64 overflow-hidden sm:h-72`}>
                    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-[0.13]">
                      {project.logoImage ? <img src={project.logoImage} alt="" className="size-40 object-contain mix-blend-multiply sm:size-48" /> : <Logo className="size-40 text-foreground sm:size-48" strokeWidth={0.9} />}
                    </div>
                    <div aria-hidden="true" className="absolute inset-3 border border-foreground/15" />
                  </div>

                  <motion.button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                    aria-label={`${isOpen ? "Close" : "Open"} the ${project.title} project door`}
                    onClick={() => setOpenProjects((current) => ({ ...current, [project.number]: !current[project.number] }))}
                    animate={{ rotateY: isOpen ? -62 : 0 }}
                    whileHover={{ scale: isOpen ? 1 : 1.01 }}
                    transition={{ type: "spring", stiffness: 95, damping: 16 }}
                    style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
                    className={`${project.style} absolute inset-0 flex flex-col justify-between border-y border-r border-border px-6 py-6 text-left shadow-[inset_10px_0_0_rgba(0,0,0,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary`}
                  >
                    <span aria-hidden="true" className="absolute inset-3 border border-foreground/15" />
                    <span className="relative z-10 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                      <span>{project.number}</span>
                      <span className="size-2 rounded-full bg-foreground/25" />
                    </span>
                    <span className="relative z-10">
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/55">{project.category}</span>
                      <span className="block text-3xl font-semibold tracking-[-0.05em] text-foreground">{project.title}</span>
                    </span>
                    <span className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      {isOpen ? "Close the door" : "Open project"}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className="absolute right-5 top-1/2 size-3 -translate-y-1/2 rounded-full border border-foreground/35 bg-foreground/10 shadow-sm" />
                  </motion.button>
                </div>

                <motion.div id={detailsId} aria-hidden={!isOpen} inert={!isOpen} initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                  <div className="border-t border-border p-5 sm:p-6">
                    <p className="leading-relaxed text-muted-foreground">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies and focus`}>
                      {project.tags.map((tag) => <li key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}
                    </ul>
                    {(project.live || project.code) && <div className="mt-6 flex flex-wrap gap-5 border-t border-border pt-4">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><ExternalLink size={15} aria-hidden="true" />Live project</a>}{project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><Github size={15} aria-hidden="true" />Code</a>}</div>}
                  </div>
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
