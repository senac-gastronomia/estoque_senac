export function EditarPedidoComponent() {
    return `
        <div class="ep-page">
 
            <header class="ep-page-header">
                <div class="ep-page-icon">📋</div>
 
                <div>
                    <h1>Meus pedidos</h1>
                    <p>Consulte seus pedidos de ingredientes.</p>
                </div>
            </header>
 
            <section class="ep-panel">
 
                <div class="ep-panel-title">
                    <h2>✏️ Editar pedido</h2>
                </div>
 
                <div class="ep-table-scroll">
                    <table class="ep-table ep-order-table">
 
                        <thead>
                            <tr class="ep-dark-header">
                                <th colspan="5">
                                    Itens solicitados
                                </th>
                            </tr>
 
                            <tr>
                                <th>Ingrediente</th>
                                <th>Descrição</th>
                                <th>Quantidade</th>
                                <th>Observações</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
 
                        <tbody id="ep-order-body"></tbody>
 
                        <tfoot>
                            <tr>
                                <td colspan="4">
                                    <strong>
                                        Total de itens:
                                        <span id="ep-total">0</span>
                                    </strong>
                                </td>
 
                                <td>
                                    <button
                                        type="button"
                                        class="ep-save-button"
                                        data-action="salvar"
                                    >
                                        Salvar
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
 
                    </table>
                </div>
 
                <div class="ep-search-area">
                    <input
                        type="search"
                        id="ep-search"
                        placeholder="Buscar ingrediente (ex: Leite, Açúcar, etc...)"
                    >
 
                    <span class="ep-search-icon">⌕</span>
                </div>
 
                <div class="ep-table-scroll">
                    <table class="ep-table ep-catalog-table">
 
                        <thead>
                            <tr>
                                <th>Ingrediente</th>
                                <th>Descrição</th>
                                <th>Quantidade</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
 
                        <tbody id="ep-catalog-body"></tbody>
 
                    </table>
                </div>
 
                <div class="ep-footer">
                    <button
                        type="button"
                        class="ep-back-button"
                        data-action="voltar"
                    >
                        ‹ Voltar
                    </button>
                </div>
 
            </section>
 
        </div>
    `;
}