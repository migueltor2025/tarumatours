import React from "react";

const Menu = ({ onNavigateToHome, onNavigateToStore, onNavigateToReserve, cartCount }) => {
  const handleNavigate = (e, target) => {
    e.preventDefault();
    onNavigateToHome();
    setTimeout(() => {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <nav className="menu menu-inferior">
      <ul>
        <li>
          <a href="#inicio" onClick={onNavigateToHome}>Inicio</a>
        </li>

        <li>
          <a href="#nosotros" onClick={(e) => handleNavigate(e, "nosotros")}>
            Nosotros
          </a>
        </li>

        <li>
          <a href="#tours" onClick={(e) => handleNavigate(e, "tours")}>
            Tours
          </a>
        </li>

        <li>
          <a href="#reservas" onClick={onNavigateToReserve}>
            Reserva de Tours
          </a>
        </li>

        <li>
          <a href="#catalogo" onClick={onNavigateToStore}>
            Catálogo de Souvenirs
          </a>
        </li>

        <li>
          <a href="#contacto" onClick={(e) => handleNavigate(e, "contacto")}>
            Contacto
          </a>
        </li>

        {cartCount > 0 && (
          <li>
            <a
              href="#carrito"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToStore();
                setTimeout(() => {
                  document.getElementById("carrito")?.scrollIntoView({ behavior: "smooth" });
                }, 200);
              }}
              className="cart-link"
            >
              🛒 <span className="cart-count">{cartCount}</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
