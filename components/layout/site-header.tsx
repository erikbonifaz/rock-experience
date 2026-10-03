"use client";

import { useEffect, useState } from "react";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationItems } from "./navigation-items";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="page-container header-inner">
        <a className="wordmark" href="#inicio" aria-label="ROCK EXPERIENCE, inicio">
          <span>ROCK</span>
          <span>EXPERIENCE</span>
        </a>
        <nav className="desktop-navigation" aria-label="Navegación principal">
          <NavigationItems />
        </nav>
        <MobileNavigation><NavigationItems /></MobileNavigation>
      </div>
    </header>
  );
}
