// IMPORTED STYLESHEETS
import "./css/Marquee.css";
// import "./css/Media.css";

const TECH_ITEMS = ["Java", "HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind", "JavaScript", "React.js", "Node.js", "PHP", "MySQL", "NoSQL", "MongoDB", "Figma"];
const DOUBLED_TECH_ITEMS = [...TECH_ITEMS, ...TECH_ITEMS];

const Marquee = function () {
	return (
		<div className="div-marquee-container">
			<ul className="marquee-container-list">
				{DOUBLED_TECH_ITEMS.map((item, i) => {
					return (
						<li key={i} className="marquee-container-list-item">
							<p>
								<span /> {item}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Marquee;
