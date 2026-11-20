"use client"

import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const portraitUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-20%20at%2011.07.26%20PM-PT0pFHJUHfTXzifzynW7kmBCCQvR5x.jpeg"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-secondary" /> Available for meaningful work
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            Hi, I&apos;m <span className="text-primary">Safiya.</span><br />
            I build with <span className="font-serif italic font-normal">purpose.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">Software engineer and product manager making useful digital products, and helping ambitious teams bring them to life.</p>
          <p className="mt-4 text-sm font-medium tracking-wide text-muted-foreground">Based in Kaduna, Nigeria · Working everywhere</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">Explore my work <ArrowDown size={16} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:border-primary hover:text-primary">Let&apos;s talk <ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <a href="https://github.com/Morhsophie" target="_blank" rel="noopener noreferrer" aria-label="Safiya on GitHub" className="text-muted-foreground transition hover:text-primary"><Github size={19} /></a>
            <a href="https://linkedin.com/in/safiya-muhammad-9a1890236" target="_blank" rel="noopener noreferrer" aria-label="Safiya on LinkedIn" className="text-muted-foreground transition hover:text-primary"><Linkedin size={19} /></a>
            <span className="h-px w-14 bg-border" />
            <span className="text-sm text-muted-foreground">Web · Product · Impact</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }} className="relative order-1 mx-auto w-full max-w-[440px] lg:order-2">
          <div className="absolute -right-3 -top-3 size-24 rounded-full border border-primary/30 sm:-right-5 sm:-top-5 sm:size-32" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[44%_44%_18px_18px] bg-card">
            <img src={portraitUrl} alt="Safiya Muhammad, software engineer and product manager" fetchPriority="high" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-5 left-3 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-7 sm:px-5">
            <p className="text-2xl font-semibold tracking-tight">1,800<span className="text-primary">+</span></p>
            <p className="text-xs text-muted-foreground">farmers reached</p>
          </div>
          <span className="absolute bottom-2 right-0 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground sm:-right-5">People-first products</span>
        </motion.div>
      </div>
    </section>
  )
}
