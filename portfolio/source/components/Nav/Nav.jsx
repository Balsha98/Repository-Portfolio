// IMPORTED CORE MODULES
import { useState, useEffect } from "react";
// IMPORTED CUSTOM MODULES
import ThemeToggle from "../ThemeToggle/ThemeToggle";
// IMPORTED STYLESHEETS
import "./Nav.css";

const NAV_LINKS = [
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Nav({ theme, onThemeToggle }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => (document.body.style.overflow = "");
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
                <div className="nav__logo">BB_</div>
                <ul className="nav__links">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} className="nav__link">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav__right">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                    <button className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
            <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
                <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
                    ✕
                </button>
                <div className="mobile-menu__theme">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                </div>
                {NAV_LINKS.map(({ label, href }) => (
                    <a key={href} href={href} className="mobile-menu__link" onClick={closeMenu}>
                        {label}
                    </a>
                ))}
            </div>
        </>
    );
}
