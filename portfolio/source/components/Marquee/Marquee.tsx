import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Marquee.css';

const ITEMS = [
  'React', 'TypeScript', 'Next.js', 'Vue 3', 'Node.js',
  'GraphQL', 'D3.js', 'WebGL', 'Figma', 'CI/CD', 'Accessibility',
];

export default function Marquee() {
  const ref = useScrollReveal<HTMLDivElement>();

  // Duplicate items for seamless loop
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
