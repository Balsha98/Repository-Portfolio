// IMPORTED CORE COMPONENTS
import { useEffect, useState } from "react";
// IMPORTED CUSTOM COMPONENTS
import useTheme from "../../assets/hooks/useTheme";
// IMPORTED STYLESHEETS
import "./css/Nav.css";
import "./css/Media.css";

const LINKS = [
	{ link: "#work", label: "Work", external: false },
	{ link: "#skills", label: "Skills", external: false },
	{ link: "#experience", label: "Experience", external: false },
	{ link: "#contact", label: "Contact", external: false },
	{ link: "/documents/resume.pdf", label: "Resume", external: true },
];

const Nav = function () {
	const [isScrolling, setIsScrolling] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [viewMobileNav, setViewMobileNav] = useState(false);
	const [currentTheme, onToggleTheme] = useTheme();

	const handleScrollToTop = () => window.scrollTo({ top: 0 });

	const handleSetViewMobileNav = () => setViewMobileNav((v) => !v);

	useEffect(() => {
		const onIsScrolling = () => {
			setIsScrolling(window.scrollY > 32);

			const currentWindowY = window.scrollY;
			const windowViewportHeight = window.innerHeight;
			const html = document.documentElement;

			const totalPageHeight = html.scrollHeight - windowViewportHeight;
			const percentage = Math.floor((currentWindowY / totalPageHeight) * 100);

			setScrollProgress(percentage);
		};

		window.addEventListener("scroll", onIsScrolling, { passive: true });

		return () => window.removeEventListener("scroll", onIsScrolling);
	}, []);

	return (
		<div className={`div-main-navbar-container${isScrolling ? " fixed" : ""}`}>
			<div className="div-main-navbar-scroll-container" style={{ width: `${scrollProgress}%` }} />
			<div className={`div-main-edge-container${isScrolling ? " fixed" : ""}`}>
				<h2 onClick={handleScrollToTop}>BB_</h2>
				<nav className={`main-navbar${viewMobileNav ? " active" : ""}`}>
					<ul className="main-navbar-link-list">
						{LINKS.map(({ link, label, external }, i) => {
							return (
								<li key={i} className="main-navbar-link-list-item" onClick={handleSetViewMobileNav}>
									<a href={link} target={`_${external ? "blank" : "self"}`}>
										{label}
									</a>
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
