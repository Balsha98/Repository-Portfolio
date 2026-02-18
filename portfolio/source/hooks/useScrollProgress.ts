import { useState, useEffect } from "react";

export function useScrollProgress(): number {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        let rafId: number;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docH = document.documentElement.scrollHeight - window.innerHeight;
                    setProgress(docH > 0 ? Math.min(1, scrollTop / docH) : 0);
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
