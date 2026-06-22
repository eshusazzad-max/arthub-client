"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  // Glow position
  const glowMouseX = useMotionValue(0);
  const glowMouseY = useMotionValue(0);

  // Dot position
  const dotMouseX = useMotionValue(0);
  const dotMouseY = useMotionValue(0);

  // Smooth glow
  const glowX = useSpring(glowMouseX, {
    stiffness: 80,
    damping: 20,
  });

  const glowY = useSpring(glowMouseY, {
    stiffness: 80,
    damping: 20,
  });

  // Fast dot
  const dotX = useSpring(dotMouseX, {
    stiffness: 500,
    damping: 35,
  });

  const dotY = useSpring(dotMouseY, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Glow follows with offset
      glowMouseX.set(e.clientX - 175);
      glowMouseY.set(e.clientY - 175);

      // Dot stays exactly on cursor
      dotMouseX.set(e.clientX);
      dotMouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-violet-500/25 to-cyan-500/25 blur-[120px]"
      />

      {/* Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: -4,
          translateY: -4,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] w-3 h-3 rounded-full from-violet-500/30 to-cyan-500/30 bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
      />
    </>
  );
}