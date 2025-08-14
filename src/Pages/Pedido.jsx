
function Pedido() {
    return (
        <>
            <section className="formulario container my-5">
        <h2 class="mb-4">ENCOMENDE SEU PEDIDO!</h2>

        <form>
            <div class="mb-3">
                <label for="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" name="nome" required />
            </div>

            <div class="mb-3">
                <label for="pedido" className="form-label">Pedido:</label>
                <textarea className="form-control" id="pedido" name="pedido" rows="4" required> </textarea>
            </div>

            <div class="mb-3">
                <label for="data" className="form-label">Data de entrega desejada:</label>
                <input type="date" className="form-control" id="data" name="data" required />
            </div>

            <button type="button" className="btn btn-primary" onclick="enviarPedido()">Enviar Pedido via WhatsApp</button>
        </form>
    </section>
        </>
    );
}

export default Pedido;