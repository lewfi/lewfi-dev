"use client"

import { useEffect, useRef } from "react";

const CHIPS = [
  { t: "TypeScript",  c: "16,185,129",  fx: 0.09, fy: 0.26 },
  { t: "Python",      c: "56,189,248",  fx: 0.80, fy: 0.20 },
  { t: "React",       c: "139,92,246",  fx: 0.15, fy: 0.66, solid: true },
  { t: "Next.js",     c: "251,191,36",  fx: 0.45, fy: 0.78 },
  { t: "PostgreSQL",  c: "56,189,248",  fx: 0.74, fy: 0.70 },
  { t: "scikit-learn",c: "251,113,133", fx: 0.27, fy: 0.42 },
  { t: "Tailwind",    c: "139,92,246",  fx: 0.63, fy: 0.36 },
  { t: "NumPy",       c: "251,191,36",  fx: 0.86, fy: 0.50 },
  { t: "GitHub",      c: "16,185,129",  fx: 0.34, fy: 0.20 },
  { t: "LinkedIn",    c: "56,189,248",  fx: 0.88, fy: 0.36 },
  { t: "Spotify",     c: "16,185,129",  fx: 0.06, fy: 0.52 },
];

export default function PhysicsChips() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const W = stage.clientWidth, H = stage.clientHeight;
    const base =
      "position:absolute;left:0;top:0;" +
      "font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:500;" +
      "padding:11px 18px;border-radius:999px;cursor:grab;user-select:none;" +
      "touch-action:none;white-space:nowrap;will-change:transform;";

    const objs = CHIPS.map(ch => {
      const el = document.createElement("div");
      el.textContent = ch.t;
      el.style.cssText = ch.solid
        ? base + `color:#04140e;background:rgb(${ch.c});border:1px solid rgb(${ch.c});box-shadow:0 8px 26px -8px rgba(${ch.c},0.7);`
        : base + `color:rgb(${ch.c});background:rgba(${ch.c},0.12);border:1px solid rgba(${ch.c},0.4);backdrop-filter:blur(6px);box-shadow:0 8px 22px -10px rgba(0,0,0,0.6);`;
      stage.appendChild(el);
      const w = el.offsetWidth, h = el.offsetHeight;
      const x = Math.max(0, Math.min(W - w, ch.fx * W));
      const y = Math.max(0, Math.min(H - h, ch.fy * H));
      el.style.transform = `translate(${x}px, ${y}px)`;
      return { el, x, y, w, h, vx: 0, vy: 0, drag: false, ox: 0, oy: 0 };
    });

    let last = { x: 0, y: 0 }, lastT = 0;
    objs.forEach(o => {
      o.el.addEventListener("pointerdown", (e: PointerEvent) => {
        o.drag = true; o.vx = 0; o.vy = 0;
        o.ox = e.clientX - o.x; o.oy = e.clientY - o.y;
        last = { x: e.clientX, y: e.clientY }; lastT = performance.now();
        o.el.setPointerCapture(e.pointerId);
        o.el.style.cursor = "grabbing"; o.el.style.zIndex = "30";
      });
      o.el.addEventListener("pointermove", (e: PointerEvent) => {
        if (!o.drag) return;
        const now = performance.now(), dt = Math.max(12, now - lastT);
        o.vx = (e.clientX - last.x) / dt * 15;
        o.vy = (e.clientY - last.y) / dt * 15;
        o.x = e.clientX - o.ox; o.y = e.clientY - o.oy;
        last = { x: e.clientX, y: e.clientY }; lastT = now;
      });
      const release = () => { if (o.drag) { o.drag = false; o.el.style.cursor = "grab"; o.el.style.zIndex = ""; } };
      o.el.addEventListener("pointerup", release);
      o.el.addEventListener("pointercancel", release);
    });

    const FR = 0.986, BOUNCE = 0.72;
    let rafId: number;
    const tick = () => {
      const w2 = stage.clientWidth, h2 = stage.clientHeight;
      objs.forEach(o => {
        if (!o.drag) {
          o.x += o.vx; o.y += o.vy; o.vx *= FR; o.vy *= FR;
          if (Math.abs(o.vx) < 0.02) o.vx = 0;
          if (Math.abs(o.vy) < 0.02) o.vy = 0;
          if (o.x < 0)          { o.x = 0;          o.vx *= -BOUNCE; }
          if (o.x + o.w > w2)   { o.x = w2 - o.w;  o.vx *= -BOUNCE; }
          if (o.y < 0)          { o.y = 0;          o.vy *= -BOUNCE; }
          if (o.y + o.h > h2)   { o.y = h2 - o.h;  o.vy *= -BOUNCE; }
        }
        o.el.style.transform = `translate(${o.x}px, ${o.y}px)`;
      });
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      objs.forEach(o => o.el.remove());
    };
  }, []);

  return <div ref={stageRef} style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }} />;
}
