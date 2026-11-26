import { EditarPedidoComponent } from "../../view/components/EditarPedido.js";
 
export function renderEditarPedido(container) {
  container.innerHTML = "";
 
  const tela = EditarPedidoComponent();
  container.appendChild(tela);
 
  // Dados fictícios dos ingredientes já solicitados
  let itensPedido = [
    {
      id: 1,
      nome: "Arroz tipo 1",
      quantidade: 8,
      unidade: "kg",
      observacao: "Pacotes de 1 kg."
    },
    {
      id: 2,
      nome: "Feijão carioca",
      quantidade: 5,
      unidade: "kg",
      observacao: ""
    },
    {
      id: 3,
      nome: "Peito de frango",
      quantidade: 6,
      unidade: "kg",
      observacao: "Sem tempero."
    },
    {
      id: 4,
      nome: "Tomate",
      quantidade: 3,
      unidade: "kg",
      observacao: ""
    },
    {
      id: 5,
      nome: "Cebola",
      quantidade: 2,
      unidade: "kg",
      observacao: ""
    },
    {
      id: 6,
      nome: "Óleo de soja",
      quantidade: 4,
      unidade: "L",
      observacao: "Garrafas de 1 litro."
    },
    {
      id: 7,
      nome: "Sal refinado",
      quantidade: 500,
      unidade: "g",
      observacao: ""
    },
    {
      id: 8,
      nome: "Leite integral",
      quantidade: 12,
      unidade: "L",
      observacao: "Caixas de 1 litro."
    },
    {
      id: 9,
      nome: "Açúcar refinado",
      quantidade: 3,
      unidade: "kg",
      observacao: ""
    },
    {
      id: 10,
      nome: "Farinha de trigo",
      quantidade: 2,
      unidade: "kg",
      observacao: ""
    }
  ];
 
  // Dados fictícios do catálogo de ingredientes
  const ingredientesDisponiveis = [
    { id: 101, nome: "Arroz tipo 1", quantidade: 20, unidade: "kg" },
    { id: 102, nome: "Feijão carioca", quantidade: 15, unidade: "kg" },
    { id: 103, nome: "Macarrão", quantidade: 10, unidade: "kg" },
    { id: 104, nome: "Peito de frango", quantidade: 12, unidade: "kg" },
    { id: 105, nome: "Carne moída", quantidade: 8, unidade: "kg" },
    { id: 106, nome: "Ovo branco", quantidade: 120, unidade: "un" },
    { id: 107, nome: "Tomate", quantidade: 10, unidade: "kg" },
    { id: 108, nome: "Cebola", quantidade: 5, unidade: "kg" },
    { id: 109, nome: "Batata", quantidade: 15, unidade: "kg" },
    { id: 110, nome: "Cenoura", quantidade: 8, unidade: "kg" },
    { id: 111, nome: "Óleo de soja", quantidade: 10, unidade: "L" },
    { id: 112, nome: "Sal refinado", quantidade: 5, unidade: "kg" },
    { id: 113, nome: "Leite integral", quantidade: 24, unidade: "L" },
    { id: 114, nome: "Açúcar refinado", quantidade: 10, unidade: "kg" },
    { id: 115, nome: "Farinha de trigo", quantidade: 10, unidade: "kg" },
    { id: 116, nome: "Chocolate em pó", quantidade: 3, unidade: "kg" },
    { id: 117, nome: "Fermento em pó", quantidade: 1, unidade: "kg" },
    { id: 118, nome: "Manteiga", quantidade: 4, unidade: "kg" },
    { id: 119, nome: "Queijo muçarela", quantidade: 5, unidade: "kg" },
    { id: 120, nome: "Creme de leite", quantidade: 20, unidade: "un" }
  ];
 
  const orderBody = tela.querySelector("#ep-order-body");
  const catalogBody = tela.querySelector("#ep-catalog-body");
  const searchInput = tela.querySelector("#ep-search-input");
  const totalItens = tela.querySelector("#ep-total-itens");
  const orderEmpty = tela.querySelector("#ep-order-empty");
  const catalogEmpty = tela.querySelector("#ep-catalog-empty");
 
  function escaparHTML(valor) {
    return String(valor)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
 
  function renderPedido() {
    orderBody.innerHTML = itensPedido.map((item) => `
      <tr data-order-id="${item.id}">
        <td>
          <strong class="ep-ingredient-name">
            ${escaparHTML(item.nome)}
          </strong>
        </td>
 
        <td>
          <input
            class="ep-quantity-input"
            type="number"
            min="0"
            step="0.1"
            value="${escaparHTML(item.quantidade)}"
            data-field="quantidade"
            aria-label="Quantidade de ${escaparHTML(item.nome)}"
          />
        </td>
 
        <td>
          <span class="ep-unit">${escaparHTML(item.unidade)}</span>
        </td>
 
        <td>
          <input
            class="ep-observation-input"
            type="text"
            value="${escaparHTML(item.observacao)}"
            placeholder="Adicionar observação"
            data-field="observacao"
            aria-label="Observação de ${escaparHTML(item.nome)}"
          />
        </td>
 
        <td class="ep-action-column">
          <button
            class="ep-icon-btn ep-remove-btn"
            type="button"
            data-action="remover"
            data-id="${item.id}"
            title="Remover ingrediente"
            aria-label="Remover ${escaparHTML(item.nome)}"
          >
            ×
          </button>
        </td>
      </tr>
    `).join("");
 
    totalItens.textContent =
      `${itensPedido.length} ${itensPedido.length === 1 ? "item" : "itens"}`;
 
    orderEmpty.hidden = itensPedido.length > 0;
  }
 
  function renderCatalogo() {
    const busca = searchInput.value.trim().toLocaleLowerCase("pt-BR");
 
    const filtrados = ingredientesDisponiveis.filter((ingrediente) =>
      ingrediente.nome.toLocaleLowerCase("pt-BR").includes(busca)
    );
 
    catalogBody.innerHTML = filtrados.map((ingrediente) => {
      const jaAdicionado = itensPedido.some(
        (item) => item.idCatalogo === ingrediente.id
          || item.nome === ingrediente.nome
      );
 
      return `
        <tr>
          <td>
            <strong class="ep-ingredient-name">
              ${escaparHTML(ingrediente.nome)}
            </strong>
          </td>
 
          <td>
            ${escaparHTML(ingrediente.quantidade)}
          </td>
 
          <td>
            <span class="ep-unit">
              ${escaparHTML(ingrediente.unidade)}
            </span>
          </td>
 
          <td class="ep-action-column">
            <button
              class="ep-btn ep-btn-add"
              type="button"
              data-action="adicionar"
              data-id="${ingrediente.id}"
              ${jaAdicionado ? "disabled" : ""}
            >
              ${jaAdicionado ? "Adicionado" : "+ Adicionar"}
            </button>
          </td>
        </tr>
      `;
    }).join("");
 
    catalogEmpty.hidden = filtrados.length > 0;
  }
 
  function adicionarIngrediente(id) {
    const ingrediente = ingredientesDisponiveis.find(
      (item) => item.id === Number(id)
    );
 
    if (!ingrediente) return;
 
    const jaExiste = itensPedido.some(
      (item) => item.nome === ingrediente.nome
    );
 
    if (jaExiste) return;
 
    itensPedido.push({
      id: Date.now(),
      idCatalogo: ingrediente.id,
      nome: ingrediente.nome,
      quantidade: 1,
      unidade: ingrediente.unidade,
      observacao: ""
    });
 
    renderPedido();
    renderCatalogo();
  }
 
  function removerIngrediente(id) {
    itensPedido = itensPedido.filter(
      (item) => item.id !== Number(id)
    );
 
    renderPedido();
    renderCatalogo();
  }
 
  // Atualiza quantidade e observação dos itens solicitados
  orderBody.addEventListener("change", (event) => {
    const input = event.target;
    const row = input.closest("tr");
 
    if (!row) return;
 
    const id = Number(row.dataset.orderId);
    const item = itensPedido.find((produto) => produto.id === id);
 
    if (!item) return;
 
    if (input.dataset.field === "quantidade") {
      const quantidade = Number(input.value);
 
      item.quantidade = Number.isFinite(quantidade) && quantidade >= 0
        ? quantidade
        : 0;
 
      input.value = item.quantidade;
    }
 
    if (input.dataset.field === "observacao") {
      item.observacao = input.value.trim();
    }
  });
 
  // Botões de adicionar e remover
  tela.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
 
    if (!button || !tela.contains(button)) return;
 
    const action = button.dataset.action;
 
    if (action === "adicionar") {
      adicionarIngrediente(button.dataset.id);
    }
 
    if (action === "remover") {
      removerIngrediente(button.dataset.id);
    }
 
    if (action === "voltar") {
      container.dispatchEvent(
        new CustomEvent("voltar-meus-pedidos", {
          bubbles: true
        })
      );
    }
 
    if (action === "salvar") {
      const pedidoAtualizado = itensPedido.map((item) => ({ ...item }));
 
      container.dispatchEvent(
        new CustomEvent("salvar-edicao-pedido", {
          bubbles: true,
          detail: {
            pedidoId: "PED-0042",
            turma: "3º Ano A",
            itens: pedidoAtualizado
          }
        })
      );
 
      alert("Alterações fictícias salvas na tela!");
    }
  });
}
  searchInput.addEventListener("input", renderCatalogo);
 
  renderPedido();
  renderCatalogo();