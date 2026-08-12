const contactIconPaths = {
  pin: 'M12 2C7.03 2 3 5.92 3 10.75c0 5.68 9 11.25 9 11.25s9-5.57 9-11.25C21 5.92 16.97 2 12 2zm0 14.4a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8z',
  mail: 'M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5Zm-1 3.2v9.1H4.5V8.2l7.5 5.3 7.5-5.3Zm0-1.9-7.5 5.3L4.5 6.3h15z',
  whatsapp: 'M12.04 2C6.47 2 2.03 6.38 2.03 11.81c0 1.94.58 3.82 1.67 5.43L2 22l4.95-1.62a9.95 9.95 0 0 0 5.09 1.4h.01c5.57 0 10.01-4.38 10.01-9.81S17.61 2 12.04 2Zm0 17.97h-.01a8.32 8.32 0 0 1-4.25-1.17l-.3-.18-2.93.96.96-2.83-.2-.31a8.34 8.34 0 1 1 6.73 3.53Zm4.84-6.27c-.27-.13-1.58-.77-1.82-.86-.24-.09-.41-.13-.58.13-.17.26-.67.86-.82 1.04-.15.18-.3.2-.57.07-.27-.13-1.12-.41-2.13-1.31-.79-.71-1.32-1.58-1.48-1.85-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.44.09-.18.04-.34-.02-.48-.06-.13-.58-1.39-.79-1.9-.2-.48-.41-.41-.58-.42h-.49c-.17 0-.44.06-.67.34-.23.28-.88.86-.88 2.09s.9 2.42 1.03 2.59c.13.17 1.76 2.69 4.26 3.77.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.58-.64 1.8-1.26.22-.62.22-1.15.16-1.26-.07-.12-.24-.19-.51-.32z',
  linkedin: 'M16.66 8.93C15.27 8.93 14.3 9.69 13.97 10.38V9.14h-2.91c.04.82 0 14.86 0 14.86h2.91v-8.29c0-.44.03-.88.16-1.2.35-.88 1.14-1.8 2.47-1.8 1.74 0 2.44 1.32 2.44 3.26v8.03h2.91v-8.52c0-4.56-2.43-6.67-5.29-6.67zM6.5 7.17a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38zm-1.45 16.83h2.91V9.14H5.05v14.86z',
  github: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.71c-2.78.62-3.37-1.16-3.37-1.16-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.55 2.31 1.1 2.87.84.09-.66.35-1.1.64-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.67.95.67 1.93v2.87c0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z',
};

function AboutIcon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d={contactIconPaths[icon]} />
    </svg>
  );
}

function AboutPage({ content }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] animate-[fadeInUp_0.8s_ease-out]">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{content.about.title}</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">{content.about.summary}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {content.about.contactItems.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-400">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-100">
                  <AboutIcon icon={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
        <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-5 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Educacion universitaria</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{content.education.degree}</h3>
          <p className="mt-2 text-sm text-slate-400">{content.education.duration}</p>
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Certificaciones</p>
          <div className="mt-5 space-y-3">
            {content.education.certifications.map((certification) => (
              <div
                key={`${certification.title}-${certification.issuer}`}
                className="group relative rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 pr-14 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-200 opacity-0 transition group-hover:opacity-100 hover:border-cyan-400/30 hover:text-white"
                  aria-label={`Abrir certificado de ${certification.title}`}
                >
                  <span className="text-lg leading-none">↗</span>
                </a>
                <p className="text-base font-semibold text-white">{certification.title}</p>
                <p className="mt-1 text-sm text-slate-400">{certification.issuer}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">ID: {certification.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
