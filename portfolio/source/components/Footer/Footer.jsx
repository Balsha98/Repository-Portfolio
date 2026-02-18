// IMPORTED STYLESHEETS
import "./Footer.css";
// IMPORTED CUSTOM MODULES
import { useScrollReveal } from "../../assets/hooks/useScrollReveal";

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/Balsha98" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/balsha-bazovich" },
];

export default function Footer() {
    const ref = useScrollReveal();

    return (
        <footer className="footer reveal" ref={ref}>
            <span className="footer__copy">© {new Date().getFullYear()} Balša Bazović. All rights reserved.</span>
            <nav className="footer__social" aria-label="Social links">
                {SOCIAL_LINKS.map(({ label, href }) => (
                    <a key={label} href={href} className="footer__social-link" target="_blank">
                        {label}
                    </a>
                ))}
            </nav>
        </footer>
    );
}
