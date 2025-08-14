import React from "react";

function ModalImagem({ src }) {
    return (
        <div className="modal fade" id="imagemModal" tabIndex="-1" aria-labelledby="imagemModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-transparent border-0">
                    <div className="modal-body p-0 text-center">
                        <img src={src} id="imagemModalSrc" className="img-fluid rounded" alt="Imagem Ampliada" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalImagem;
