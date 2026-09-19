// IMPORTED STYLESHEETS
import "./css/Experience.css";
import "./css/Media.css";

const EXPERIENCES = [
    {
        timeline: "2026 — Present",
        position: "Junior Software Developer",
        company: "Belvista Software (Full-Time)",
        description:
            "Participating in daily stand-ups regarding various client-related solutions. Contributing to both Belvista's internal and external clients' product development. Having a chance to work across the full stack: C# (.NET), React (TypeScript), SQL (T-SQL).",
    },
    {
        timeline: "2024 — Present",
        position: "Full-Stack Developer",
        company: "EZ-Booker (Contract)",
        description:
            "Co-maintaining the software solution made in React.js and PHP with the company's CEO. Communicating with stakeholders regarding application upgrades and bug fixes. Helping build the software solution that led to its recent acquisition by Hoteza.",
    },
    {
        timeline: "2024 — 2024",
        position: "UI Integration Specialist Intern",
        company: "EZ-Booker (Internship/Full-Time)",
        description:
            "Developed an alternative hybrid application using React.js for clients' on-the-go needs. Contributed to live production updates through GitHub and AWS on a daily basis. Credited with improving client retention and onboarding of new clients by 50%.",
    },
    {
        timeline: "2023 — 2025",
        position: "University Teaching Assistant",
        company: "RIT Croatia (Part-Time)",
        description:
            "Helped students better understand the curriculum and technologies covered. Learned how to pass down knowledge more efficiently through regular tutoring sessions (individual/group). Developed key leadership, organizational, and communication skills through tutoring.",
    },
];

const Experience = function () {
    return (
        <section id="experience" className="section-experience-container">
            <header className="header-section-experience-container">
                <span>03 / Experience</span>
                <h2>Where I've Worked</h2>
            </header>
            <ul className="section-experience-positions-list">
                {EXPERIENCES.map(({ timeline, position, company, description }, i) => {
                    return (
                        <li key={i} className="section-experience-positions-list-item">
                            <span>{timeline}</span>
                            <div className="div-section-experience-positions-list-item-content-container">
                                <header className="header-section-experience-positions-list-item">
                                    <h4>{position}</h4>
                                    <div className="div-header-section-experience-positions-list-item-company-container">
                                        <ion-icon src="/media/icons/arrow-right.svg" />
                                        <span>{company}</span>
                                    </div>
                                </header>
                                <p>{description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Experience;
