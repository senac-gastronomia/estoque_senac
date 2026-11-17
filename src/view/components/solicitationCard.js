function escaparHTML(valor) {
    return String(valor ?? '').replace(/[&<>"']/g, caractere => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    })[caractere]);
}
 
export function SolicitationCard(pedido) {
 
    const statusClasse = pedido.status
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '-');
 
    const produtos = pedido.produtos || [];
 
    return `
        <article class="solicitacao-card">
 
            <span class="solicitacao-status status-${escaparHTML(statusClasse)}">
                ${escaparHTML(pedido.status)}
            </span>
 
            <div class="solicitacao-conteudo">
 
                <div class="solicitacao-docente">
                    <h3>${escaparHTML(pedido.docente)}</h3>
                    <span>${escaparHTML(pedido.setor)}</span>
                </div>
 
                <div class="solicitacao-datas">
 
                    <div class="data-item">
                        <span>Data do pedido</span>
                        <strong>${escaparHTML(pedido.dataPedido)}</strong>
                    </div>
 
                    <div class="data-item">
                        <span>Data da entrega</span>
                        <strong>${escaparHTML(pedido.dataEntrega)}</strong>
                    </div>
 
                </div>
            </div>
 
            <div class="solicitacao-rodape">
 
                <button
                    class="btn-ver-pedido"
                    data-pedido-id="${escaparHTML(pedido.id)}"
                    type="button"
                >
                    <i class="fa-regular fa-file-lines"></i>
                    Ver pedido
                </button>
 
            </div>
 
            <div
                class="solicitacao-detalhes"
                id="detalhes-${escaparHTML(pedido.id)}"
                hidden
            >
 
                <h4>Produtos solicitados</h4>
 
                ${
                    produtos.length > 0
                    ? `
                        <ul>
                            ${produtos.map(produto => `
                                <li>
                                    <span>${escaparHTML(produto.nome)}</span>
                                    <strong>${escaparHTML(produto.quantidade)}</strong>
                                </li>
                            `).join('')}
                        </ul>
                    `
                    : '<p>Nenhum produto informado.</p>'
                }
 
                ${
                    pedido.observacoes
                    ? `
                        <div class="pedido-observacoes">
                            <strong>Observações:</strong>
                            <p>${escaparHTML(pedido.observacoes)}</p>
                        </div>
                    `
                    : ''
                }
 
            </div>
 
        </article>
    `;
}