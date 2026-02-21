// IMORTED CUSTOM COMPONENTS
import useTheme from "../../assets/hooks/useTheme";
// IMORTED STYLESHEETS
import "./Nav.css";

const Nav = function () {
	const { currentTheme, onToggleTheme } = useTheme();

	return (
		<div className="div-main-navbar-container">
			<h2>BB_</h2>
			<nav className="main-navbar">
				<ul className="main-navbar-link-list">
					<li className="main-navbar-link-list-item">
						<a href="#work">Work</a>
					</li>
					<li className="main-navbar-link-list-item">
						<a href="#skills">Skills</a>
					</li>
					<li className="main-navbar-link-list-item">
						<a href="#experience">Experience</a>
					</li>
					<li className="main-navbar-link-list-item">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
			<button onClick={onToggleTheme}>
				<ion-icon src={`/media/icons/${currentTheme === "light" ? "moon" : "sun"}.svg`} />
			</button>
		</div>
	);
};

export default Nav;
