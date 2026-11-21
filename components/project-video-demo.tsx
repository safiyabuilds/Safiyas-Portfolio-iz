type ProjectVideoDemoProps = {
  title: string
  src: string
  orientation?: "portrait" | "landscape"
}

export default function ProjectVideoDemo({ title, src, orientation = "landscape" }: ProjectVideoDemoProps) {
  return (
    <figure className="relative mx-auto mb-5 flex aspect-[9/16] w-full max-w-[340px] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#171410] px-6 py-7 text-[#f7f3ec] shadow-[0_26px_60px_rgba(18,16,13,0.28)]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-[30%] size-56 rounded-full bg-[#d9b676]/10 blur-3xl" />
      <div className="relative z-10 flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9b676]">Project film</p>
        <span className="rounded-full border border-white/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-white/65">Laptop view</span>
      </div>
      <div className="relative z-10 mt-8">
        <h3 className="max-w-[15rem] text-3xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-[2.1rem]">
          A closer look at <span className="text-[#d9b676]">{title}</span>
        </h3>
        <p className="mt-3 max-w-[15rem] text-xs leading-relaxed text-white/60">Made to be explored on a bigger screen.</p>
      </div>
      <div className="relative z-10 mt-auto pb-8 pt-10 [perspective:1200px]">
        <div className="relative mx-auto w-[96%] [transform:rotateX(7deg)_rotateY(-9deg)_rotateZ(-3deg)]" style={{ transformStyle: "preserve-3d" }}>
          <div className="relative rounded-t-[0.8rem] border-[5px] border-[#39352f] bg-[#0d0c0b] px-1.5 pb-2 pt-2 shadow-[0_12px_32px_rgba(0,0,0,0.55)]">
            <span aria-hidden="true" className="absolute left-1/2 top-[2px] size-[3px] -translate-x-1/2 rounded-full bg-[#8d867a]" />
            <div className="aspect-video overflow-hidden rounded-[0.3rem] bg-black">
              <video
                aria-label={`${title} project demo on a laptop screen`}
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
      <figcaption className="relative z-10 text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">Desktop experience · {title}</figcaption>
    </figure>
  )
}
