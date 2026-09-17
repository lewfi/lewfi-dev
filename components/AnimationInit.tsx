"use client"

import { useEffect } from "react";

export default function AnimationInit() {
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>(".reveal")];
    els.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity .7s ease, transform .7s ease";
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
          io.unobserve(target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
