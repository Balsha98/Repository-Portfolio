// IMPORTED STYLESHEETS
import "./assets/styles/globals.css";
// IMPORTED CUSTOMER MODULES
import GlowOrbs from "./components/GlowOrbs/GlowOrbs";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Stats from "./components/Stats/Stats";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Nav />
            <ScrollIndicator />
            <GlowOrbs />
            <main>
                <Hero />
                <Marquee />
                <Stats />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
