import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: options.threshold ?? 0.1,
                rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
            },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return ref;
}

/** Observe multiple children at once. */
export function useScrollRevealChildren<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
    const containerRef = useRef<T>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const targets = container.querySelectorAll(".reveal, .stagger");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: options.threshold ?? 0.1,
                rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
            },
        );

        targets.forEach((t) => observer.observe(t));

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return containerRef;
}
