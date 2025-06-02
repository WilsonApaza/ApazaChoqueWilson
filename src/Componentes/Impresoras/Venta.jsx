import { Link } from "react-router-dom"

export default function Venta() { 
    return (
        <div>
            <h1>Empresa SoftTech S.R.L</h1>
            <h2>Compra de Impresoras</h2>
            <Link to="/">
                <a href="#!" data-mdb-ripple-init class="btn btn-warning">
                    Volver a la pagina Principal
                </a>
            </Link>
        </div>
    )

}