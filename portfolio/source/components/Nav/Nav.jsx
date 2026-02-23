// IMORTED CORE COMPONENTS
import { useEffect, useState } from "react";
// IMORTED CUSTOM COMPONENTS
import useTheme from "../../assets/hooks/useTheme";
// IMORTED STYLESHEETS
import "./css/Nav.css";
import "./css/Media.css";

const LINKS = [
	{ link: "#work", label: "Work" },
	{ link: "#skills", label: "Skills" },
	{ link: "#experience", label: "Experience" },
	{ link: "#contact", label: "Contact" },
];

const Nav = function () {
	const [isScrolling, setIsScrolling] = useState(false);
	const [currentTheme, onToggleTheme] = useTheme();
	const [viewMobileNav, setViewMobileNav] = useState(false);

	const handleScrollToTop = () => window.scrollTo({ top: 0 });

	const handleSetViewMobileNav = () => setViewMobileNav((v) => !v);

	useEffect(() => {
		const onIsScrolling = () => setIsScrolling(window.scrollY > 32);

		window.addEventListener("scroll", onIsScrolling, { passive: true });

		return () => window.removeEventListener("scroll", onIsScrolling);
	}, []);

	return (
		<div className={`div-main-navbar-container${isScrolling ? " fixed" : ""}`}>
			<div className={`div-main-edge-container${isScrolling ? " fixed" : ""}`}>
				<h2 onClick={handleScrollToTop}>BB_</h2>
				<nav className={`main-navbar${viewMobileNav ? " active" : ""}`}>
					<ul className="main-navbar-link-list">
						{LINKS.map(({ link, label }, i) => {
							return (
								<li key={i} className="main-navbar-link-list-item">
									<a href={link}>{label}</a>
								</li>
							);
						})}
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
