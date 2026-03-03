import { useState } from "react";
import "./Compra.css";

function App() {
  const produtos = [
    {
      id: 1,
      nome: "Brownie",
      preco: 8,
      foto: "https://images.unsplash.com/photo-1606312619344-6f99f8a1e7f7"
    },
    {
      id: 2,
      nome: "Brigadeiro",
      preco: 5,
      foto: "https://images.unsplash.com/photo-1625944525903-c0b5d9e6e6f0"
    },
    {
      id: 3,
      nome: "Cupcake",
      preco: 10,
      foto: "https://images.unsplash.com/photo-1599785209707-28c5e5f2b6f6"
    }
  ];

  const [carrinho, setCarrinho] = useState([]);
  const [endereco, setEndereco] = useState("");

  const adicionar = (produto) => {
    const existe = carrinho.find((item) => item.id === produto.id);

    if (existe) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const alterarQuantidade = (id, tipo) => {
    setCarrinho(
      carrinho
        .map((item) => {
          if (item.id === id) {
            const novaQtd =
              tipo === "mais"
                ? item.quantidade + 1
                : item.quantidade - 1;

            if (novaQtd <= 0) return null;
            return { ...item, quantidade: novaQtd };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const remover = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const finalizarCompra = () => {
    if (!endereco) {
      alert("Por favor, informe o endereço.");
      return;
    }

    const numero = "5519999999999"; // coloque seu número

    let mensagem = "Olá! Quero fazer um pedido:%0A%0A";

    carrinho.forEach((item) => {
      mensagem += `- ${item.nome} (${item.quantidade}x) - R$ ${item.preco *
        item.quantidade}%0A`;
    });

    mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;
    mensagem += `%0AEndereço: ${endereco}`;

    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="container">
      <h1>🍬 Loja de Doces</h1>

      <div className="produtos">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <img src={produto.foto} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button onClick={() => adicionar(produto)}>
              Adicionar
            </button>
          </div>
        ))}
      </div>

      <div className="carrinho">
        <h2>🛒 Carrinho</h2>

        {carrinho.map((item) => (
          <div className="item" key={item.id}>
            <span>
              {item.nome} ({item.quantidade}x)
            </span>
            <div>
              <button onClick={() => alterarQuantidade(item.id, "mais")}>+</button>
              <button onClick={() => alterarQuantidade(item.id, "menos")}>-</button>
              <button onClick={() => remover(item.id)}>❌</button>
            </div>
          </div>
        ))}

        <h3>Total: R$ {total.toFixed(2)}</h3>

        <input
          type="text"
          placeholder="Digite seu endereço completo"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

        {carrinho.length > 0 && (
          <button className="finalizar" onClick={finalizarCompra}>
            Finalizar no WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}

export default App;