import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import PreviewModal from '../components/PreviewModal';

function ProjectsPage({ content }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProject = content.projects.items.find((project) => project.name === selectedProject);

  return (
    <section className="animate-[fadeInUp_0.8s_ease-out]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{content.projects.title}</p>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          {content.nav[2].label === 'Proyectos'}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {content.projects.items.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            demoLabel={content.projects.demoLabel}
            previewLabel={content.projects.previewLabel}
            onPreview={() => setSelectedProject(project.name)}
          />
        ))}
      </div>

      {activeProject ? (
        <PreviewModal
          title={`${content.projects.modalTitle}: ${activeProject.name}`}
          body={content.projects.modalBody}
          closeLabel={content.projects.modalClose}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </section>
  );
}

export default ProjectsPage;
