import { useState } from 'react';

function ProjectCard({ project, demoLabel, codeLabel, previewLabel, onPreview }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(project.image) && !imageFailed;
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glow transition hover:-translate-y-1 hover:border-cyan-400/20">
      <div className={`bg-gradient-to-br ${project.accent} p-5`}>
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 backdrop-blur-sm">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.imageAlt || project.name}
              onError={() => setImageFailed(true)}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-72 w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-10 w-10 text-cyan-200/50"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/40">
                {project.imageLabel || project.name}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-cyan-100">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {demoLabel}
            </a>
          ) : (
            <button
              type="button"
              onClick={onPreview}
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {previewLabel}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
