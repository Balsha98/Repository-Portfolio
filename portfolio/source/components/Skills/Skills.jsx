// IMPORTED STYLESHEETS
import "./css/Skills.css";
import "./css/Media.css";

const SKILLS = [
    {
        title: "Frontend",
        stack: ["React.js", "Typescript", "CSS3", "SASS"],
    },
    {
        title: "Backend",
        stack: ["Java", "Python", "Node.js", "Supabase"],
    },
    {
        title: "Cloud & Tools",
        stack: ["AWS", "GitHub / GitLab", "CI/CD Pipelines", "Docker"],
    },
    {
        title: "Mobile",
        stack: ["React Native", "Dart / Flutter", "Swift / SwiftUI", "Kotlin"],
    },
];

const Skills = function () {
    return (
        <section id="skills" className="section-skills-container">
            <header className="header-section-skills-container">
                <span>02 / Skills</span>
                <h2>Technical Arsenal</h2>
            </header>
            <div className="div-skills-cards-container">
                {SKILLS.map(({ title, stack }, i) => {
                    return (
                        <div key={i} className="div-skills-card-container">
                            <header className="header-skills-card-container">
                                <h4>{title}</h4>
                            </header>
                            <ul className="skills-card-tech-stack-list">
                                {stack.map((name, j) => {
                                    return (
                                        <li key={j} className="skills-card-tech-stack-list-item">
                                            <p>{name}</p>
                                            <span />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
