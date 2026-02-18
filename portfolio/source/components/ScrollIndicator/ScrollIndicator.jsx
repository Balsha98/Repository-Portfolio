// IMPORTED CORE MODULES
import { useEffect, useRef, useState } from "react";
// IMPORTED CUSTOM MODULES
import { useScrollProgress } from "../../assets/hooks/useScrollProgress";
// IMPORTED STYLESHEETS
import "./ScrollIndicator.css";

const SECTIONS = [
    { id: "home", label: "Intro" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Exp" },
    { id: "contact", label: "Hire" },
];

const TICK_POSITIONS = SECTIONS.map((_, i) => (i / (SECTIONS.length - 1)) * 100);

const ACCENT_BG_INDEX = SECTIONS.length - 1;
const NODE_RADIUS = 4.5;

export default function ScrollIndicator() {
    const progress = useScrollProgress();
    const pctRound = Math.round(progress * 100);

    const [activeIndex, setActiveIndex] = useState(0);
    const [railHeight, setRailHeight] = useState(0);

    const railRef = useRef(null);

    const measureRail = () => {
        if (railRef.current) setRailHeight(railRef.current.getBoundingClientRect().height);
    };

    useEffect(() => {
        measureRail();

        const onResize = () => measureRail();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Active section detection — rAF throttled
    useEffect(() => {
        let rafId;
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(() => {
                    let active = 0;

                    const scrollBottom = window.scrollY + window.innerHeight * 0.4;

                    SECTIONS.forEach(({ id }, i) => {
                        const el = document.getElementById(id);
                        if (el && scrollBottom >= el.offsetTop) active = i;
                    });

                    setActiveIndex(active);

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const onAccentBg = activeIndex === ACCENT_BG_INDEX;
    const travelPx = Math.max(0, railHeight);

    return (
        <>
            <div className={`circuit-bar${onAccentBg ? " circuit-bar--on-accent" : ""}`} aria-hidden="true">
                <div className="circuit-bar__dot" />

                <div
                    className="circuit-bar__rail"
                    ref={railRef}
                    style={{
                        "--progress": progress,
                        "--travel-px": `${travelPx}px`,
                    }}
                >
                    <div className="circuit-bar__fill" />
                    <div className="circuit-bar__node" />

                    {SECTIONS.map(({ label }, i) => (
                        <div key={label} className={`circuit-bar__tick${i === activeIndex ? " circuit-bar__tick--active" : ""}`} style={{ top: `${TICK_POSITIONS[i] ?? 0}%` }}>
                            <span className="circuit-bar__tick-label">{label}</span>
                        </div>
                    ))}
                </div>

                <div className="circuit-bar__dot" />
                <div className="circuit-bar__pct">{pctRound}%</div>
            </div>

            <div className="mobile-progress" style={{ "--progress": progress }} aria-hidden="true" />
        </>
    );
}
