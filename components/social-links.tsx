const socialProfiles = [
  {
    name: "YouTube",
    icon: "youtube",
    href: "https://youtube.com/@safiyabuilds",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://instagram.com/safiyabuilds",
  },
  {
    name: "Twitter",
    icon: "twitter",
    href: "https://twitter.com/safiyabuilds",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@safiyabuilds",
  },
]

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Social media profiles">
      {socialProfiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${profile.name}: @safiyabuilds`}
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:text-primary"
        >
          <img
            src={`https://thesvg.org/icons/${profile.icon}/default.svg`}
            alt=""
            width={19}
            height={19}
            className="size-[19px] object-contain"
          />
        </a>
      ))}
    </div>
  )
}
