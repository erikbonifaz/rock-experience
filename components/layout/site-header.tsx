"use client";

import { useEffect, useState } from "react";
import { navigationLinks } from "@/data/navigation";
import type { NavigationHref } from "@/types/navigation";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationItems } from "./navigation-items";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<NavigationHref>("#inicio");

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = navigationLinks.flatMap(({ href }) => {
      const element = document.getElementById(href.slice(1));
      return element ? [{ element, href }] : [];
    });

    if (!sections.length) return;

    const headerHeight = document
      .querySelector(".site-header")
      ?.getBoundingClientRect().height ?? 80;
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!activeEntry) return;

        const activeSection = sections.find(
          ({ element }) => element === activeEntry.target,
        );
        if (activeSection) setActiveHref(activeSection.href);
      },
      {
        rootMargin: `-${Math.ceil(headerHeight)}px 0px -70% 0px`,
        threshold: 0,
      },
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function focusNavigationTarget(href: NavigationHref) {
    const section = document.getElementById(href.slice(1));
    const headingId = section?.getAttribute("aria-labelledby");
    const focusTarget = headingId ? document.getElementById(headingId) : section;

    window.requestAnimationFrame(() => {
      focusTarget?.focus({ preventScroll: true });
    });
  }

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="page-container header-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="ROCK EXPERIENCE, inicio"
          onClick={() => focusNavigationTarget("#inicio")}
        >
          <span>ROCK</span>
          <span>EXPERIENCE</span>
        </a>
        <nav className="desktop-navigation" aria-label="Navegación principal">
          <NavigationItems
            activeHref={activeHref}
            onNavigate={focusNavigationTarget}
          />
        </nav>
        <MobileNavigation>
          <NavigationItems
            activeHref={activeHref}
            onNavigate={focusNavigationTarget}
          />
        </MobileNavigation>
      </div>
    </header>
  );
}
