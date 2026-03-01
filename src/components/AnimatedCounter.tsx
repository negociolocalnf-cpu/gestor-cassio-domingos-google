import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  target: string; // e.g. "100+", "5+", "98%"
  duration?: number;
}

const AnimatedCounter = ({ target, duration = 1800 }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const numericMatch = target.match(/(\d+)/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const end = parseInt(numericMatch[1], 10);
    const suffix = target.replace(/\d+/, "");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
};

export default AnimatedCounter;
