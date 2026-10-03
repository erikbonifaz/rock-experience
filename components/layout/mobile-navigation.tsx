"use client";

import {
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export function MobileNavigation({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <div className="mobile-navigation" onKeyDown={handleKeyDown}>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-links"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span>{isOpen ? "Cerrar" : "Menú"}</span>
        <span className="menu-symbol" aria-hidden="true" />
      </button>
      <nav
        id="mobile-navigation-links"
        className="mobile-navigation-panel"
        aria-label="Navegación principal móvil"
        hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </nav>
    </div>
  );
}
