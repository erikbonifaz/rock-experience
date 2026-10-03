export function NavigationItems() {
  return (
    <>
      <ul className="navigation-links">
        <li>
          <a href="#inicio" aria-current="location">
            Inicio
          </a>
        </li>
        <li><a href="#experiencias">Experiencias</a></li>
        <li><a href="#beneficios">Beneficios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a className="button-primary" href="#contacto">
        Participar
      </a>
    </>
  );
}
