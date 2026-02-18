import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import "./ScrollIndicator.css";

interface Section {
    id: string;
    label: string;
}

const SECTIONS: Section[] = [
    { id: "home", label: "Intro" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Exp" },
    { id: "contact", label: "Hire" },
];

export default function ScrollIndicator() {
    const progress = useScrollProgress();
    const pctRound = Math.round(progress * 100);

    const [activeIndex, setActiveIndex] = useState(0);
    const [tickPositions, setTickPositions] = useState<number[]>([]);
    const isMobile = useRef(false);

    // Compute section tick positions as % of total doc height
    const computePositions = () => {
        const docH = document.documentElement.scrollHeight;

        setTickPositions(
            SECTIONS.map(({ id }) => {
                const el = document.getElementById(id);
                return el ? (el.offsetTop / docH) * 100 : 0;
            }),
        );
    };

    useEffect(() => {
        computePositions();
        window.addEventListener("resize", computePositions);
        return () => window.removeEventListener("resize", computePositions);
    }, []);

    // Determine active section based on scroll
    useEffect(() => {
        const onScroll = () => {
            const scrollBottom = window.scrollY + window.innerHeight * 0.4;
            let active = 0;
            SECTIONS.forEach(({ id }, i) => {
                const el = document.getElementById(id);
                if (el && scrollBottom >= el.offsetTop) active = i;
            });
            setActiveIndex(active);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Track whether mobile
    useEffect(() => {
        const check = () => {
            isMobile.current = window.innerWidth <= 840;
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <>
            {/* ── Desktop: circuit bar ── */}
            <div className="circuit-bar" aria-hidden="true">
                <div className="circuit-bar__dot" />

                <div className="circuit-bar__rail">
                    {/* Filled glow portion */}
                    <div className="circuit-bar__fill" style={{ height: `${progress * 100}%` }} />

                    {/* Traveling node */}
                    <div className="circuit-bar__node" style={{ top: `${progress * 100}%` }} />

                    {/* Section ticks */}
                    {SECTIONS.map(({ label }, i) => (
                        <div key={label} className={`circuit-bar__tick${i === activeIndex ? " circuit-bar__tick--active" : ""}`} style={{ top: `${tickPositions[i] ?? 0}%` }}>
                            <span className="circuit-bar__tick-label">{label}</span>
                        </div>
                    ))}
                </div>

                <div className="circuit-bar__dot" />
                <div className="circuit-bar__pct">{pctRound}%</div>
            </div>

            {/* ── Mobile: bottom progress bar ── */}
            <div className="mobile-progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
        </>
    );
}
