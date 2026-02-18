import { useState, useEffect } from "react";

export function useScrollProgress(): number {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        let rafId: number;
        let ticking: boolean = false;

        const handleScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docH = document.documentElement.scrollHeight - window.innerHeight;
                    const pct = docH > 0 ? Math.min(1, scrollTop / docH) : 0;

                    setProgress(pct);

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);

            cancelAnimationFrame(rafId);
        };
    }, []);

    return progress;
}
