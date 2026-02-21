// IMORTED CORE COMPONENTS
import { useState } from "react";
// IMORTED CUSTOM COMPONENTS
import useTheme from "../../assets/hooks/useTheme";
// IMORTED STYLESHEETS
import "./css/Nav.css";
import "./css/Media.css";

const Nav = function () {
	const [currentTheme, onToggleTheme] = useTheme();
	const [viewMobileNav, setViewMobileNav] = useState(false);

	const handleSetViewMobileNav = () => setViewMobileNav((v) => !v);

	return (
		<div className="div-main-navbar-container">
			<div className="div-main-edge-container">
				<h2>BB_</h2>
				<nav className={`main-navbar${viewMobileNav ? " active" : ""}`}>
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
				<div className="div-main-navbar-actions-container">
					<button onClick={onToggleTheme}>
						<ion-icon src={`/media/icons/${currentTheme === "light" ? "moon" : "sun"}.svg`} />
					</button>
					<button onClick={handleSetViewMobileNav}>
						<ion-icon src={`/media/icons/${viewMobileNav ? "x" : "menu"}.svg`} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Nav;
