// IMPORTED STYLESHEETS
import "./css/Hero.css";
import "./css/Media.css";

const Hero = function () {
    return (
        <>
            <section className="section-hero-container">
                <header className="header-section-hero-container">
                    <span>Available for Hire</span>
                    <h1 className="header-section-hero-container-heading">
                        <span>Frontend</span>
                        <span>Engineer</span>
                    </h1>
                </header>
                <div className="div-section-hero-overview-container">
                    <p>I build fast, accessible interfaces that people actually enjoy using. 3+ years turning design into pixel-perfect, performant reality.</p>
                    <div className="div-section-hero-overview-actions-container">
                        <a href="#work">View Work</a>
                        <a href="#contact">Get In Touch</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
