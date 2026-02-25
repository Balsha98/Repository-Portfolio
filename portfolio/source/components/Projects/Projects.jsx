// IMPORTED STYLESHEETS
import "./css/Projects.css";
import "./css/Media.css";

const PROJECTS = [
    {
        type: "Streaming — SaaS Platform",
        title: "Pinnacle Streams",
        description:
            "A video streaming platform inspired by the Paramount experience, featuring a content browsing interface, category filtering, and a clean cinematic layout. Built with a focus on visual polish, delivering a seamless viewing discovery experience across all screen sizes.",
        stack: ["JavaScript", "React.js", "Node.js", "CSS3", "Supabase"],
        link: "",
    },
    {
        type: "Environmental — SaaS Platform",
        title: "Nestify Dashboard",
        description:
            "An internal dashboard built for Genesee Land Trust to monitor and manage land preservation efforts across their conservation portfolio. Features interactive data visualization and reporting tools designed to support the organization's environmental mission.",
        stack: ["HTML5", "CSS3", "React.js", "ReCharts", "Pigeon"],
        link: "https://gltnestify.netlify.app/",
    },
    {
        type: "Sports — SaaS Platform",
        title: "SportScout Dashboard",
        description:
            "A comprehensive sports management platform for tracking leagues, teams, players, and fans in one centralized interface. Designed for clarity and speed, giving administrators, managers, and coaches an overview of everything happening across their organization.",
        stack: ["HTML5", "CSS3", "PHP", "MySQL"],
        link: "https://sportscout.infinityfreeapp.com/",
    },
];

const Projects = function () {
    return (
        <section id="work" className="section-projects-container">
            <header className="header-section-projects-container">
                <span>01 / Work</span>
                <h2>Selected Projects</h2>
            </header>
            <div className="div-projects-cards-container">
                {PROJECTS.map(({ type, title, description, stack, link }, i) => {
                    if (i === 0) {
                        return (
                            <div key={i} className="div-projects-card-container">
                                <a href={link} target="_blank" />
                                <div className="div-projects-card-overview-container">
                                    <header className="header-projects-card-overview-container">
                                        <span>{type}</span>
                                        <h2>{title}</h2>
                                    </header>
                                    <div className="div-projects-card-info-container">
                                        <p>{description}</p>
                                        <ul className="projects-card-tech-stack-list">
                                            {stack.map((tech, j) => {
                                                return (
                                                    <li key={j} className="projects-card-tech-stack-list-item">
                                                        <span>{tech}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="div-projects-card-thumbnail-container">
                                    <span>{title.split(" ")[0]}</span>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={i} className="div-projects-card-container">
                            <a href={link} target="_blank" />
                            <header className="header-projects-card-overview-container">
                                <span>{type}</span>
                                <h2>{title}</h2>
                            </header>
                            <div className="div-projects-card-info-container">
                                <p>{description}</p>
                                <ul className="projects-card-tech-stack-list">
                                    {stack.map((tech, j) => {
                                        return (
                                            <li key={j} className="projects-card-tech-stack-list-item">
                                                <span>{tech}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
