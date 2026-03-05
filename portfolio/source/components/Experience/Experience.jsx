// IMPORTED STYLESHEETS
import "./css/Experience.css";
import "./css/Media.css";

const EXPERIENCES = [
    {
        timeline: "2025 — Present",
        position: "Junior Frontend Engineer",
        company: "EZ-Booker (Contract)",
        description:
            "Co-maintained the software solution made in React.js and Node.js with the company's CEO. Communicated with stakeholders regarding application upgrades and bug fixes. Helped build the software solution that led to its recent acquisition by Hoteza.",
    },
    {
        timeline: "2024 — 2025",
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
