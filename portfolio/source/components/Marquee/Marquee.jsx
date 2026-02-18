import { useScrollReveal } from "../../assets/hooks/useScrollReveal";
import "./Marquee.css";

const ITEMS = ["React", "JavaScript", "Next.js", "Vue 3", "Node.js", "GraphQL", "D3.js", "WebGL", "Figma", "CI/CD", "Accessibility"];

export default function Marquee() {
    const ref = useScrollReveal();
    const doubled = [...ITEMS, ...ITEMS];

    return (
        <div className="marquee-wrap reveal" ref={ref}>
            <div className="marquee-track">
                {doubled.map((item, i) => (
                    <span key={i} className="marquee-item">
                        <span className="marquee-dot">✦</span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
