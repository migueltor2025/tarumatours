import { useState, useEffect } from "react";

// Importar imágenes
import g1 from "../img/rutas/guagapo/1.jpg";
import g2 from "../img/rutas/guagapo/2.jpg";
import g3 from "../img/rutas/guagapo/3.jpg";
import g4 from "../img/rutas/guagapo/4.jpg";
import g5 from "../img/rutas/guagapo/5.jpg";
import g6 from "../img/rutas/guagapo/6.jpg";

import b1 from "../img/rutas/bosquedepiedra/1.JPG";
import b2 from "../img/rutas/bosquedepiedra/2.jpg";
import b3 from "../img/rutas/bosquedepiedra/3.jpg";
import b4 from "../img/rutas/bosquedepiedra/4.jpg";
import b5 from "../img/rutas/bosquedepiedra/5.jpg";
import b6 from "../img/rutas/bosquedepiedra/6.JPG";

import o1 from "../img/rutas/oxapampa/1.jpg";
import o2 from "../img/rutas/oxapampa/2.jpg";
import o3 from "../img/rutas/oxapampa/3.jpg";
import o4 from "../img/rutas/oxapampa/4.jpg";
import o5 from "../img/rutas/oxapampa/5.jpg";
import o6 from "../img/rutas/oxapampa/6.jpg";

import l1 from "../img/rutas/lamerced/1.jpg";
import l2 from "../img/rutas/lamerced/2.jpg";
import l3 from "../img/rutas/lamerced/3.jpg";
import l4 from "../img/rutas/lamerced/4.JPG";
import l5 from "../img/rutas/lamerced/5.jpg";
import l6 from "../img/rutas/lamerced/6.JPG";

const toursData = [
  {
    titulo: "GRUTA DE GUAGAPO",
    duracion: "3 días / 2 noches.",
    imagenes: [g1, g2, g3, g4, g5, g6],
  },
  {
    titulo: "BOSQUE DE PIEDRA - HUALLAY",
    duracion: "3 días / 2 noches.",
    imagenes: [b1, b2, b3, b4, b5, b6],
  },
  {
    titulo: "OXAPAMPA",
    duracion: "3 días / 2 noches.",
    imagenes: [o1, o2, o3, o4, o5, o6],
  },
  {
    titulo: "LA MERCED",
    duracion: "3 días / 2 noches.",
    imagenes: [l1, l2, l3, l4, l5, l6],
  },
];

const Tours = () => {
  // un índice por cada tour
  const [indices, setIndices] = useState(Array(toursData.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((i, tourIndex) => (i + 1) % toursData[tourIndex].imagenes.length)
      );
    }, 5000); // cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tours" id="tours">
      <h2>Tours Populares</h2>
      <div className="galeria-tours">
        {toursData.map((tour, tIndex) => (
          <div key={tIndex} className="tour">
            <div className="tour-slider">
              {tour.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${tour.titulo} ${i + 1}`}
                  className={i === indices[tIndex] ? "visible" : ""}
                />
              ))}
            </div>
            <h3>{tour.titulo}</h3>
            <p>{tour.duracion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
