import React from "react";
import { Link } from "react-router-dom";

export default function Ventaa() {
  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h3 className="text-center fw-bold">VENTA REALIZADA CON EXITO</h3>
      <p className="text-center">
        <Link to="/" className="text-primary">
          <a href="#!" data-mdb-ripple-init class="btn btn-warning">
        Volver a la pagina Principal
    </a>
        </Link>
      </p>
    </div>
  );
}
