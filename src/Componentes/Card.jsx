import './Card.css';

function Card({ title, description, imageUrl }) {
    return (

        <section className="container my-4 py-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/brigadeiro1.jpg" className="card-img-top" alt="Doces" />
                        <div className="card-body text-center">
                            <h5 className="card-title">DOCES</h5>
                        </div>
                        <div className="card-footer text-center">
                            <a href="doces.html" className="btn btn-secondary">Acessar</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/craquelado.jpg" className="card-img-top" alt="Ovos de Páscoa" />
                        <div className="card-body text-center">
                            <h5 className="card-title">OVOS DE PÁSCOA</h5>
                        </div>
                        <div className="card-footer text-center">
                            <a href="ovosdepascoa.html" className="btn btn-secondary">Acessar</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/bolo brig.jpg" className="card-img-top" alt="Bolos" />
                        <div className="card-body text-center">
                            <h5 className="card-title">BOLOS</h5>
                        </div>
                        <div className="card-footer text-center">
                            <a href="bolos.html" className="btn btn-secondary">Acessar</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/te amo.jpg" className="card-img-top" alt="Presentes" />
                        <div className="card-body text-center">
                            <h5 className="card-title">PRESENTES</h5>
                        </div>
                        <div className="card-footer text-center">
                            <a href="presentes.html" className="btn btn-secondary">Acessar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Card;
