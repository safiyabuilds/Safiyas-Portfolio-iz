"use client"

import { ChevronDown, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-shimmer absolute left-10 top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-shimmer absolute bottom-20 right-10 size-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-secondary">Kaduna, Nigeria · Open to opportunities</p>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Safiya</span></h1>
          <p className="mb-6 text-2xl font-light text-muted-foreground md:text-3xl">Software Engineer & Product Manager</p>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">I build responsive web products and lead teams that turn real-world challenges into thoughtful digital solutions—from tools serving 1,800+ farmers to patient-owned health records.</p>
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <button onClick={() => scrollToSection("projects")} className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:bg-primary/80">Explore my work</button>
          <button onClick={() => scrollToSection("contact")} className="rounded-lg border border-primary px-8 py-3 font-semibold text-primary transition hover:bg-primary/10">Get in touch</button>
        </motion.div>
        <div className="mt-8 flex justify-center gap-5">
          <a href="https://github.com/Morhsophie" target="_blank" rel="noopener noreferrer" aria-label="Safiya on GitHub" className="text-muted-foreground transition hover:text-primary"><Github size={21} /></a>
          <a href="https://linkedin.com/in/safiya-muhammad-9a1890236" target="_blank" rel="noopener noreferrer" aria-label="Safiya on LinkedIn" className="text-muted-foreground transition hover:text-secondary"><Linkedin size={21} /></a>
        </div>
        <motion.div className="mt-16 flex justify-center" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} aria-hidden="true"><ChevronDown size={28} className="text-primary" /></motion.div>
      </div>
    </section>
  )
}
