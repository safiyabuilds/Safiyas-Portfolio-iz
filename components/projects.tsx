"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  { title: "MediKey", subtitle: "Patient-owned health records", description: "Led a four-person team to build a health-record MVP where patient identity is a cryptographic key pair and records are signed, encrypted Nostr events distributed across relays.", tags: ["Bitcoin", "Nostr", "Team lead"], live: "https://medikey-azure.vercel.app/", code: "https://github.com/medikey/medikey" },
  { title: "Sophias Nexa", subtitle: "Digital agency website", description: "Built and deployed a React marketing website for a digital agency offering web design, software, and growth services.", tags: ["React", "Marketing website", "Deployment"] },
  { title: "Birth Flower", subtitle: "Animated birthday greeting generator", description: "Created a personalized 24-second animation at 30 fps by drawing 720 frames with Pillow, then encoding the MP4 with ImageIO and FFmpeg. Includes a command-line option to personalize the name.", tags: ["Python", "Pillow", "ImageIO", "FFmpeg"], code: "https://github.com/Morhsophie" },
  { title: "Tech4Youth Capstone", subtitle: "Backend application", description: "Built a capstone backend with Node.js and TypeScript on MongoDB, deployed on Render, and tested API endpoints with Postman.", tags: ["Node.js", "TypeScript", "MongoDB", "Render"] },
  { title: "NOVA Studio", subtitle: "Creative studio website", description: "Built a responsive multi-section website with home, about, services, projects, and contact pages plus mobile navigation for phones, tablets, and desktops.", tags: ["HTML", "CSS", "JavaScript", "Responsive"] },
  { title: "Student Card Generator", subtitle: "Form-driven web app", description: "Turns a user's name, school, and course into a styled digital student card using vanilla JavaScript and DOM manipulation.", tags: ["HTML", "CSS", "JavaScript"] },
  { title: "Personal Portfolio", subtitle: "Portfolio website", description: "A responsive, animated portfolio presenting my product and development work, built with Next.js, Tailwind CSS, and Framer Motion.", tags: ["Next.js", "Tailwind CSS", "Framer Motion"] },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Selected Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">A selection of products and experiments across web development, backend engineering, and creative coding.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index % 2 * 0.08 }} viewport={{ once: true }} className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition hover:border-primary/50">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">{project.subtitle}</p>
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mb-6 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">{tag}</li>)}</ul>
              {(project.live || project.code) && <div className="flex gap-5 border-t border-border pt-4">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><ExternalLink size={16} />Live project</a>}{project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-secondary"><Github size={16} />Code</a>}</div>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
