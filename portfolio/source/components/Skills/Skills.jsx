// IMPORTED STYLESHEETS
import "./css/Skills.css";
import "./css/Media.css";

const SKILLS = [
	{
		title: "Languages",
		stack: ["Java", "Python", "JavaScript", "PHP"],
	},
	{
		title: "Frameworks",
		stack: ["React.js / Next.js", "Node.js / Nest.js", "React Native", "SwiftUI"],
	},
	{
		title: "Tooling",
		stack: ["Vite", "Claude / Cursor", "CI/CD Pipelines", "GitHub"],
	},
	{
		title: "Design",
		stack: ["Figma", "Photoshop / Illustrator", "Lucidchart", "Canva"],
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
