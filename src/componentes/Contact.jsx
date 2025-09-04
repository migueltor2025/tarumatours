const Contact = () => {
  return (
    <section className="contacto" id="contacto">
      <h2>Contáctanos</h2>
      <form>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
