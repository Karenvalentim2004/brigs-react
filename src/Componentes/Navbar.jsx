import './Navbar.css';
import logo2 from '../assets/logo2.png';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                   <img src={logo2} alt="Brigs Logo" className="logo me-2" />
                    Brigs Confeitaria
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="galeria.html">Galeria</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Cardápio</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="doces.html">Doces</a></li>
                                <li><a className="dropdown-item" href="ovosdepascoa.html">Ovos de Páscoa</a></li>
                                <li><a className="dropdown-item" href="bolos.html">Bolos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="presentes.html">Presentes</a></li>
                        <li className="nav-item"><a className="nav-link" href="novidades.html">Novidades</a></li>
                        <li className="nav-item"><a className="nav-link" href="pedido.html">Faça seu pedido</a></li>
                        <li className="nav-item"><a className="nav-link" href="contato.html">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;