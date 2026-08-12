import { gmailComposeUrl } from '../content';

function ContactPage({ content, form, onChange, onSubmit }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur lg:p-8 animate-[fadeInUp_0.8s_ease-out]">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{content.contact.title}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{content.contact.subtitle}</h2>
          <div className="mt-6 space-y-3">
            {[
              ['LinkedIn', 'https://linkedin.com/in/ramon-jorge'],
              ['GitHub', 'https://github.com/Salvlormonch1'],
              ['Email', gmailComposeUrl()],
              ['WhatsApp', 'https://wa.me/51934577089'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <span>{label}</span>
                <span className="text-slate-400">↗</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-300">
              {content.contact.form.name}
              <input
                required
                value={form.name}
                onChange={(event) => onChange('name', event.target.value)}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50"
                placeholder={content.contact.form.name}
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              {content.contact.form.email}
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => onChange('email', event.target.value)}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50"
                placeholder={content.contact.form.email}
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm text-slate-300">
            {content.contact.form.message}
            <textarea
              required
              rows="6"
              value={form.message}
              onChange={(event) => onChange('message', event.target.value)}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50"
              placeholder={content.contact.form.message}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {content.contact.form.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;