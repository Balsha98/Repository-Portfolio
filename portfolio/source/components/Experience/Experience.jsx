// IMPORTED STYLESHEETS
import "./css/Experience.css";
// import "./css/Media.css";

const EXPERIENCES = [
	{
		timeline: "2025 — Present",
		position: "Junior Frontend Engineer",
		company: "EZ-Booker (Contract)",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae maiores explicabo blanditiis asperiores assumenda, ipsa magnamrepudiandae maxime. Totam numquam dolores nam maiores fuga, tempore iusto pariatur consectetur at!",
	},
	{
		timeline: "2024 — 2025",
		position: "UI Intergration Specialist Intern",
		company: "EZ-Booker (Internship/Full-Time)",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae maiores explicabo blanditiis asperiores assumenda, ipsa magnamrepudiandae maxime. Totam numquam dolores nam maiores fuga, tempore iusto pariatur consectetur at!",
	},
	{
		timeline: "2023 — 2025",
		position: "University Teaching Assistant",
		company: "RIT Croatia (Part-Time)",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae maiores explicabo blanditiis asperiores assumenda, ipsa magnamrepudiandae maxime. Totam numquam dolores nam maiores fuga, tempore iusto pariatur consectetur at!",
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
				{EXPERIENCES.map(({ timeline, position, company, description }) => {
					return (
						<li className="section-experience-positions-list-item">
							<header className="header-section-experience-positions-list-item">
								<span>{timeline}</span>
								<h4>{position}</h4>
								<div className="div-header-section-experience-positions-list-item-company-container">
									<ion-icon src="/media/icons/arrow-right.svg" />
									<span>{company}</span>
								</div>
							</header>
							<p>{description}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Experience;
