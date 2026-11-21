"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#projects" },
  { label: "My story", href: "#about" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Safiya Muhammad, home" onClick={() => setMenuOpen(false)} className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em]">SM<span className="text-primary">.</span></a>
        <div className="hidden items-center gap-6 whitespace-nowrap text-sm text-muted-foreground md:flex lg:gap-8">
          {links.map((link) => <a key={link.label} href={link.href} className="transition-colors hover:text-foreground">{link.label}</a>)}
        </div>
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
