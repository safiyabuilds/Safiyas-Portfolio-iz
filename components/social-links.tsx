type SocialProfile = {
  name: string
  icon: string
  href: string
  label: string
}

const socialProfiles: SocialProfile[] = [
  { name: "YouTube", icon: "youtube", href: "https://youtube.com/@safiyabuilds", label: "@safiyabuilds" },
  { name: "Instagram", icon: "instagram", href: "https://instagram.com/safiyabuilds7", label: "@safiyabuilds7" },
  { name: "X", icon: "twitter", href: "https://twitter.com/muhammadsafiyy2", label: "@muhammadsafiyy2" },
  { name: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@safiyabuilds", label: "@safiyabuilds" },
  { name: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/in/safiya-muhammad-9a1890236", label: "Safiya Muhammad" },
  { name: "GitHub", icon: "github", href: "https://github.com/Morhsophie", label: "Morhsophie" },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Social media profiles">
      {socialProfiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${profile.name}: ${profile.label}`}
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <img src={`https://thesvg.org/icons/${profile.icon}/default.svg`} alt="" width={16} height={16} className="size-4 object-contain" />
          <span>{profile.label}</span>
        </a>
      ))}
    </div>
  )
}
