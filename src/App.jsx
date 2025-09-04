import "./index.css";

// Importar componentes
import HeaderSlider from "./componentes/HeaderSlider";
import Menu from "./componentes/Menu";
import Hero from "./componentes/Hero";
import About from "./componentes/About";
import Tours from "./componentes/Tours";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <>
      <HeaderSlider />
      <Menu />
      <Hero />
      <About />
      <Tours />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
