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

const ACCENT_BG_INDEX = SECTIONS.length - 1;

export default function ScrollIndicator() {
    const progress = useScrollProgress();
    const pctRound = Math.round(progress * 100);

    const [activeIndex, setActiveIndex] = useState(0);
    const [tickPositions, setTickPositions] = useState<number[]>([]);
    const [railHeight, setRailHeight] = useState(0);

    const railRef = useRef<HTMLDivElement>(null);

    // Measure the real pixel height of the rail element
    const measureRail = () => {
        if (railRef.current) setRailHeight(railRef.current.getBoundingClientRect().height);
    };

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
        measureRail();

        computePositions();

        const onResize = () => {
            measureRail();
            computePositions();
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Active section — throttled with rAF
    useEffect(() => {
        let ticking = false;
        let rafId: number;

        const onScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(() => {
                    const scrollBottom = window.scrollY + window.innerHeight * 0.4;
                    let active = 0;
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

    // The node should travel from NODE_RADIUS px (top centre of rail)
    // to railHeight - NODE_RADIUS px (bottom centre of rail).
    // Total travel distance = railHeight - NODE_RADIUS * 2
    const travelPx = Math.max(0, railHeight);

    return (
        <>
            {/* ── Desktop: circuit bar ── */}
            <div className={`circuit-bar${onAccentBg ? " circuit-bar--on-accent" : ""}`} aria-hidden="true">
                <div className="circuit-bar__dot" />

                <div
                    className="circuit-bar__rail"
                    ref={railRef}
                    style={
                        {
                            "--progress": progress,
                            "--travel-px": `${travelPx}px`,
                        } as React.CSSProperties
                    }
                >
                    {/* Fill bar */}
                    <div className="circuit-bar__fill" />

                    {/* Traveling node */}
                    <div className="circuit-bar__node" />

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
            <div className="mobile-progress" style={{ "--progress": progress } as React.CSSProperties} aria-hidden="true" />
        </>
    );
}
