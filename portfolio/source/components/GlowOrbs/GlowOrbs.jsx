// IMPORTED CORE MODULES
import { useEffect, useRef } from "react";
// IMPORTED STYLESHEETS
import "./GlowOrbs.css";

export default function GlowOrbs() {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${x * 45}px, ${y * 45}px)`;

            if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${-x * 35}px, ${-y * 35}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div className="glow-orb glow-orb--1" ref={orb1Ref} aria-hidden="true" />
            <div className="glow-orb glow-orb--2" ref={orb2Ref} aria-hidden="true" />
        </>
    );
}
