const Menu = ({ onNavigateToHome, onNavigateToStore, cartCount }) => {
  return (
    <nav className="menu menu-inferior">
      <ul>
        <li>
          <a href="#inicio" onClick={onNavigateToHome}>Inicio</a>
        </li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#tours">Tours</a></li>

        {/* Ahora Catálogo abre la tienda interna */}
        <li>
          <a href="#catalogo" onClick={onNavigateToStore}>
            Catálogo de Souvenirs
          </a>
        </li>

        <li><a href="#contacto">Contacto</a></li>

        {/* Opcional: mostrar el contador del carrito */}
        {cartCount > 0 && (
          <li>
            <span className="cart-count">🛒 {cartCount}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
