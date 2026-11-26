 import { MeusPedidosTable } from "../components/MeusPedidosTable.js";

const container = document.querySelector("#meus-pedidos-container");
 
function renderizarMeusPedidos() {
    container.innerHTML = `
        <div class="mp-page">
 
            <header class="mp-page-header">
                <div class="mp-page-icon">📋</div>
 
                <div>
                    <h1>Meus pedidos</h1>
                    <p>
                        Consulte seus pedidos de ingredientes.
                    </p>
                </div>
            </header>
 
            ${MeusPedidosTable()}
 
        </div>
    `;
}
 
renderizarMeusPedidos();
 
// Evento para abrir a próxima tela
container.addEventListener("click", (event) => {
    const button = event.target.closest(
        '[data-action="abrir-turma"]'
    );
 
    if (!button) return;
 
    window.location.assign("/editar-pedido");
});