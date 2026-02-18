import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

interface Project {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  visual?: string;
}

const PROJECTS: Project[] = [
  {
    tag: 'Case Study — SaaS Dashboard',
    title: 'Pulse Analytics Platform',
    description:
      'A real-time analytics dashboard handling 100k+ data points with WebSocket streaming, custom D3 charts, and a design system used by 3 product teams.',
    tech: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind'],
    featured: true,
    visual: 'PULSE',
  },
  {
    tag: 'E-commerce — Design System',
    title: 'Bloom Component Library',
    description:
      '60+ accessible, tested components with Storybook docs and automated visual regression. Reduced dev time by 40%.',
    tech: ['React', 'Storybook', 'Jest', 'ARIA'],
  },
  {
    tag: 'Fintech — Web App',
    title: 'Ledger Budgeting App',
    description:
      'A personal finance PWA with offline support, transaction sync, and chart-driven insights. 4.8★ on Product Hunt.',
    tech: ['Vue 3', 'PWA', 'IndexedDB', 'Chart.js'],
  },
];

export default function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="projects" id="projects">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">01 / Work</span>
        <h2>Selected Projects</h2>
      </div>

      <div className="projects__grid stagger" ref={gridRef}>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
          >
            {project.featured ? (
              <>
                <div className="project-card__body">
                  <span className="project-card__tag">{project.tag}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="project-card__visual">{project.visual}</div>
              </>
            ) : (
              <>
                <span className="project-card__tag">{project.tag}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
