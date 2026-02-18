// IMPORTED STYLESHEETS
import "./Contact.css";
// IMPORTED CUSTOM MODULES
import { useScrollReveal } from "../../assets/hooks/useScrollReveal";

export default function Contact() {
    const ref = useScrollReveal();

    return (
        <div className="contact reveal scale-in" id="contact" ref={ref}>
            <h2 className="contact__heading">
                Let's build
                <br />
                something great.
                <span className="cursor" />
            </h2>
            <p className="contact__sub">Open to full-time roles &amp; contract opportunities.</p>
            <a href="mailto:balsa.bazovic@gmail.com" className="btn btn-dark">
                balsa.bazovic@gmail.com
            </a>
        </div>
    );
}
