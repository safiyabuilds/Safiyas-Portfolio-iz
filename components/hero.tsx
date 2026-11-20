"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Plus } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import SocialLinks from "./social-links"

const roles = ["Software Engineer", "Product Manager", "Botanist"]
const portraitUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-20%20at%2011.07.26%20PM-PT0pFHJUHfTXzifzynW7kmBCCQvR5x.jpeg"

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:min-h-[calc(100svh-76px)] lg:px-12 lg:pb-20 lg:pt-20">
      <div className="mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-center">
        <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:mb-12">
          <span className="size-2 rounded-full bg-[#78916c]" aria-hidden="true" />
          Independent builder · Kaduna, Nigeria
        </div>
        <div className="grid items-center gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 order-1 pb-5 lg:order-1 lg:pb-0">
            <h1 className="text-[clamp(3.5rem,9vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Hi, I&apos;m<br />Safiya<span className="text-primary">.</span>
            </h1>
            <p className="mt-5 text-2xl font-medium tracking-[-0.045em] text-muted-foreground sm:text-3xl">I am a</p>
            <div className="relative mt-1 max-w-[min(100%,34rem)] -rotate-1 border border-[#d8cfc0] bg-[#f7f2e9] px-5 py-5 shadow-[5px_7px_0_#28231d] sm:px-8 sm:py-6">
              <div aria-hidden="true" className="absolute -top-[11px] left-5 right-5 flex justify-between sm:left-8 sm:right-8">
                {Array.from({ length: 8 }, (_, index) => <span key={index} className="size-[18px] rounded-full border-2 border-[#b8ad9c] bg-background" />)}
              </div>
              <div className="min-h-[1.2em] text-[clamp(2rem,5.2vw,4.1rem)] font-semibold leading-none tracking-[-0.065em] text-foreground" aria-live="polite" aria-atomic="true">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }} className="block">{roles[roleIndex]}</motion.span>
                </AnimatePresence>
              </div>
            </div>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">I build useful digital products and help ambitious teams bring thoughtful ideas to life.</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-primary">Start a project <span className="flex size-7 items-center justify-center rounded-full bg-background/15"><Plus size={15} /></span></a>
              <a href="#projects" className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground">See my work <ArrowDown size={15} /></a>
            </div>
            <div className="mt-7 flex items-center gap-4 text-sm text-muted-foreground"><span>Find me</span><SocialLinks /><span className="hidden sm:inline">Web · Product · Impact</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative order-2 mx-auto flex w-full max-w-[450px] items-end justify-center lg:order-2 lg:mx-0 lg:max-w-none lg:justify-end">
            <div aria-hidden="true" className="absolute right-[9%] top-[6%] aspect-square w-[76%] rounded-full bg-[#e9dfd0]" />
            <img src={portraitUrl} alt="Safiya Muhammad, software engineer and product manager" fetchPriority="high" className="relative z-10 aspect-[4/4.7] w-[83%] object-cover object-top [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]" />
            <div className="absolute bottom-[8%] left-0 z-20 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-medium tracking-wide text-foreground backdrop-blur">People-first products</div>
            <div className="absolute right-0 top-[17%] z-20 -rotate-6 rounded-full bg-[#f7f2e9] px-4 py-2 text-xs font-medium text-foreground shadow-md">1,800+ farmers reached</div>
          </motion.div>
        </div>
        <div className="mt-8 hidden items-center justify-between border-t border-border pt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:flex"><span>Available for meaningful work</span><span>Remote-first · Worldwide</span></div>
      </div>
    </section>
  )
}
