// IMPORTED CORE MODULES
import { useState, useEffect } from "react";
// IMPORTED STYLESHEETS
import "./Loader.css";

const BOOT_LINES = [
    { text: "> initializing portfolio...", delay: 0 },
    { text: "> loading components...", delay: 400 },
    { text: "> compiling stylesheets...", delay: 800 },
    { text: "> mounting react tree...", delay: 1200 },
    { text: "> ready.", delay: 1600 },
];

const TOTAL_DURATION = 2600;

export default function Loader({ onComplete }) {
    const [visibleLines, setVisibleLines] = useState([]);
    const [exiting, setExiting] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Schedule each line to appear.
        const timers = BOOT_LINES.map(({ text, delay }) =>
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, text]);
            }, delay),
        );

        // Start exit animation.
        const exitTimer = setTimeout(() => {
            setExiting(true);
        }, TOTAL_DURATION);

        // Tell App we're done after exit animation finishes.
        const doneTimer = setTimeout(() => {
            setDone(true);
            onComplete?.();
        }, TOTAL_DURATION + 700); // 700ms matches the CSS exit transition.

        return () => {
            timers.forEach(clearTimeout);

            clearTimeout(exitTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete]);

    if (done) return null;

    return (
        <div className={`loader${exiting ? " loader--exiting" : ""}`}>
            <div className="loader__logo">BB_</div>
            <div className="loader__centre">
                <div className="loader__rig">
                    <span className="loader__bracket loader__bracket--left">{"{{"}</span>
                    <div className="loader__bar-wrap">
                        <div
                            className="loader__bar"
                            style={{
                                "--fill": `${(visibleLines.length / BOOT_LINES.length) * 100}%`,
                            }}
                        />
                    </div>
                    <span className="loader__bracket loader__bracket--right">{"}}"}</span>
                </div>
                <div className="loader__terminal">
                    {BOOT_LINES.map(({ text }, i) => (
                        <div key={i} className={`loader__line${visibleLines.includes(text) ? " loader__line--visible" : ""}`}>
                            {text}
                            {visibleLines[visibleLines.length - 1] === text && !exiting && <span className="loader__cursor" />}
                        </div>
                    ))}
                </div>
            </div>
            <div className="loader__footer">
                <span className="loader__pct">{Math.round((visibleLines.length / BOOT_LINES.length) * 100)}%</span>
                <span className="loader__footer-label">loading</span>
            </div>
        </div>
    );
}
