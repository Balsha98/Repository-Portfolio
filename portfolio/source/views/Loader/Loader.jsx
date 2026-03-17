// IMPORTED CORE COMPONENTS
import { useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "./css/Loader.css";
import "./css/Media.css";

const LOADING_STEPS = [
    { message: "> initializing portfolio...", delay: 0 },
    { message: "> loading components...", delay: 600 },
    { message: "> compiling stylesheets...", delay: 1200 },
    { message: "> mounting react tree...", delay: 1800 },
    { message: "> ready.", delay: 2400 },
];

const TOTAL_DELAY = 3600;

const Loader = function ({ isLoading, onSetIsLoading }) {
    const [loadedSteps, setLoadedSteps] = useState([]);

    const loadingPercentage = Math.min(loadedSteps.length / LOADING_STEPS.length) * 100;

    useEffect(() => {
        const timeouts = LOADING_STEPS.map((step) => {
            return setTimeout(() => setLoadedSteps((v) => [...v, step]), step.delay);
        });

        const finalTimeout = setTimeout(() => onSetIsLoading(false), TOTAL_DELAY);

        return () => {
            timeouts.forEach((t) => clearTimeout(t));

            clearTimeout(finalTimeout);
        };
    }, [onSetIsLoading]);

    return (
        <div className={`div-loader-container${!isLoading ? " hidden" : ""}`}>
            <header className="header-loader-container">
                <h2>BB_</h2>
                <div className="div-loader-content-container">
                    <div className="div-loader-content-loading-container">
                        <span>{"{{"}</span>
                        <div className="div-loader-content-loading-track">
                            <div className="div-loader-content-loading-thumb" style={{ width: `${loadingPercentage}%` }} />
                        </div>
                        <span>{"}}"}</span>
                    </div>
                    <ul className="loader-content-loading-steps-list">
                        {loadedSteps.map(({ message }, i, arr) => {
                            const isCurrStep = i + 1 === arr.length;

                            return (
                                <li key={i} className="loader-content-loading-steps-list-item">
                                    <p className={isCurrStep ? "highlight" : ""}>{message}</p>
                                    <span className={isCurrStep ? "active" : ""} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </header>
            <div className="div-loader-indicator-container">
                <span>{loadingPercentage}%</span>
                <p>Loading</p>
            </div>
        </div>
    );
};

export default Loader;
