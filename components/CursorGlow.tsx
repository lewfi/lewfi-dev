"use client"

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tx = 0, ty = 0, x = 0, y = 0;
    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("pointermove", onMove);
    let rafId: number;
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate(${x}px, ${y}px)`;
      rafId = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "520px",
        height: "520px",
        margin: "-260px 0 0 -260px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.10), transparent 64%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
    />
  );
}
