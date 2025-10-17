import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
      });
    } else {
      controls.start({ opacity: 0, y: 50 }); // fade out when leaving view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
