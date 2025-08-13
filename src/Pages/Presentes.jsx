
function Presentes() {
    return (
        <>
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">PRESENTES</h1>
                </div>
            </header>

            <br />

            <div className="container-fluid my-4 py-3" />
            <div className="d-flex flex-wrap justify-content-center gap-3">
                <div className="card mb-3" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./assets/mãe.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Dias das mães</strong></h5>
                                <p className="card-text">Caixa com brigadeiros (quantidade a consultar) com letreiro e doce personalizado.</p>
                                <a href="pedido.html" className="btn btn-secondary">R$20,00</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./assets/pais.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Dia dos pais</strong></h5>
                                <p className="card-text">Caixa com 10 brigadeiros (sabores a consultar) e mais uma bebida de sua escolha.</p>
                                <a href="pedido.html" className="btn btn-secondary">R$30,00</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" />
            <div className="d-flex flex-wrap justify-content-center gap-3">
                <div className="card mb-3" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./assets/te amo.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Dia dos namorados</strong></h5>
                                <p className="card-text">Caixa com brigadeiros (quantidade a consultar) com letreiro e doce personalizado.</p>
                                <a href="pedido.html" className="btn btn-secondary">R$20,00</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./assets/ovop.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Mini ovos</strong></h5>
                                <p className="card-text">Uma otima opção para presentear na Páscoa, opções de 30gr e 50gr.</p>
                                <a href="pedido.html" className="btn btn-secondary">R$7,00 und</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Presentes;