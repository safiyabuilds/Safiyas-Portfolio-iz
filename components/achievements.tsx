"use client"

import { motion } from "framer-motion"
import { Trophy, Star } from "lucide-react"

const achievements = [
  {
    title: "Most Social Female Award",
    organization: "ABU Zaria",
    description: "Recognized for outstanding leadership and community engagement",
    icon: Star,
  },
  {
    title: "Hack4Freedom Hackathon Finalist",
    organization: "Global Hackathon",
    description: "Led Team MediKey to finalist position with innovative health solution",
    icon: Trophy,
  },
  {
    title: "SheCluded Cohort 7 Graduate",
    organization: "SheCluded",
    description: "Completed intensive tech leadership and entrepreneurship program",
    icon: Trophy,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-card/50 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements & Awards</h2>
          <p className="text-muted-foreground">Recognition of impact and contributions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                <p className="text-secondary text-sm mb-3">{achievement.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
