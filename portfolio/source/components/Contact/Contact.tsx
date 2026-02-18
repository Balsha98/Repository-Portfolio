import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

export default function Contact() {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <div className="contact reveal scale-in" id="contact" ref={ref}>
            <h2 className="contact__heading">
                Let's build
                <br />
                something great.
                <span className="cursor" />
            </h2>
            <p className="contact__sub">Open to full-time roles &amp; select freelance projects.</p>
            <a href="mailto:balsa.bazovic@gmail.com" className="btn btn-dark">
                balsa.bazovic@gmail.com
            </a>
        </div>
    );
}
