import imgOxapampa from "../img/rutas/oxapampa/4.jpg";
import imgGuagapo from "../img/rutas/guagapo/3.jpg";

const About = () => {
  return (
    <section className="quienes-somos" id="nosotros">
      <div className="contenido-quienes">
        <div className="texto">
          <span className="subtitulo">¿Taruma Tours?</span>
          <h2>¿Quiénes Somos?</h2>
          <p>
            Taruma Tours es una <strong>Agencia de Turismo</strong> que promueve el turismo vivencial, cultural y natural en todo el Perú. Conectamos viajeros con experiencias auténticas que respetan nuestras tradiciones y diversidad.
          </p>
          <p>
            Nuestra misión es ofrecer experiencias confiables, seguras y memorables, posicionando al Perú como un destino de clase mundial.
          </p>
        </div>
        <div className="imagenes">
          <img src={imgOxapampa} alt="IMAGEN 1" />
          <img src={imgGuagapo} alt="IMAGEN 2" />
        </div>
      </div>
    </section>
  );
};

export default About;
