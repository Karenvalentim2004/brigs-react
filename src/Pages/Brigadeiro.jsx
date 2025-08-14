
function Brigadeiro() {
    return (
        <>
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">BRIGADEIROS</h1>
                </div>
            </header>

            <br />

            <div className="center-container">

                <div className="dropdown">
                    <button className="dropdown-button">BRIGADEIROS</button>
                    <div className="dropdown-content">
                        <a href="#">Ninho</a>
                        <a href="#">Brigadeiro Belga</a>
                        <a href="#">Prestigio</a>
                        <a href="#">Coco Queimado</a>
                        <a href="#">Paçoca</a>
                        <a href="#">Oreo</a>
                        <a href="#">Maracujá</a>
                        <a href="#">Confete</a>
                    </div>
                </div>

                <a href="/cone" className="botao-link">CONES</a>

            </div>

            <br />

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", maxWidth: "1560px", margin: "auto" }}>
                <img src="./assets/brigadeiro1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/caixa oreo.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/caixa rosa.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/caixa tradicional.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/caixa1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/nutella.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/coco queimado.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/oreo.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/confete.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/confete1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                <img src="./assets/brigadeiro4.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
            </div>
        </>
    )
}

export default Brigadeiro;