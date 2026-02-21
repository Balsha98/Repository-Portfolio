// IMPORTED CUSTOM COMPONENTS
import Marquee from "../Marquee/Marquee";
// IMPORTED STYLESHEETS
import "./css/Statistics.css";

const Statistics = function () {
	return (
		<>
			<div className="div-statistics-container">
				<Marquee />
				<ul className="statistics-container-list">
					<li className="statistics-container-list-item">
						<span>2+</span>
						<p>Years of Experience</p>
					</li>
					<li className="statistics-container-list-item">
						<span>15+</span>
						<p>Projects Deployed</p>
					</li>
					<li className="statistics-container-list-item">
						<span>7</span>
						<p>Courses Tutored</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Statistics;
