import React, { useState } from 'react';

function Pedido() {
  const [nome, setNome] = useState('');
  const [pedido, setPedido] = useState('');
  const [data, setData] = useState('');

  const enviarPedido = () => {
    if (!nome || !pedido || !data) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const numeroWhatsApp = '5519992846193';
    const mensagem = `Olá, meu nome é ${nome}. Gostaria de fazer o seguinte pedido:\n\n${pedido}\n\nData de entrega desejada: ${data}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  };

  return (
    <>
      <section className="formulario container my-5">
        <h2 className="mb-4">ENCOMENDE SEU PEDIDO!</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pedido" className="form-label">Pedido:</label>
            <textarea
              className="form-control"
              id="pedido"
              name="pedido"
              rows="4"
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="data" className="form-label">Data de entrega desejada:</label>
            <input
              type="date"
              className="form-control"
              id="data"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={enviarPedido}
          >
            Enviar Pedido via WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}

export default Pedido;
