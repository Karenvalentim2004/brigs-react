function Cone () {
    return (
        <>
     <header className="py-3 text-center bg-white">
        <div className="container">
            <h1 className="display-4">CONES</h1>
        </div>
    </header>

    <br />

    <div className="center-container">

        <a href="/Brigadeiro" className="botao-link">BRIGADEIROS</a>


        <div className="dropdown">
            <button className="dropdown-button">CONES</button>
            <div className="dropdown-content">
                <a href="#">Brigadeiro</a>
                <a href="#">Prestigio</a>
                <a href="#">Ferrero</a>
                <a href="#">Ninho</a>
                <a href="#">Kinder Bueno</a>
                <a href="#">Maracujá</a>
            </div>
        </div>
    </div>

    <br />

     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
      <img src="./assets/cone brigadeiro.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
      <img src="./assets/cone coco.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
      <img src="./assets/cone ferrero.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
      <img src="./assets/cone ninho.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
      <img src="./assets/cone kinder.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />

    </div>

    </>
    )
}

export default Cone;