"use client";

import { useEffect } from "react";

export default function ScrollExperience() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".motion-page");
    if (!page) return;

    document.documentElement.classList.add("motion-ready");
    const reveals = Array.from(page.querySelectorAll<HTMLElement>(".reveal"));
    const staggerItems = Array.from(page.querySelectorAll<HTMLElement>(".motion-stagger > *"));

    staggerItems.forEach((el, i) => {
      el.classList.add("motion-item");
      el.style.setProperty("--motion-delay", `${Math.min(i % 6, 5) * 70}ms`);
    });

    const observed = [...reveals, ...staggerItems];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observed.forEach((el) => observer.observe(el));

    let ticking = false;
    const updateScroll = () => {
      ticking = false;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / max, 1);
      document.documentElement.style.setProperty("--scroll-progress", progress.toString());
      page.style.setProperty("--page-scroll", `${Math.min(window.scrollY, 1000)}px`);
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
