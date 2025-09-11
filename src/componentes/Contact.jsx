const Contact = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="contenido-contacto">
        <h2>📩 Contáctanos</h2>
        <p>
          ¿Tienes dudas o deseas más información sobre nuestros tours?  
          Completa el formulario y nos pondremos en contacto contigo.
        </p>

        <form className="form-contacto">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
