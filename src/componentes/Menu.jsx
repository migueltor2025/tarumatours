const Menu = () => {
  return (
    <nav className="menu menu-inferior">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#tours">Tours</a></li>
        <li>
          <a href="#catalogo" onClick={() => window.open("catalogo.html", "_blank")}>
            Catálogo de Souvenirs
          </a>
        </li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
