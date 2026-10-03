export const navigationLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function NavigationItems() {
  return (
    <>
      <ul className="navigation-links">
        {navigationLinks.map(({ label, href }, index) => (
          <li key={href}>
            <a href={href} aria-current={index === 0 ? "location" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a className="button-primary" href="#contacto">
        Participar
      </a>
    </>
  );
}
