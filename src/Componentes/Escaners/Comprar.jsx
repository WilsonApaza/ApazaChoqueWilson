import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Comprar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { producto = "", precio = 0 } = location.state || {};

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    producto,
    precio,
    fecha: "",
    hora: "",
    vendedor: "",
    observaciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelar = () => {
    navigate(-1);
  };

  const handleAceptar = (e) => {
    e.preventDefault();
    navigate("/venta");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h5 className="text-center fw-bold mb-4">DATOS DEL CLIENTE</h5>
      <form onSubmit={handleAceptar}>
        {/* Nombre completo */}
        <div className="row align-items-center mb-3">
          <label htmlFor="nombreCompleto" className="col-5 col-form-label fw-bold">
            Nombre completo
          </label>
          <div className="col-7">
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              className="form-control"
              value={formData.nombreCompleto}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Producto */}
        <div className="row align-items-center mb-3">
          <label htmlFor="producto" className="col-5 col-form-label fw-bold">
            Producto
          </label>
          <div className="col-7">
            <input
              type="text"
              id="producto"
              name="producto"
              className="form-control"
              value={formData.producto}
              readOnly
            />
          </div>
        </div>

        {/* Precio */}
        <div className="row align-items-center mb-3">
          <label htmlFor="precio" className="col-5 col-form-label fw-bold">
            Precio
          </label>
          <div className="col-7">
            <input
              type="number"
              id="precio"
              name="precio"
              className="form-control"
              value={formData.precio}
              readOnly
            />
          </div>
        </div>

        {/* Fecha */}
        <div className="row align-items-center mb-3">
          <label htmlFor="fecha" className="col-5 col-form-label fw-bold">
            Fecha
          </label>
          <div className="col-7">
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="form-control"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Hora */}
        <div className="row align-items-center mb-3">
          <label htmlFor="hora" className="col-5 col-form-label fw-bold">
            Hora
          </label>
          <div className="col-7">
            <input
              type="time"
              id="hora"
              name="hora"
              className="form-control"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Nombre del vendedor */}
        <div className="row align-items-center mb-3">
          <label htmlFor="vendedor" className="col-5 col-form-label fw-bold">
            Nombre del vendedor
          </label>
          <div className="col-7">
            <input
              type="text"
              id="vendedor"
              name="vendedor"
              className="form-control"
              value={formData.vendedor}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Observaciones */}
        <div className="row align-items-center mb-4">
          <label htmlFor="observaciones" className="col-5 col-form-label fw-bold">
            Observaciones
          </label>
          <div className="col-7">
            <input
              type="text"
              id="observaciones"
              name="observaciones"
              className="form-control"
              value={formData.observaciones}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-secondary" onClick={handleCancelar}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-danger">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}
