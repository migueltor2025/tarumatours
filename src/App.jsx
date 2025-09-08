import React, { useState } from "react";
import "./index.css";

// Componentes de tu página turística
import HeaderSlider from "./componentes/HeaderSlider";
import Menu from "./componentes/Menu";
import Hero from "./componentes/Hero";
import About from "./componentes/About";
import Tours from "./componentes/Tours";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";

// Componentes de la tienda (nuevos)
import ProductList from "./componentes/ProductList";
import Cart from "./componentes/Cart";

const App = () => {
  // Estado para saber si estamos en la tienda o en la página principal
  const [isStorePage, setIsStorePage] = useState(false);

  // Estado del carrito
  const [cartItems, setCartItems] = useState([]);

  // Añadir producto al carrito
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Quitar producto del carrito
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Navegación
  const handleNavigateToStore = () => {
    setIsStorePage(true); // Ir a tienda
  };

  const handleNavigateToHome = () => {
    setIsStorePage(false); // Ir a página principal
  };

  return (
    <>
      {/* Aquí puedes fusionar tu HeaderSlider + Menu con un Header que tenga navegación */}
      <HeaderSlider />
      <Menu
        onNavigateToStore={handleNavigateToStore}
        onNavigateToHome={handleNavigateToHome}
        cartCount={cartItems.length}
      />

      <main>
        {isStorePage ? (
          <>
            {/* Página de Tienda */}
            <ProductList onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
          </>
        ) : (
          <>
            {/* Página principal de turismo */}
            <Hero />
            <About />
            <Tours />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;

