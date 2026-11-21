const links = [
  { label: "Home", href: "#top" },
  { label: "Web development", href: "#projects" },
  { label: "My story", href: "#about" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Safiya Muhammad, home" className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em]">SM<span className="text-primary">.</span></a>
        <div className="flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap text-xs text-muted-foreground sm:gap-7 lg:gap-8">
          {links.map((link) => <a key={link.label} href={link.href} className="transition-colors hover:text-foreground">{link.label}</a>)}
        </div>
      </nav>
    </header>
  )
}
