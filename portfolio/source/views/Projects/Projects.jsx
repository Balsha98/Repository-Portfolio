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
        repository: "https://github.com/Balsha98/Repository-PinnacleStreams",
        host: "https://pinnaclestreams.vercel.app/",
    },
    {
        type: "Environmental — SaaS Platform",
        title: "Nestify Preservation",
        description:
            "An internal dashboard built for Genesee Land Trust to monitor and manage land preservation efforts across their conservation portfolio. Features interactive data visualization and reporting tools designed to support the organization's environmental mission.",
        stack: ["HTML5", "CSS3", "React.js", "ReCharts", "Pigeon"],
        repository: "https://github.com/Balsha98/Repository-NestifyDashboard",
        host: "https://gltnestify.netlify.app/",
    },
    {
        type: "Management — ToDo Application",
        title: "Taskly ToDo",
        description:
            "A simple and focused task management app for adding, editing, and deleting daily tasks with a clear, completed, and pending breakdown structure. Everything you need to stay organized through the day, nothing you don't.",
        stack: ["HTML5", "CSS3", "React.js", "localStorage"],
        repository: "https://github.com/Balsha98/Repository-Taskly",
        host: "https://mytasklytodo.netlify.app/",
    },
    {
        type: "Ticketing — SaaS Platform",
        title: "DevTix Tickets",
        description:
            "A gamified support ticketing platform where resolving tickets earns the user points, unlocks rankings, and climbs a specific leaderboard. Turns routine task management into an engaging experience that rewards consistency and speed.",
        stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"],
        repository: "https://github.com/Balsha98/Repository-DevTix",
        host: "",
    },
    {
        type: "Entertainment — Classic Game",
        title: "MindFlip Memory",
        description:
            "An interactive card-matching memory game where players flip and pair cards until the board is cleared. The game features smooth flip animations, a move counter (soon), and a clean minimal interface that keeps the focus on the game itself.",
        stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "FlagsAPI"],
        repository: "https://github.com/Balsha98/Repository-MindFlip",
        host: "http://mindflip.netlify.app/",
    },
    {
        type: "Entertainment — Classic Game",
        title: "TicTacToe Clash",
        description:
            "A single-player Tic Tac Toe game against the computer with persistent score tracking and a full game history log. Built around clean game logic and easy-to-use user interface, keeping every match result on record as you play.",
        stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "localStorage"],
        repository: "https://github.com/Balsha98/Repository-TicTacToe",
        host: "https://crossroadclash.netlify.app/",
    },
    {
        type: "Vehicles — SaaS Platform",
        title: "SureDrive Rental",
        description:
            "A car rental browsing platform where users can explore available vehicles, filter by category, and view detailed specifications before booking. Built with a clean layout that puts the vehicles front and centre and makes the selection process effortless.",
        stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"],
        repository: "https://github.com/Balsha98/Repository-SureDrive",
        host: "",
    },
    {
        type: "Retail - Brand Awareness",
        title: "AirJordan Brand",
        description:
            "A brand-inspired shoe showcase built around the Air Jordan aesthetic, featuring a curated selection of iconic silhouettes with clean product presentation. Designed to capture the energy of the Jordan brand through bold typography, sharp imagery, and a premium browsing experience.",
        stack: ["HTML5", "CSS3", "JavaScript", "Cookies"],
        repository: "https://github.com/Balsha98/Repository-AirJordanBrand",
        host: "https://airjordanbrand.netlify.app/",
    },
    {
        type: "Entertainment - Jokes Galore",
        title: "JokeGenerator API",
        description:
            "A lightweight single-page app that fetches and displays random jokes from the JokeAPI with a single click. A clean exercise in API integration, async JavaScript, and delivering a delightful micro-experience with minimal interface.",
        stack: ["HTML5", "CSS3", "JavaScript", "JokeAPI"],
        repository: "https://github.com/Balsha98/Repository-JokeGenerator",
        host: "https://jkzgen.netlify.app/",
    },
    {
        type: "Sports — SaaS Platform",
        title: "SportScout Dashboard",
        description:
            "A comprehensive sports management platform for tracking leagues, teams, players, and fans in one centralized interface. Designed for clarity and speed, giving administrators, managers, and coaches an overview of everything happening across their organization.",
        stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"],
        repository: "https://github.com/Balsha98/Repository-SportScout",
        host: "https://sportscout.infinityfreeapp.com/",
    },
];

const Projects = function () {
    const handleOpenLink = (e) => {
        let parent = e.target.closest("a");

        // Guard clause.
        if (parent) return;

        parent = e.target.closest(".div-projects-card-container");

        const { href, target } = parent.dataset;

        // Guard clause.
        if (!href) return;

        window.open(href, target);
    };

    return (
        <section id="work" className="section-projects-container">
            <header className="header-section-projects-container">
                <span>01 / Work</span>
                <h2>Selected Projects</h2>
            </header>
            <div className="div-projects-cards-container">
                {PROJECTS.map(({ type, title, description, stack, repository, host }, i) => {
                    if (i % 3 === 0) {
                        const isReverse = (i / 3) % 2 !== 0;

                        return (
                            <div key={i} id={i + 1} className={`div-projects-card-container${isReverse ? " reverse" : ""}`} onClick={handleOpenLink} data-href={host} data-target="_blank">
                                <div className="div-projects-card-overview-container">
                                    <a href={repository} target="_blank">
                                        <ion-icon src="/media/icons/github.svg" />
                                    </a>
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
                                    <ion-icon src={`/media/icons/${title.split(" ")[0].toLowerCase()}.svg`} />
                                    {host.length === 0 && <span>In Development</span>}
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={i} className="div-projects-card-container" onClick={handleOpenLink} data-href={host} data-target="_blank">
                            <a href={repository} target="_blank">
                                <ion-icon src="/media/icons/github.svg" />
                            </a>
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
