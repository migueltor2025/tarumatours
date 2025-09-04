import facebook from "../img/redes/facebook.png";
import instagram from "../img/redes/instagram.png";
import whatsapp from "../img/redes/whatsapp.png";
import tiktok from "../img/redes/tiktok.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <p>&copy; 2025 Taruma Tours. Todos los derechos reservados.</p>

        <ul className="footer-links">
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Política de uso de datos</a></li>
          <li><a href="#">Libro de Reclamaciones</a></li>
        </ul>

        <div className="redes-sociales">
          <a href="#" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
          <a href="#" aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
          <a href="#" aria-label="WhatsApp"><img src={whatsapp} alt="WhatsApp" /></a>
          <a href="#" aria-label="Tiktok"><img src={tiktok} alt="Tiktok" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
