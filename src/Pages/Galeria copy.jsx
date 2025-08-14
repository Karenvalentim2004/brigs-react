
import React, { useEffect, useState, useRef } from "react";

function Galeria() {
    const [modalSrc, setModalSrc] = useState("");
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            setModalSrc(e.target.src);
            if (modalRef.current && window.bootstrap && window.bootstrap.Modal) {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
            } else {
                console.error('Bootstrap JS não está carregado ou modalRef não está disponível.');
            }
        };
        const imgs = document.querySelectorAll('.img-thumbnail');
        imgs.forEach(img => {
            img.addEventListener('click', handleClick);
        });
        return () => {
            imgs.forEach(img => {
                img.removeEventListener('click', handleClick);
            });
        };
    }, []);

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
                    <img src="./assets/mini ovo.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/amo amarelo.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/nutella.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/cone coco.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/cone ferrero1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/cone ninho.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/caixa de 4.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/rosa.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/bolo morango.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                    <img src="./assets/caixa1.jpg" className="img-thumbnail" alt="..." style={{ width: "250px", height: "280px" }} />
                </div>
            </div>

            <div className="modal fade" id="imagemModal" tabIndex="-1" aria-labelledby="imagemModalLabel" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0 text-center">
                            <img src="./assets/nutella.jpg" id="imagemModalSrc" className="img-fluid rounded" alt="Imagem Ampliada" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Galeria;