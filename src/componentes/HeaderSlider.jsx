import { useState, useEffect } from "react";
import img11 from "../img/cabecera/11.jpg";
import img12 from "../img/cabecera/12.jpg";
import img13 from "../img/cabecera/13.jpg";
import img14 from "../img/cabecera/14.jpg";
import logo from "../img/logo/TARUMA-LOGO.png";

const HeaderSlider = () => {
  const slides = [img11, img12, img13, img14];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="encabezado-slider">
      <div className="slider">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "activo" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="contenido-encabezado">
        <div className="logo">
          <a href="#inicio">
            <img src={logo} alt="Logo Taruma Tours" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderSlider;
