"use client"

import { Moon, Sun } from "lucide-react"

interface NavigationProps {
  isDark: boolean
  onThemeToggle: () => void
}

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#experience" },
]

export default function Navigation({ isDark, onThemeToggle }: NavigationProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Safiya Muhammad, home">
          <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold tracking-tight text-background">SM</span>
          <span className="hidden text-sm font-semibold sm:block">Safiya Muhammad</span>
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">{link.label}</a>)}
          <a href="#contact" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex">Let&apos;s talk</a>
          <button onClick={onThemeToggle} className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:text-foreground" aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>
        </div>
      </div>
    </nav>
  )
}
