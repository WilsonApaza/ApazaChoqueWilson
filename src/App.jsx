import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar";
import Home from "./Componentes/Home/Home";
import Footer from "./Componentes/Footer/Footer";
import Escaners from "./Componentes/Escaners/Escaners.jsx";
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
            <Route path="/Escaners" element={<Escaners />} />
            <Route path="/Portatiles" element={<Portatil />} />
            <Route path="/Pcescritorio" element={<PCescritorio />} />
            <Route path="/Impresoras" element={<Impresoras />} />
            <Route path="/contactos" element={<Contactanos />} />
            {
            <Route path="/venta" element={<Venta />} />}
        </Routes>
        <Footer />
    </BrowserRouter>
</div>
);
}
export default App;
