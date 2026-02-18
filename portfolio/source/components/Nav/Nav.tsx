import { useState, useEffect } from "react";
import "./Nav.css";

const NAV_LINKS = [
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
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

                <button className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Mobile full-screen menu */}
            <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
                {/* Close button */}
                <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
                    ✕
                </button>

                {NAV_LINKS.map(({ label, href }) => (
                    <a key={href} href={href} className="mobile-menu__link" onClick={closeMenu}>
                        {label}
                    </a>
                ))}
            </div>
        </>
    );
}
