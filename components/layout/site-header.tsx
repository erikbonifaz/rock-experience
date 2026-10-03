"use client";

import { useEffect, useState } from "react";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationItems, navigationLinks, type NavigationHref } from "./navigation-items";

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
    const hrefById = new Map(
      sections.map(({ element, href }) => [element.id, href] as const),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!activeEntry) return;

        const href = hrefById.get(activeEntry.target.id);
        if (href) setActiveHref(href);
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
