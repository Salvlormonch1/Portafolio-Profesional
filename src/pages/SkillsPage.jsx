import { useState } from 'react';

// Slugs oficiales de skillicons.dev: https://github.com/tandpfun/skill-icons
function skillIconSlug(name) {
  const map = {
    'C++': 'cpp',
    'C#': 'cs',
    'C': 'c',
    'Java': 'java',
    'JavaScript': 'js',
    'TypeScript': 'ts',
    'Python': 'py',
    'PHP': 'php',
    'Kotlin': 'kotlin',
    'Dart': 'dart',
    'HTML': 'html',
    'CSS': 'css',
    '.NET': 'dotnet',
    'React': 'react',
    'Angular': 'angular',
    'Vue.js': 'vue',
    'Spring Boot': 'spring',
    'Flutter': 'flutter',
    'PostgreSQL': 'postgres',
    'MySQL': 'mysql',
    'MongoDB': 'mongodb',
    'SQLite': 'sqlite',
    'Git': 'git',
    'GitHub': 'github',
    'GitLab': 'gitlab',
    'Firebase': 'firebase',
  };

  return map[name] || null;
}

// Banderas para idiomas hablados (flagcdn.com). Ajusta el código de país si prefieres otro (ej. 'es' en vez de 'pe').
function languageFlagCode(name) {
  const map = {
    'Español (Nativo)': 'pe',
    'Inglés (Fluido)': 'us',
  };
  return map[name] || null;
}

// Íconos genéricos (no logos de marca) para metodologías y enfoques de trabajo.
function GenericMethodologyIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-7 w-7 text-cyan-300',
  };

  switch (name) {
    case 'Scrum':
      // Ciclo iterativo (sprints)
      return (
        <svg {...common}>
          <path d="M23 4v6h-6" />
          <path d="M1 20v-6h6" />
          <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
          <path d="M1 14l5.36 4.36A9 9 0 0020.49 15" />
        </svg>
      );
    case 'Kanban':
      // Tablero con columnas
      return (
        <svg {...common}>
          <rect x="3" y="4" width="4.5" height="16" rx="1" />
          <rect x="9.75" y="4" width="4.5" height="10" rx="1" />
          <rect x="16.5" y="4" width="4.5" height="13" rx="1" />
        </svg>
      );
    case 'Domain Driven Design':
      // Capas / arquitectura
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'MVC':
      // Componentes / módulos
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}

function SkillIcon({ name }) {
  const [imgFailed, setImgFailed] = useState(false);

  const slug = skillIconSlug(name);
  if (slug && !imgFailed) {
    return (
      <img
        src={`https://skillicons.dev/icons?i=${slug}`}
        alt=""
        aria-hidden="true"
        onError={() => setImgFailed(true)}
        className="h-12 w-12 object-contain"
      />
    );
  }

  const flagCode = languageFlagCode(name);
  if (flagCode && !imgFailed) {
    return (
      <img
        src={`https://flagcdn.com/${flagCode}.svg`}
        alt=""
        aria-hidden="true"
        onError={() => setImgFailed(true)}
        className="h-9 w-12 rounded-md object-cover"
      />
    );
  }

  const methodologyIcon = GenericMethodologyIcon({ name });
  if (methodologyIcon) {
    return (
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900">
        {methodologyIcon}
      </span>
    );
  }

  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-base font-semibold text-cyan-200">
      {name.charAt(0)}
    </span>
  );
}

function SkillsPage({ content }) {
  return (
    <section className="animate-[fadeInUp_0.8s_ease-out]">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{content.skills.title}</p>

      <div className="mt-8 space-y-10">
        {content.skills.groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-4 border-b border-white/10 pb-8">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex w-28 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-5 text-center transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <SkillIcon name={item} />
                  <span className="text-sm font-medium text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;