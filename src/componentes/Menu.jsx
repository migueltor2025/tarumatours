import React from "react";

const Menu = ({ onNavigateToHome, onNavigateToStore, onNavigateToReserve, cartCount }) => {
  const handleNavigate = (e, target) => {
    e.preventDefault();

    // 1️⃣ Ir primero a la página principal
    onNavigateToHome();

    // 2️⃣ Pequeño delay para que la vista principal se renderice
    setTimeout(() => {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // 200ms es seguro, ajustable
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
            <span className="cart-count">🛒 {cartCount}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
