// IMPORTED CORE MODULES
import { useState } from "react";
// IMPORTED CUSTOM MODULES
import { useTheme } from "./assets/hooks/useTheme";
import Loader from "./components/Loader/Loader";
import GlowOrbs from "./components/GlowOrbs/GlowOrbs";
import Nav from "./components/Nav/Nav";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Stats from "./components/Stats/Stats";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// IMPORTED STYLESHEETS
import "./assets/styles/globals.css";

export default function App() {
    const { theme, toggle } = useTheme();
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <Loader onComplete={() => setLoaded(true)} />
            <div className={`app-content${loaded ? " app-content--visible" : ""}`}>
                <GlowOrbs />
                <Nav theme={theme} onThemeToggle={toggle} />
                <ScrollIndicator />
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
            </div>
        </>
    );
}
