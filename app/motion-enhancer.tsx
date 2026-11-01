"use client";

import { useEffect } from "react";

const revealGroups = [
  ".about .section-number",
  ".about .section-inner > div:not(.section-number)",
  ".about aside",
  ".skills .heading",
  ".skills-grid > *",
  ".education .heading",
  ".education-card",
  ".projects .heading",
  ".project-grid > *",
  ".certificates .heading",
  ".certificate-grid > *",
  ".experience .heading",
  ".timeline-item",
  ".contact-inner > *",
];

const spotlightSelector = ".project-card, .skill-card, .certificate-card, .timeline-item";
const magneticSelector = ".actions .button, .nav-cta";

export default function MotionEnhancer() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const imageTargets = Array.from(document.querySelectorAll<HTMLElement>(".portrait-frame, [data-image-reveal]"));
    imageTargets.forEach((element) => { element.dataset.imageReveal = "hidden"; });
    const targets = [
      ...revealGroups.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector))),
      ...imageTargets,
    ];
    if (targets.length === 0) return;

    targets.forEach((element) => {
      if (!element.hasAttribute("data-image-reveal")) element.dataset.reveal = "hidden";
      element.style.setProperty("--reveal-delay", `${Math.min(Array.from(element.parentElement?.children ?? []).indexOf(element), 5) * 70}ms`);
    });
    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (element.hasAttribute("data-image-reveal")) element.dataset.imageReveal = "visible";
        else element.dataset.reveal = "visible";
        currentObserver.unobserve(element);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    targets.forEach((element) => observer.observe(element));

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cleanups: Array<() => void> = [];
    if (finePointer.matches) {
      document.querySelectorAll<HTMLElement>(spotlightSelector).forEach((element) => {
        let frame = 0;
        let pointerX = 0;
        let pointerY = 0;
        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          pointerX = event.clientX;
          pointerY = event.clientY;
          if (frame) return;
          frame = window.requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect();
            element.style.setProperty("--spot-x", `${pointerX - rect.left}px`);
            element.style.setProperty("--spot-y", `${pointerY - rect.top}px`);
            element.classList.add("spotlight-active");
            frame = 0;
          });
        };
        const leave = () => {
          if (frame) window.cancelAnimationFrame(frame);
          frame = 0;
          element.classList.remove("spotlight-active");
        };
        element.addEventListener("pointermove", move, { passive: true });
        element.addEventListener("pointerleave", leave, { passive: true });
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
          if (frame) window.cancelAnimationFrame(frame);
        });
      });

      document.querySelectorAll<HTMLElement>(magneticSelector).forEach((element) => {
        let frame = 0;
        let pointerX = 0;
        let pointerY = 0;
        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          pointerX = event.clientX;
          pointerY = event.clientY;
          if (frame) return;
          frame = window.requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect();
            const x = ((pointerX - rect.left) / rect.width - 0.5) * 7;
            const y = ((pointerY - rect.top) / rect.height - 0.5) * 7;
            element.style.setProperty("--mag-x", `${x.toFixed(2)}px`);
            element.style.setProperty("--mag-y", `${y.toFixed(2)}px`);
            element.classList.add("magnetic-active");
            frame = 0;
          });
        };
        const leave = () => {
          if (frame) window.cancelAnimationFrame(frame);
          frame = 0;
          element.classList.remove("magnetic-active");
          element.style.setProperty("--mag-x", "0px");
          element.style.setProperty("--mag-y", "0px");
        };
        element.addEventListener("pointermove", move, { passive: true });
        element.addEventListener("pointerleave", leave, { passive: true });
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
          if (frame) window.cancelAnimationFrame(frame);
        });
      });
    }

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
