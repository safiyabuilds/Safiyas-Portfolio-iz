"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a Project Manager and Junior Web Developer passionate about using technology to solve real-world
                problems. I currently manage projects at Sara Foundation's ArtifyPro, and led Team MediKey at the
                Hack4Freedom Hackathon.
              </p>
              <p>
                I love creating user-centered solutions that merge innovation with impact. My approach combines
                strategic thinking with hands-on execution, ensuring that every project delivers measurable value.
              </p>
              <p>
                When I'm not building products, you'll find me exploring new technologies, mentoring aspiring
                developers, or working on creative projects that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">Location:</span> Nigeria
                </p>
                <p>
                  <span className="text-primary font-semibold">Role:</span> Project Manager & Developer
                </p>
                <p>
                  <span className="text-primary font-semibold">Experience:</span> ArtifyPro, Hack4Freedom, Toggle Africa
                </p>
                <p>
                  <span className="text-primary font-semibold">Skills:</span> Project Management, Web Development,
                  Product Strategy
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/safiya-muhammad-9a1890236"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-card border border-border hover:border-secondary rounded-lg transition-all hover:bg-secondary/10"
              >
                <Linkedin size={20} className="text-secondary" />
              </a>
              <a
                href="mailto:muhammadsafiya2001@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-card border border-border hover:border-primary rounded-lg transition-all hover:bg-primary/10"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
