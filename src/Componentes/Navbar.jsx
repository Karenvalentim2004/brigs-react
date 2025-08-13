import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/assets/logo2.png" alt="Brigs Logo" className="logo me-2" />
                    Brigs Confeitaria
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Galeria">Galeria</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cardápio
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Doces">Doces</Link></li>
                                <li><Link className="dropdown-item" to="/OvosDePascoa">Ovos de Páscoa</Link></li>
                                <li><Link className="dropdown-item" to="/Bolos">Bolos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/presentes">Presentes</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/novidades">Novidades</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pedido">Faça seu pedido</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contato">Contato</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
