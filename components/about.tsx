"use client"

import { motion } from "framer-motion"
export default function About() {
  return (
    <section id="about" className="border-t border-border bg-card/50 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="mb-8 text-4xl font-bold">About Me</h2>
          <div className="flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">I started as a botanist. Now I build software.</p>
            <p>I am a Software Engineer with a product management background.</p>
            <p>I build and deploy responsive websites and web apps with HTML, CSS, JavaScript, and React, and write Python for automation and media projects. I&apos;ve also trained in backend development with Node.js, TypeScript, and MongoDB.</p>
            <p>Alongside development, I lead a 25-person team at GraintoX delivering an agritech platform with more than 1,800 registered smallholder farmers. I also led the team that built MediKey, a patient-owned health-record MVP using Bitcoin and Nostr.</p>
            <p>I bring a product lead&apos;s habits to engineering: understand users, scope clearly, work collaboratively, and ship on time.</p>
          </div>
        </motion.div>
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-border bg-background p-8">
            <h3 className="mb-5 text-xl font-semibold">At a glance</h3>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p><span className="font-semibold text-primary">Focus:</span> Web development & product leadership</p>
              <p><span className="font-semibold text-primary">Impact:</span> Agritech platform with 1,800+ registered farmers</p>
              <p><span className="font-semibold text-primary">Languages:</span> Hausa (native), English (fluent), Arabic (basic)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
