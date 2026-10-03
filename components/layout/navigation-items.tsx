import type { MouseEvent } from "react";

export const navigationLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type NavigationHref = (typeof navigationLinks)[number]["href"];

interface NavigationItemsProps {
  activeHref: NavigationHref;
  onNavigate: (href: NavigationHref) => void;
}

export function NavigationItems({ activeHref, onNavigate }: NavigationItemsProps) {
  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: NavigationHref,
  ) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    onNavigate(href);
  }

  return (
    <>
      <ul className="navigation-links">
        {navigationLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              aria-current={href === activeHref ? "location" : undefined}
              onClick={(event) => handleNavigation(event, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        className="button-primary"
        href="#contacto"
        onClick={(event) => handleNavigation(event, "#contacto")}
      >
        Participar
      </a>
    </>
  );
}
