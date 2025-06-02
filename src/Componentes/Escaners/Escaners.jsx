import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Escaners.css";

export default function EscanerUnico() {
  const images = [
    "https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg",
    "https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-3.jpg",
    "https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg",
    "https://intecsa.com.bo/wp-content/uploads/2024/12/T3170M_left-paper_690x460.jpg",
    "https://intecsa.com.bo/wp-content/uploads/2024/12/c08534509.png",
  ];

  const navigate = useNavigate();

  // Datos del producto
  const producto = {
    nombre: "Escaner Fujitsu",
    modelo: "FI-7260",
    precio: 7000,
  };

  const handleComprar = () => {
    navigate("/comprar", {
      state: {
        producto: producto.nombre,
        precio: producto.precio,
      },
    });
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "350px", borderRadius: "15px", overflow: "hidden" }}>
        <Carousel
          interval={3500}
          controls={true}
          indicators={true}
          pause="hover"
          nextLabel=""
          prevLabel=""
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
              }}
            />
          }
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
              }}
            />
          }
        >
          {images.map((src, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block mx-auto"
                src={src}
                alt={`Escaner Fujitsu imagen ${idx + 1}`}
                style={{
                  maxHeight: "300px",
                  objectFit: "contain",
                  borderRadius: "15px 15px 0 0",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="card-body text-center">
          <h5 className="card-title mb-2">{producto.nombre}</h5>
          <p className="card-text mb-3">Modelo: {producto.modelo}</p>
          <button onClick={handleComprar} className="btn btn-primary px-4">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
