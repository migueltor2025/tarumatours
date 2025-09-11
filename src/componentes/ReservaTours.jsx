import React, { useState } from "react";
import tours from "../data/tours";
import "./css/ReservaTours.css"; // 🎨 hoja de estilos propia

const ReservaTours = () => {
  const [reservas, setReservas] = useState([]);
  const [tourSeleccionado, setTourSeleccionado] = useState(null);
  const [personas, setPersonas] = useState(1);

  const handleSeleccionarTour = (tour) => {
    setTourSeleccionado(tour);
  };

  const handleReservar = () => {
    if (!tourSeleccionado) {
      alert("Por favor selecciona un tour");
      return;
    }

    const nuevaReserva = {
      id: Date.now(),
      tour: tourSeleccionado.nombre,
      personas,
      precio: tourSeleccionado.precio * personas,
      fecha: new Date().toLocaleDateString()
    };

    setReservas([...reservas, nuevaReserva]);
    setTourSeleccionado(null);
    setPersonas(1);
  };

  const handleEliminar = (id) => {
    setReservas(reservas.filter((r) => r.id !== id));
  };

  return (
    <div className="reserva-container">
      <h2 className="titulo">🗓️ Reserva de Tours Disponibles</h2>

      <h3 className="subtitulo">Selecciona un tour</h3>
      <div className="tours-grid">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className={`tour-card ${
              tourSeleccionado?.id === tour.id ? "seleccionado" : ""
            }`}
          >
            <img src={tour.imagen} alt={tour.nombre} className="tour-img" />
            <h4>{tour.nombre}</h4>
            <p>{tour.descripcion}</p>
            <p className="precio">S/.{tour.precio} x persona</p>
            <button onClick={() => handleSeleccionarTour(tour)}>
              {tourSeleccionado?.id === tour.id ? "Seleccionado ✅" : "Seleccionar"}
            </button>
          </div>
        ))}
      </div>

      {tourSeleccionado && (
        <div className="form-reserva">
          <h3>Reserva: {tourSeleccionado.nombre}</h3>
          <input
            type="number"
            min="1"
            value={personas}
            onChange={(e) => setPersonas(parseInt(e.target.value))}
          />
          <button onClick={handleReservar}>➕ Confirmar reserva</button>
        </div>
      )}

      <h3 className="subtitulo">📋 Mis Reservas</h3>
      {reservas.length === 0 ? (
        <p className="vacio">No tienes reservas aún.</p>
      ) : (
        <div className="reservas-grid">
          {reservas.map((r) => (
            <div key={r.id} className="reserva-card">
              <h4>{r.tour}</h4>
              <p><strong>Personas:</strong> {r.personas}</p>
              <p><strong>Total:</strong> S/.{r.precio}</p>
              <p><strong>Fecha:</strong> {r.fecha}</p>
              <button
                onClick={() => handleEliminar(r.id)}
                className="btn-eliminar"
              >
                ❌ Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservaTours;