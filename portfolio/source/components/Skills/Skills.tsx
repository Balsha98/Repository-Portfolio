import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

type Proficiency = 'expert' | 'proficient' | 'familiar';

interface Skill {
  name: string;
  level: Proficiency;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Core Languages',
    skills: [
      { name: 'JavaScript (ES2024)', level: 'expert'     },
      { name: 'TypeScript',          level: 'expert'     },
      { name: 'HTML5 / CSS3',        level: 'expert'     },
      { name: 'Python',              level: 'proficient' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React / Next.js', level: 'expert'     },
      { name: 'Vue 3 / Nuxt',    level: 'expert'     },
      { name: 'Svelte',          level: 'proficient' },
      { name: 'Astro',           level: 'familiar'   },
    ],
  },
  {
    category: 'Tooling',
    skills: [
      { name: 'Vite / Webpack', level: 'expert'     },
      { name: 'Storybook',      level: 'expert'     },
      { name: 'Docker',         level: 'proficient' },
      { name: 'CI/CD Pipelines', level: 'proficient' },
    ],
  },
  {
    category: 'Craft',
    skills: [
      { name: 'Figma (Dev Mode)',     level: 'expert'     },
      { name: 'Web Performance',      level: 'expert'     },
      { name: 'Accessibility (WCAG)', level: 'expert'     },
      { name: 'Three.js / WebGL',     level: 'proficient' },
    ],
  },
];

export default function Skills() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="skills" id="skills">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">02 / Skills</span>
        <h2>Technical Arsenal</h2>
      </div>

      <div className="skills__grid stagger" ref={gridRef}>
        {SKILL_GROUPS.map(({ category, skills }) => (
          <div key={category} className="skill-group">
            <h4 className="skill-group__heading">{category}</h4>
            <ul className="skill-group__list">
              {skills.map(({ name, level }) => (
                <li key={name} className={`skill-item skill-item--${level}`}>
                  <span className="skill-item__name">{name}</span>
                  <span className="skill-item__dot" aria-label={level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
