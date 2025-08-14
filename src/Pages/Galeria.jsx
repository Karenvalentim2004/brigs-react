
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function Galeria() {
    const [show, setShow] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState('');

    const handleClose = () => setShow(false);

    const handleShow = (src) => {
        setImagemSelecionada(src); 
        setShow(true);
    };

    const imagens = [
        './assets/mini ovo.jpg',
        './assets/amo amarelo.jpg',
        './assets/nutella.jpg',
        './assets/cone coco.jpg',
        "./assets/cone ferrero1.jpg",
        "./assets/cone ninho.jpg",
        "./assets/caixa de 4.jpg",
        "./assets/rosa.jpg",
        "./assets/bolo morango.jpg",
        "./assets/caixa1.jpg"
    ];

    return (
        <>
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">GALERIA DE FOTOS</h1>
                </div>
            </header>

            <div className="container my-4 py-3">
                <p className="lead text-center">Confira algumas das nossas delícias!</p>
                <div className="my-4" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>

               
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
    );
}

export default Galeria;