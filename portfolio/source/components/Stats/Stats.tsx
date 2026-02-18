import { useEffect, useRef, useState } from 'react';
import './Stats.css';

interface StatItem {
  count: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { count: 6,  suffix: '+', label: 'Years of Experience' },
  { count: 40, suffix: '+', label: 'Projects Shipped'    },
  { count: 12, suffix: '',  label: 'Happy Clients'       },
];

function useCounter(target: number, duration = 1400, triggered: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();

    const update = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [triggered, target, duration]);

  return value;
}

function StatCard({ count, suffix, label }: StatItem) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const value = useCounter(count, 1400, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat" ref={ref}>
      <span className="stat__num">{value}{suffix}</span>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
