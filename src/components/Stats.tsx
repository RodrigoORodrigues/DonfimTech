import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const CountUp = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return <span ref={ref} className="count-up">{count}</span>;
};

export default function Stats() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7 }}
      className="stats-bar"
    >
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">
            <CountUp target={50} />
            <span>+</span>
          </div>
          <div className="stat-label">Projetos Entregues</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">
            <CountUp target={100} />
            <span>%</span>
          </div>
          <div className="stat-label">Clientes Satisfeitos</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">
            <CountUp target={3} />
            <span>+</span>
          </div>
          <div className="stat-label">Anos de Experiência</div>
        </div>
      </div>
    </motion.div>
  );
}
