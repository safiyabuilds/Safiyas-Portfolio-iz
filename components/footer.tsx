"use client"

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xl font-semibold tracking-tight">Safiya Muhammad<span className="text-primary">.</span></p><p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">Building thoughtful digital products and helping people turn big ideas into something real.</p><p className="mt-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Safiya Muhammad. All rights reserved.</p></div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Morhsophie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition hover:text-primary"><Github size={19} /></a>
          <a href="https://linkedin.com/in/safiya-muhammad-9a1890236" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-primary"><Linkedin size={19} /></a>
          <a href="mailto:muhammadsafiya2001@gmail.com" aria-label="Email" className="text-muted-foreground transition hover:text-primary"><Mail size={19} /></a>
          <a href="#top" className="ml-2 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </footer>
  )
}
