function Novidades () {
    return (
        <>
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">NOVIDADES</h1>
                </div>
            </header>


            <div className="container-fluid my-4 py-3">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets//pao de mel.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>PÃO DE MEL</strong></h5>
                                    <p className="card-text">Delicioso pão de mel, com recheio de doce de leite, banhado no chocolate.</p>
                                    <a href="pedido.html" className="btn btn-secondary">R$8,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets//bolo no pote.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>BOLO DE POTE</strong></h5>
                                    <p className="card-text">Bolo no pote de diversificados sabores.</p>

                                    <br />

                                    <a href="pedido.html" className="btn btn-secondary">R$15,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./assets//baiana.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><strong>BALA BAIANA</strong></h5>
                                    <p className="card-text">Bala baiana, brigadeio de coco coberto com um caramelo.</p>
                                    <a href="pedido.html" className="btn btn-secondary">R$5,00</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <div className="card mb-3" style={{maxWidth: "600px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./assets//morangodomor2.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>MORANGO DO AMOR</strong></h5>
                                        <p className="card-text">Bombom de morango com brigadeiro de ninho com uma deliciosa e crocante cobertura de caramelo.</p>
                                        <a href="pedido.html" className="btn btn-secondary">R$14,00</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3" style={{maxWidth: "600px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./assets//brownie.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>BROWNIE</strong></h5>
                                        <p className="card-text">Brownie com uma crocante casquinha e recehado com brigadeiro.</p>
                                        <a href="pedido.html" className="btn btn-secondary">R$9,00</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Novidades;