"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".motion-page");
    document.documentElement.classList.remove("motion-ready");
    if (!page) return;

    const reveals = Array.from(page.querySelectorAll<HTMLElement>(".reveal"));
    const staggerItems = Array.from(page.querySelectorAll<HTMLElement>(".motion-stagger > *"));
    const observed = Array.from(new Set([...reveals, ...staggerItems]));

    observed.forEach((el) => {
      el.classList.remove("is-visible");
      el.classList.remove("motion-item");
      el.style.removeProperty("--motion-delay");
    });

    staggerItems.forEach((el, i) => {
      el.classList.add("motion-item");
      el.style.setProperty("--motion-delay", `${Math.min(i % 6, 5) * 70}ms`);
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    observed.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

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
      document.documentElement.style.setProperty("--scroll-progress", "0");
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
