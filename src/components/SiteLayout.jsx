import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { socialLinks } from '../content';

function SiteLayout({ content, language, onToggleLanguage, children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    ['text-sm transition', isActive ? 'text-white' : 'text-slate-300 hover:text-white'].join(' ');

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="group flex items-center gap-3">
            <img
              src="/favicon.svg"
              alt={content.name}
              className="h-11 w-11 rounded-full shadow-glow transition group-hover:scale-105"
            />
            <div>
              <p className="text-sm font-semibold text-white">{content.name}</p>
              <p className="text-xs text-slate-400">{content.title}</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {content.nav.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-fuchsia-400/30 hover:bg-fuchsia-400/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleLanguage}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20"
              aria-label="Cambiar idioma"
            >
              {content.langLabel}
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Abrir menú"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 bg-[#070b19]/95 px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
              {content.nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl border px-4 py-3 text-sm transition',
                      isActive ? 'border-fuchsia-400/30 bg-fuchsia-400/10 text-white' : 'border-white/10 bg-white/5 text-slate-200',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-fuchsia-400/30 hover:bg-fuchsia-400/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  onToggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-left text-sm font-semibold text-emerald-100"
              >
                {language === 'es' ? 'English' : 'Español'}
              </button>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">{children}</main>

      <footer className="border-t border-white/10 bg-[#050816]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{content.footer}</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;