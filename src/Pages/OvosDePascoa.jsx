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

                    <div className="card mb-3" style={{ maxWidth: "600px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/craquelado.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>CRAVEJADO OREO</strong></h5>
                                    <p className="card-text">Recheio de brigadeiro de oreo com a casca de chocolate, craquelada com mini oreos/ 500gr.
                                    </p>
                                    <a href="pedido.html" className="btn btn-secondary">R$214,99</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "600px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/ovo pudim.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>PUDIM - 250gr e 500gr</strong></h5>
                                    <p className="card-text">Casca de chocolate branco, com recheio de brigadeiro de ninho acompanhado com pudim.
                                    </p>
                                    <a href="pedido.html" className="btn btn-secondary">R$179,90</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "600px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/ovo ferrero.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>FERRERO - 250gr e 500gr</strong></h5>
                                    <p className="card-text">Recheio de brigadeiro meio amargo com pedaços de amendoim, acompanhado de
                                        nutella.
                                    </p>
                                    <a href="pedido.html" className="btn btn-secondary">R$144,99</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "600px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/ovo morango.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>GELEIA DE MORANGO - 250gr e 500gr</strong></h5>
                                    <p className="card-text">Recheio de ninho com uma deliciosa geleia de morango, acompanhado de brigadeiros
                                        de ninho.
                                    </p>
                                    <a href="pedido.html" className="btn btn-secondary">R$151,99</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "600px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/caixa mini ovo.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>MINI OVO</strong></h5>
                                    <p className="card-text">Uma otima opção para presentear ou até mesmo para as crianças/ 50gr.
                                    </p>
                                    <a href="./Pedido.jsx" className="btn btn-secondary">R$14,99 und</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets/trioovo.jpg" style={{height: "200px"}} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>TRIO MINI OVOS</strong></h5>
                                    <p className="card-text">Opção de 3 mini ovos, com sabores variados, para presentear ou para as crianças/ 50gr.
                                    </p>
                                    <a href="./Compra.jsx" className="btn btn-secondary">R$44,99</a>
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