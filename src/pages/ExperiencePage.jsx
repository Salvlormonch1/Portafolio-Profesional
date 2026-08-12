function ExperiencePage({ content }) {
  return (
    <section className="animate-[fadeInUp_0.8s_ease-out]">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{content.experience.title}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{content.experience.company}</h2>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:block">
          {content.experience.period}
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-glow">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{content.experience.role}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Luz del Sur</h3>
          </div>
          <p className="text-sm text-slate-400 sm:text-right">{content.experience.period}</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {content.experience.bullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
              {bullet}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
