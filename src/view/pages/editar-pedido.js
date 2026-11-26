import { EditarPedidoComponent } from "../components/EditarPedido.js";
 
const container = document.querySelector("#editar-pedido-container");
container.innerHTML = EditarPedidoComponent();

container.addEventListener("click", (event) => {
    const button = event.target.closest('[data-action="voltar"]');

    if (button) {
        window.location.assign("/meus-pedidos");
    }
});