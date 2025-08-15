
function Doces() {
    return (
        <>
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">DOCES</h1>
                </div>
            </header>

            <br />

            <div className="center-container">
                <a href="/Brigadeiro" className="botao-link">BRIGADEIROS</a>
                <a href="/Cone" className="botao-link">CONES</a>
            </div>

            <div className="container my-5 py-3">
                <p className="lead text-center">
                    Confira:
                </p>
            

                <div style={{display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center"}}>
                    <img src="./assets/cone brigadeiro.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/caixa rosa.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/cone ferrero1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/caixa1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/caixa tradicional.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />

                </div>

            </div>

        </>
    )
}

export default Doces;