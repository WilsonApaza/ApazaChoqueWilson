import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar";
import Home from "./Componentes/Home/Home";
import Footer from "./Componentes/Footer/Footer";
import Escaners from "./Componentes/Escaners/Escaners.jsx";
import Comprar from "./Componentes/Escaners/Comprar.jsx";
import Ventaa from "./Componentes/Escaners/Ventaa.jsx";
import Portatil from "./Componentes/Portatiles/Portatiles.jsx";
import PCescritorio from "./Componentes/Pcescritorio/Pcescritorio.jsx";
import Impresoras from "./Componentes/Impresoras/Impresoras.jsx";
import Contactanos from "./Componentes/Contactanos/Contactanos.jsx";
import Venta from "./Componentes/Impresoras/Venta.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escaners" element={<Escaners />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/venta" element={<Ventaa />} />
          <Route path="/portatiles" element={<Portatil />} />
          <Route path="/pcescritorio" element={<PCescritorio />} />
          <Route path="/impresoras" element={<Impresoras />} />
          <Route path="/contactos" element={<Contactanos />} />
          <Route path="/venta" element={<Venta />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
