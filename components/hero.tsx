"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen blur-3xl animate-shimmer"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen blur-3xl animate-shimmer"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Safiya
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Project Manager & Product Innovator
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Blending creativity, technology, and teamwork to build meaningful digital products that solve real-world
            problems.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown size={32} className="text-primary" />
        </motion.div>
      </div>
    </section>
  )
}
