'use client';


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children, delay = 0, direction = "up" }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    fallbackInView: true,
  });

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -50 };
      case "right": return { opacity: 0, x: 50 };
      case "up": return { opacity: 0, y: 50 };
      case "down": return { opacity: 0, y: -50 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
