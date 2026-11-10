function renderizarAcoesRapidas() {
    const container = document.getElementById('acoes-rapidas-container');
    
    if (!container) {
        console.error('Container de ações rápidas não encontrado no HTML.');
        return;
    }

    container.innerHTML = `
        <div class="acoes-rapidas-box quick-actions">
            <h3>Ações rápidas</h3>
            <div class="actions-grid">
                <div class="action-card orange-bg" onclick="novaSolicitacao()">
                    <img src="/public/assets/plus.png" alt="Ícone Nova Solicitação">
                    <div>
                        <strong>Nova solicitação</strong>
                        <p>Solicitar ingredientes</p>
                    </div>
                </div>
                <div class="action-card blue-bg" onclick="minhasSolicitacoes()">
                    <img src="/public/assets/lista.png" alt="Ícone Minhas Solicitações">
                    <div>
                        <strong>Minhas solicitações</strong>
                        <p>Acompanhar solicitações</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.novaSolicitacao = function() {
    console.log('Redirecionando para Nova Solicitação...');
};

window.minhasSolicitacoes = function() {
    console.log('Redirecionando para Minhas Solicitações...');
};

renderizarAcoesRapidas();