export function EditarPedidoComponent() {
  const component = document.createElement("section");
 
  component.className = "ep-page";
 
  component.innerHTML = `
    <div class="ep-header">
      <div>
        <h1>Editar pedido</h1>
        <p>Confira os itens solicitados e adicione ingredientes ao pedido.</p>
      </div>
 
      <button class="ep-btn ep-btn-secondary" data-action="voltar">
        ← Voltar
      </button>
    </div>
 
    <div class="ep-info">
      <div class="ep-info-item">
        <span class="ep-info-label">Turma</span>
        <strong>3º Ano A</strong>
      </div>
 
      <div class="ep-info-item">
        <span class="ep-info-label">Pedido</span>
        <strong>#PED-0042</strong>
      </div>
 
      <div class="ep-info-item">
        <span class="ep-info-label">Data</span>
        <strong>26/11/2026</strong>
      </div>
 
      <div class="ep-info-item">
        <span class="ep-info-label">Status</span>
        <span class="ep-status">Em edição</span>
      </div>
    </div>
 
    <div class="ep-panel">
      <div class="ep-panel-header">
        <div>
          <h2>Itens solicitados</h2>
          <p>Ingredientes que fazem parte deste pedido.</p>
        </div>
 
        <span class="ep-counter" id="ep-total-itens">0 itens</span>
      </div>
 
      <div class="ep-table-wrapper">
        <table class="ep-table">
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Quantidade</th>
              <th>Unidade</th>
              <th>Observação</th>
              <th class="ep-action-column">Ação</th>
            </tr>
          </thead>
 
          <tbody id="ep-order-body"></tbody>
        </table>
      </div>
 
      <div class="ep-empty" id="ep-order-empty" hidden>
        Nenhum ingrediente foi adicionado ao pedido.
      </div>
    </div>
 
    <div class="ep-panel">
      <div class="ep-panel-header">
        <div>
          <h2>Buscar ingredientes</h2>
          <p>Selecione os ingredientes disponíveis para adicionar ao pedido.</p>
        </div>
      </div>
 
      <div class="ep-search">
        <span class="ep-search-icon">⌕</span>
        <input
          type="search"
          id="ep-search-input"
          placeholder="Buscar ingrediente..."
          autocomplete="off"
        />
      </div>
 
      <div class="ep-table-wrapper">
        <table class="ep-table">
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Disponível</th>
              <th>Unidade</th>
              <th class="ep-action-column">Ação</th>
            </tr>
          </thead>
 
          <tbody id="ep-catalog-body"></tbody>
        </table>
      </div>
 
      <div class="ep-empty" id="ep-catalog-empty" hidden>
        Nenhum ingrediente encontrado.
      </div>
    </div>
 
    <div class="ep-footer">
      <button class="ep-btn ep-btn-secondary" data-action="voltar">
        Cancelar
      </button>
 
      <button class="ep-btn ep-btn-primary" data-action="salvar">
        Salvar alterações
      </button>
    </div>
  `;
 
  return component;
}