"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react"

type RoleId = "web" | "management"

type Project = {
  number: string
  title: string
  category: string
  description: string
  tags: string[]
  video: string
  live?: string
  code?: string
}

const roles: {
  id: RoleId
  label: string
  plate: string
  eyebrow: string
  summary: string
  focus: string[]
  projectNumbers: string[]
}[] = [
  {
    id: "web",
    label: "Web Development",
    plate: "WEB DEVELOPER",
    eyebrow: "End to end, from sketch to live site",
    summary: "Thoughtful, responsive digital experiences—from the first interface sketch through implementation and launch.",
    focus: ["Discovery & planning", "UX and visual design", "Front-end and back-end development", "Technical SEO and performance", "Testing, launch and support"],
    projectNumbers: ["01", "02", "03", "04", "05"],
  },
  {
    id: "management",
    label: "Project Management",
    plate: "PROJECT MANAGER",
    eyebrow: "Clear direction, thoughtful delivery",
    summary: "Bringing people, priorities and delivery together to turn complex product ideas into useful outcomes.",
    focus: ["Product goals & roadmaps", "Cross-functional team leadership", "Sprint planning & delivery tracking", "Stakeholder coordination", "Launch, adoption & impact"],
    projectNumbers: ["07"],
  },
]

const projects: Project[] = [
  {
    number: "01",
    title: "Tech4Youth Capstone",
    category: "Backend · Tech4Youth",
    description: "A backend application built with Node.js and TypeScript on MongoDB, deployed on Render, with endpoints tested in Postman.",
    tags: ["Node.js", "TypeScript", "MongoDB", "Postman"],
    video: "/videos/tech4youth-demo.mp4",
    live: "https://safiyas-tech4youth-capstone-project.onrender.com",
    code: "https://github.com/safiyabuilds/Safiyas-Tech4Youth-Capstone-Project",
  },
  {
    number: "02",
    title: "Sophias Nexa",
    category: "Web development · React",
    description: "A marketing website for a digital agency offering web design, software, and growth services, built and deployed with React.",
    tags: ["React", "Web design", "Responsive UI"],
    video: "/videos/sophias-nexa-demo.mp4",
    live: "https://my-react-app-6bwf.onrender.com",
    code: "https://github.com/safiyabuilds/My-react-app",
  },
  {
    number: "03",
    title: "NOVA Studio",
    category: "Frontend · Responsive design",
    description: "A multi-section creative studio website with mobile navigation that works across phones, tablets, and desktop screens.",
    tags: ["HTML", "CSS", "JavaScript"],
    video: "/videos/nova-studio-demo.mp4",
    live: "https://sophia-s-nova-1.onrender.com",
    code: "https://github.com/safiyabuilds/Sophia-s-Nova",
  },
  {
    number: "04",
    title: "Student Card Generator",
    category: "Frontend · JavaScript",
    description: "A form-driven app that turns a student's name, school, and course into a styled digital card using vanilla JavaScript and DOM manipulation.",
    tags: ["HTML", "CSS", "JavaScript"],
    video: "/videos/student-card-demo.mp4",
    live: "https://safiyas-student-card-id-generator.onrender.com",
    code: "https://github.com/safiyabuilds/Safiyas-Student-Card-ID-Generator-",
  },
  {
    number: "05",
    title: "Birth Flower",
    category: "Creative coding · Python",
    description: "A personalized birthday greeting generator that draws 720 animation frames with Pillow and encodes them into an MP4 with ImageIO and FFmpeg.",
    tags: ["Python", "Pillow", "ImageIO", "FFmpeg"],
    video: "/videos/birth-flower-demo.mp4",
    live: "https://morhsophie.github.io/Birth-flower/",
    code: "https://github.com/safiyabuilds/Birth-flower",
  },
  {
    number: "07",
    title: "GraintoX",
    category: "Agritech · Team leadership",
    description: "Leading a 25-person team building an agritech platform that connects smallholder farmers to markets and financing, with more than 1,800 farmers registered.",
    tags: ["Project management", "Agritech", "25-person team", "1,800+ farmers"],
    video: "/videos/graintox-demo.mp4",
    live: "https://graintox.com",
  },
]

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const articleRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(articleRef, { amount: 0.35 })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isInView && !prefersReducedMotion) {
      void video.play().catch(() => undefined)
    } else {
      video.pause()
    }
  }, [isInView, prefersReducedMotion])

  return (
    <motion.article
      ref={articleRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`project-showcase sticky grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_24px_70px_rgba(30,24,20,0.08)] md:grid-cols-[1.15fr_0.85fr] ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`} style={{ top: `calc(5.5rem + ${index * 0.75}rem)` }}
    >
      <div className="project-showcase__media relative min-h-64 overflow-hidden bg-[#171918]">
        <video
          ref={videoRef}
          aria-label={`${project.title} short project demonstration`}
          autoPlay={Boolean(isInView && !prefersReducedMotion)}
          muted
          loop
          playsInline
          controls
          preload="none"
          className="absolute inset-0 size-full object-cover"
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
          Project {project.number}
        </span>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.19em] text-primary">{project.category}</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">{project.title}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} tools and focus`}>
          {project.tags.map((tag) => <li key={tag} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">{tag}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium transition hover:text-primary">View project <ArrowUpRight size={16} aria-hidden="true" /></a>}
          {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"><Github size={16} aria-hidden="true" />Source code</a>}
        </div>
      </div>
    </motion.article>
  )
}

export default function RolePortfolios() {
  const [previewRole, setPreviewRole] = useState<RoleId | null>(null)
  const [enteredRole, setEnteredRole] = useState<RoleId | null>(null)
  const [enteringRole, setEnteringRole] = useState<RoleId | null>(null)
  const returnToDoors = useRef(false)
  const visibleRole = previewRole ?? enteredRole

  useEffect(() => {
    if (!enteringRole) return
    const timeout = window.setTimeout(() => {
      setEnteredRole(enteringRole)
      setEnteringRole(null)
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700)
    return () => window.clearTimeout(timeout)
  }, [enteringRole])

  useEffect(() => {
    document.documentElement.classList.toggle("role-view-open", enteredRole !== null)
    return () => document.documentElement.classList.remove("role-view-open")
  }, [enteredRole])

  useEffect(() => {
    if (!enteredRole) {
      if (!returnToDoors.current) return
      returnToDoors.current = false
      const frame = window.requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("role-projects")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [enteredRole])

  const enterRole = (role: RoleId) => {
    if (enteringRole || enteredRole) return
    setPreviewRole(role)
    setEnteringRole(role)
  }

  return (
    <section id="projects" aria-labelledby="doors-heading" className="role-portfolios scroll-mt-20 px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {!enteredRole && <>
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Web · Product · Impact</p>
          <h2 id="doors-heading" className="text-4xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl">Magic happens behind the doors</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Choose a role to explore the work, craft and decisions behind it.</p>
        </div>

        <div className="role-doorway" onMouseLeave={() => setPreviewRole(enteredRole)}>
          {roles.map((role) => {
            const isActive = visibleRole === role.id
            const detailsId = `role-details-${role.id}`
            return (
              <article key={role.id} className={`role-door-card role-door-card--${role.id} ${isActive ? "is-active" : ""} ${enteringRole === role.id ? "is-entering" : ""}`}>
                <button
                  id={`role-${role.id}`}
                  type="button"
                  aria-label={`Enter ${role.label} portfolio`}
                  aria-expanded={isActive}
                  aria-controls={detailsId}
                  onPointerEnter={() => setPreviewRole(role.id)}
                  onFocus={() => setPreviewRole(role.id)}
                  onClick={() => enterRole(role.id)}
                  className={`role-door-button role-door-button--${role.id} group`}
                >
                  <span aria-hidden="true" className="role-door-frame">
                    <span className="role-door-surface" />
                    <span className="role-door-plate">{role.plate}</span>
                    <span className="role-door-handle"><span /></span>
                  </span>
                  <span className="role-door-enter"><span>Click to enter</span><ArrowUpRight size={15} aria-hidden="true" /></span>
                  <span className="sr-only">Explore {role.label} projects</span>
                </button>
                <div id={detailsId} aria-hidden={!isActive} className={`role-door-details ${isActive ? "is-visible" : ""}`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{role.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">{role.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {role.focus.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-snug"><Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
                  </ul>
                  <button type="button" onClick={() => enterRole(role.id)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-border underline-offset-4 transition hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    Enter {role.label}<ArrowDown size={15} aria-hidden="true" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Hover to preview · Select a door to enter</p>
        </>}

        {enteredRole && (() => {
          const role = roles.find((item) => item.id === enteredRole)!
          const roleProjects = projects.filter((project) => role.projectNumbers.includes(project.number))
          return (
            <motion.section
              id="role-projects"
              aria-labelledby="role-projects-heading"
              initial={{ opacity: 0, scale: 0.97, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="role-interior scroll-mt-20"
            >
              <div className="role-interior__wall">
                <div className="mb-12 max-w-5xl border-b border-border/70 pb-8 sm:mb-16 sm:pb-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work · {role.plate}</p>
                  <h3 id="role-projects-heading" className="text-5xl font-semibold tracking-[-0.065em] sm:text-7xl lg:text-[7rem] lg:leading-[0.95]">{role.label}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{role.summary}</p>
                </div>
                <div className="flex flex-col gap-8 sm:gap-12">
                  {roleProjects.map((project, index) => <ProjectShowcase key={`${enteredRole}-${project.number}`} project={project} index={index} />)}
                </div>
                <button type="button" onClick={() => { returnToDoors.current = true; setEnteredRole(null); setPreviewRole(null) }} className="role-interior__back fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-card-foreground shadow-lg transition hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:bottom-7 sm:left-7">
                  <ArrowLeft size={16} aria-hidden="true" /> Back to the doors
                </button>
              </div>
            </motion.section>
          )
        })()}
      </div>
    </section>
  )
}
