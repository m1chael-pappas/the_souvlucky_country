"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Phase = "visible" | "armed" | "painting";

/**
 * Section heading that paints itself on left-to-right when it scrolls into
 * view — the signboard stroke that carries the homepage's motion language.
 *
 * The heading renders fully visible by default and is only hidden once the
 * client has confirmed it sits below the fold. A heading must never depend on
 * JavaScript to become readable, so every failure path (no observer, reduced
 * motion, an observer that never fires) resolves to plain visible text.
 */
export default function PaintHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    // Already on screen at mount: paint now rather than hiding it first.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setPhase("painting");
      return;
    }

    setPhase("armed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("painting");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    // Failsafe: if the observer never reports, reveal it anyway.
    const failsafe = window.setTimeout(() => setPhase("painting"), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <h2
      ref={ref}
      className={`${className} ${phase === "painting" ? "paint-on" : ""}`}
      style={
        phase === "armed"
          ? { clipPath: "inset(-30% 100% -30% -10%)" }
          : undefined
      }
    >
      {children}
    </h2>
  );
}
