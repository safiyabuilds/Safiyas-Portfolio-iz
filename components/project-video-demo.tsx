type ProjectVideoDemoProps = {
  title: string
  src: string
  orientation?: "portrait" | "landscape"
}

export default function ProjectVideoDemo({ title, src, orientation = "landscape" }: ProjectVideoDemoProps) {
  return (
    <figure className="relative mx-auto mb-5 flex aspect-[9/16] w-full max-w-[340px] flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#120f0c] px-6 pb-7 pt-8 text-[#f7f3ec] shadow-[0_26px_60px_rgba(18,16,13,0.28)]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-[26%] size-56 rounded-full bg-[#d9b676]/10 blur-3xl" />
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9b676]">Project walkthrough</p>
        <h3 className="mt-4 max-w-[16rem] text-[2rem] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-[2.2rem]">
          {title}<br />
          <span className="text-white/80">in action.</span>
        </h3>
      </div>
      <div className="relative z-10 mt-auto pb-8 pt-10 [perspective:1100px]">
        <div className="relative mx-auto w-[112%] -translate-x-[6%] [transform:rotateX(3deg)_rotateY(-7deg)_rotateZ(-4deg)]" style={{ transformStyle: "preserve-3d" }}>
          <div className="relative rounded-t-[0.85rem] border-[6px] border-[#39352f] bg-[#0d0c0b] px-1.5 pb-2 pt-2 shadow-[0_12px_32px_rgba(0,0,0,0.55)]">
            <span aria-hidden="true" className="absolute left-1/2 top-[2px] size-[3px] -translate-x-1/2 rounded-full bg-[#8d867a]" />
            <div className="aspect-video overflow-hidden rounded-[0.25rem] bg-black">
              <video
                aria-label={`${title} project demo playing on a laptop screen`}
                autoPlay
                muted
                playsInline
                controls
                preload="metadata"
                className={`size-full ${orientation === "portrait" ? "object-contain" : "object-cover"}`}
              >
                <source src={src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
          <div aria-hidden="true" className="relative mx-auto h-2.5 w-[108%] -translate-x-[4%] rounded-b-[0.75rem] bg-gradient-to-b from-[#aaa59b] to-[#56524c] shadow-[0_16px_24px_rgba(0,0,0,0.4)]" />
          <div aria-hidden="true" className="mx-auto h-2 w-[32%] rounded-b-full bg-[#39352f]" />
        </div>
      </div>
      <figcaption className="sr-only">{title} desktop demo shown on a laptop screen.</figcaption>
    </figure>
  )
}
