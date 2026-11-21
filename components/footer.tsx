"use client"

import { ArrowUpRight, Mail } from "lucide-react"
import SocialLinks from "./social-links"

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xl font-semibold tracking-tight">Safiya Muhammad<span className="text-primary">.</span></p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">Building thoughtful digital products and helping people turn big ideas into something real.</p>
          </div>
          <a href="mailto:muhammadsafiya2001@gmail.com" className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"><Mail size={16} aria-hidden="true" />Get in touch<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="border-t border-border pt-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Find me around the web</p>
          <SocialLinks />
        </div>
        <div className="flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Safiya Muhammad. All rights reserved.</p>
          <a href="#top" className="inline-flex w-fit items-center gap-2 transition hover:text-primary">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
