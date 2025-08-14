import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function Bolos() {
    const [show, setShow] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState('');

    const handleClose = () => setShow(false);

    const handleShow = (src) => {
        setImagemSelecionada(src);
        setShow(true);
    };

    const imagens = [
        './assets/bolo abacaxi.jpg',
        './assets/bolo brig.jpg',
        './assets/bolo morango.jpg',
        './assets/bolo ninho.jpg',
        './assets/bolo2.jpg',
    ];


    return (
        <>

            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">BOLOS</h1>
                </div>
            </header>

            <br />

            <div className="center-container">

                <div className="dropdown">
                    <button className="dropdown-button">MASSAS</button>
                    <div className="dropdown-content">
                        <a href="#">Baunilha</a>
                        <a href="#">Chocolate</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropdown-button">RECHEIOS</button>
                    <div className="dropdown-content">
                        <a href="#">Brigadeiro</a>
                        <a href="#">Maracujá</a>
                        <a href="#">Ninho com Morango</a>
                        <a href="#">Ninho com Abacaxi</a>
                        <a href="#">Doce de leite com ameixa</a>
                        <a href="#">Mousse de Chocolate</a>
                    </div>
                </div>

            </div>

            <div className="container my-5 py-3">
                <p className="lead text-center">
                    Alguns de nossos bolos:
                </p>
                <div className="my-4" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}> </div>
            

            {imagens.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="img-thumbnail"
                    style={{ width: "250px", height: "280px" }}
                    onClick={() => handleShow(src)}
                />
            ))}

            </div>

            <Modal show={show} onHide={handleClose} centered>

                <Modal.Body className="text-center">
                    <img
                        src={imagemSelecionada}
                        alt="Imagem selecionada"
                        className="img-fluid"
                    />
                </Modal.Body>

            </Modal>

        </>
    )
}

export default Bolos;