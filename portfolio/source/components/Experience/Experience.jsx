import { useScrollReveal } from "../../assets/hooks/useScrollReveal";
import "./Experience.css";

const JOBS = [
    {
        period: "2022 — Present",
        title: "Senior Frontend Engineer",
        company: "Vercel Inc.",
        description: "Led the redesign of the dashboard UI serving 1M+ developers. Built the design system adopted across 5 product teams. Improved core web vitals scores by 35% across the platform.",
    },
    {
        period: "2020 — 2022",
        title: "Frontend Engineer",
        company: "Stripe",
        description: "Owned the Stripe Elements component library. Shipped accessible, localized payment UIs supporting 135+ currencies and collaborated daily with design, product, and API teams.",
    },
    {
        period: "2018 — 2020",
        title: "UI Engineer",
        company: "Figma (Contract)",
        description: "Prototyped new editor interactions and contributed to the plugin ecosystem. Built internal tooling that cut component audit time by 60%.",
    },
];

function ExperienceItem({ job, delay }) {
    const ref = useScrollReveal();

    return (
        <div className="exp-item reveal from-left" ref={ref} style={{ transitionDelay: `${delay}s` }}>
            <div className="exp-item__period">{job.period}</div>
            <div className="exp-item__content">
                <h3 className="exp-item__title">{job.title}</h3>
                <div className="exp-item__company">→ {job.company}</div>
                <p className="exp-item__desc">{job.description}</p>
            </div>
        </div>
    );
}

export default function Experience() {
    const headerRef = useScrollReveal();

    return (
        <section className="experience" id="experience">
            <div className="section-header reveal" ref={headerRef}>
                <span className="section-num">03 / Experience</span>
                <h2>Where I've Worked</h2>
            </div>

            <div className="experience__list">
                {JOBS.map((job, i) => (
                    <ExperienceItem key={job.company} job={job} delay={i * 0.12} />
                ))}
            </div>
        </section>
    );
}
