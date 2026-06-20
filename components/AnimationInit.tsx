"use client"

import { useEffect } from "react";

export default function AnimationInit() {
  useEffect(() => {
    // Magnetic
    document.querySelectorAll<HTMLElement>(".mag").forEach(el => {
      el.addEventListener("pointermove", (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${mx * 0.3}px, ${my * 0.4}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = "translate(0,0)"; });
    });

    // Tilt
    document.querySelectorAll<HTMLElement>(".tilt").forEach(el => {
      el.addEventListener("pointermove", (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1100px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)";
      });
    });

    // Scroll reveal
    const els = [...document.querySelectorAll<HTMLElement>(".reveal")];
    els.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = (el.style.transform || "") + " translateY(26px)";
      el.style.transition = "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const target = en.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = target.style.transform.replace(" translateY(26px)", "");
          io.unobserve(target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));

    // Experience row hover
    document.querySelectorAll<HTMLElement>(".exprow").forEach(row => {
      row.addEventListener("pointerenter", () => { row.style.background = "rgba(255,255,255,0.02)"; });
      row.addEventListener("pointerleave", () => { row.style.background = "transparent"; });
    });

    return () => io.disconnect();
  }, []);

  return null;
}
