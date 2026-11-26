 export function MeusPedidosTable() {
    return `
        <section class="mp-panel">
 
            <div class="mp-panel-header">
                <div class="mp-section-title">
                    <span class="mp-section-icon">📋</span>
 
                    <div>
                        <h2>Turmas</h2>
                        <p>Selecione uma turma para consultar seus pedidos.</p>
                    </div>
                </div>
            </div>
 
            <div class="mp-table-wrapper">
                <table class="mp-table">
 
                    <thead>
                        <tr>
                            <th>Turma</th>
                            <th>Pedidos</th>
                            <th class="mp-action-column">Ação</th>
                        </tr>
                    </thead>
 
                    <tbody>
                        <tr class="mp-turma-row">
                            <td>
                                <div class="mp-turma-info">
                                    <span class="mp-turma-icon">🎓</span>
 
                                    <div>
                                        <strong>Minha turma</strong>
                                        <small>Consultar pedidos</small>
                                    </div>
                                </div>
                            </td>
 
                            <td>
                                <span class="mp-empty-status">
                                    Nenhum pedido
                                </span>
                            </td>
 
                            <td class="mp-action-column">
                                <button
                                    type="button"
                                    class="mp-view-button"
                                    data-action="abrir-turma"
                                    aria-label="Abrir pedidos da turma"
                                >
                                    <span>Ver pedidos</span>
                                    <span class="mp-arrow">→</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
 
                </table>
            </div>
 
            <div class="mp-panel-footer">
                <span>1 turma</span>
            </div>
 
        </section>
    `;
}