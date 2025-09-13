import React, { useState } from "react";
import "./index.css";

import HeaderSlider from "./componentes/HeaderSlider";
import Menu from "./componentes/Menu";
import Hero from "./componentes/Hero";
import About from "./componentes/About";
import Tours from "./componentes/Tours";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";

import ProductList from "./componentes/ProductList";
import Cart from "./componentes/Cart";
import ReservaTours from "./componentes/ReservaTours";

const App = () => {
  const [page, setPage] = useState("home"); // home | store | reserve
  const [showCart, setShowCart] = useState(false); // 🔹 controla si abrimos el carrito directo
  const [cartItems, setCartItems] = useState([]);

  // Navegación con scroll arriba
  const navigate = (target, cart = false) => {
    setPage(target);
    setShowCart(cart); // si cart=true, abre el carrito directamente
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <>
      <HeaderSlider />
      <Menu
        onNavigateToHome={() => navigate("home")}
        onNavigateToStore={() => navigate("store")}
        onNavigateToReserve={() => navigate("reserve")}
        onNavigateToCart={() => navigate("store", true)} // 🔹 abre directo el carrito
        cartCount={cartItems.length}
      />

      <main>
        {page === "home" && (
          <>
            <Hero />
            <About />
            <Tours />
            <Contact />
          </>
        )}

        {page === "store" && (
          <>
            {/* Si vengo desde el menú normal → muestro productos + carrito */}
            {!showCart && <ProductList onAddToCart={handleAddToCart} />}

            {/* Si vengo desde el carrito → muestro solo el carrito */}
            <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
          </>
        )}

        {page === "reserve" && <ReservaTours />}
      </main>

      <Footer />
    </>
  );
};

export default App;
