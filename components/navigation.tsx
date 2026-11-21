"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"

const links = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#projects" },
  { label: "My story", href: "#about" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkPortfolio, setDarkPortfolio] = useState(false)
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark-portfolio", darkPortfolio)
    return () => document.documentElement.classList.remove("dark-portfolio")
  }, [darkPortfolio])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <div className="hidden items-center gap-6 whitespace-nowrap text-sm text-muted-foreground md:flex lg:gap-8">
          {links.map((link) => <a key={link.label} href={link.href} className="transition-colors hover:text-foreground">{link.label}</a>)}
        </div>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <div aria-label={`Local time ${time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`} className="rounded-full border border-border bg-card/80 px-2.5 py-2 text-[11px] text-muted-foreground sm:px-3 sm:text-xs">
            <span className="sm:hidden">{time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
            <span className="hidden sm:inline">Local time&nbsp; <strong className="font-semibold text-foreground">{time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</strong>&nbsp; · &nbsp;{time.toLocaleDateString([], { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <button type="button" aria-label={darkPortfolio ? "Turn off dark background" : "Turn on dark background"} aria-pressed={darkPortfolio} onClick={() => setDarkPortfolio((current) => !current)} className="relative flex h-11 w-9 shrink-0 items-end justify-center pb-1 text-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" title="Pull to toggle dark background">
            <span aria-hidden="true" className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-border" />
            <span aria-hidden="true" className="relative z-10 flex size-8 items-center justify-center rounded-full border border-border bg-card shadow-sm">{darkPortfolio ? <Sun size={15} /> : <Moon size={15} />}</span>
          </button>
          <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="absolute inset-x-3 top-[calc(100%+0.5rem)] rounded-2xl border border-border bg-background p-3 shadow-xl md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
