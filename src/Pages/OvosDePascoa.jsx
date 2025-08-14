function OvosDePascoa() {
    return (
        <>
            
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">OVOS DE PÁSCOA </h1>
                </div>
            </header>
            

            <br />

            <div className="container-fluid my-5 py-3">
                <div className="d-flex flex-wrap justify-content-center gap-3">

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/craquelado.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>FERRERO</strong></h5>
                                    <p className="card-text">Recheio de brigadeiro de oreo com a casca de chocolate, craquelada com mini oreos.
                                    </p>
                                    <a href="pedido.html" className="btn btn-secondary">R$100,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/ovo pudim.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>PUDIM</strong></h5>
                                    <p className="card-text">Casca de chocolate branco, com recheio de brigadeiro de ninho acompanhado com pudim.
                                    </p>
                                    <a href="pedido.html" className="btn btn-secondary">R$120,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/ovo ferrero.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>FERRERO</strong></h5>
                                    <p className="card-text">Recheio de brigadeiro meio amargo com pedaços de amendoim, acompanhado de
                                        nutella.</p>
                                    <a href="pedido.html" className="btn btn-secondary">R$110,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/ovo morango.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>GELEIA DE MORANGO</strong></h5>
                                    <p className="card-text">Recheio de ninho com uma deliciosa geleia de morango, acompanhado de brigadeiros
                                        de ninho.</p>
                                    <a href="pedido.html" className="btn btn-secondary">R$115,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/caixa mini ovo.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>MINI OVO</strong></h5>
                                    <p className="card-text">Uma otima opção para presentear ou até mesmo para as crianças, opções de 30gr e50gr.
                                    </p>
                                    <a href="./Pedido.jsx" className="btn btn-secondary">R$7,00 und</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OvosDePascoa;