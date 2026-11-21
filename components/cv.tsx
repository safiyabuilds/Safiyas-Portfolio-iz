"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Download, FileText } from "lucide-react"

const cvPath = "/safiya-muhammad-cv.pdf"

export default function CV() {
  return (
    <section id="cv" aria-labelledby="cv-title" className="border-t border-border py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText aria-hidden="true" size={26} />
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Experience &amp; background</p>
              <h2 id="cv-title" className="text-3xl font-bold">My CV</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Take a closer look at my experience, projects, and skills.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Safiya Muhammad · PDF</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-44">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View CV <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a
              href={cvPath}
              download="Safiya-Muhammad-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Download PDF <Download aria-hidden="true" size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
