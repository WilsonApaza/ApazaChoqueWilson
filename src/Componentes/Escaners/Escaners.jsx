import React from "react";
import { Link } from "react-router-dom";
import "./Escaners.css";
//El nombre Escaners puede ser diferente
export default function Escaners() {
return (
<div>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 formato1">
                <div class="card">
                    <img src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg"
                        class="card-img-top" alt="Waterfall" />
                    <div class="card-body">
                        <h5 class="card-title">Escaner Fujitsu</h5>
                        <p class="card-text">Modelo: FI-7260</p>
                        <Link to="/venta" data-mdb-ripple-init class="btn btn-primary">
                        Comprar
                        </Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 formato1">
                <div class="card">
                    <img src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7280-2.jpg"
                        class="card-img-top" alt="Sunset Over the Sea" />
                    <div class="card-body">
                        <h5 class="card-title">Escaner Fujitsu</h5>
                        <p class="card-text">Modelo: FI-7800</p>
                        <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 formato1">
                <div class="card">
                    <img src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg" class="card-img-top"
                        alt="Sunset over the Sea" />
                    <div class="card-body">
                        <h5 class="card-title">Escaner Fujitsu</h5>
                        <p class="card-text">Modelo: FI-7600</p>
                        <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="/" data-mdb-ripple-init class="btn btn-warning">
        Volver a la pagina Principal
    </a>
</div>
);
}
