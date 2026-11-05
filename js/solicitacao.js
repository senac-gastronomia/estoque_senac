function criarDadosSolicitacao() {
    const container = document.createElement('div');
    container.className = 'solicitacao-wrapper';

    container.innerHTML = `
        <!-- Bloco Esquerdo: Dados da Solicitação -->
        <div class="solicitacao-box">
            <div class="solicitacao-header">
                <img src="img/caixa.png" alt="Ícone" class="solicitacao-icon" onerror="this.style.display='none'">
                <h3>Dados da solicitação</h3>
            </div>
            
            <div class="solicitacao-body">
                <div class="input-group">
                    <label>Data da aula</label>
                    <div class="input-with-icon">
                        <input type="text" value="20/07/2026" readonly />
                        <img src="img/calendario.png" alt="Calendário" class="input-icon" />
                    </div>
                </div>

                <div class="input-group">
                    <label>Observações (opcional)</label>
                    <div class="textarea-container">
                        <textarea maxlength="200" placeholder="Digite suas observações...">Aula de como fazer bolo de Chocolate com cobertura, para 20 alunos, ou seja, 20 bolos.</textarea>
                        <span class="char-counter">60/200</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bloco Direito: Aviso -->
        <div class="aviso-box">
            <div class="aviso-header">
                <span class="aviso-info-icon">ℹ</span>
                <h3>Aviso:</h3>
            </div>
            <div class="aviso-content">
                <div class="aviso-item">
                    <img src="img/clock.png" alt="Relógio" class="aviso-img" />
                    <p>Faça sua solicitação com 20 dias de antecedência.</p>
                </div>
                <div class="aviso-item">
                    <img src="img/lista.png" alt="Lista" class="aviso-img" />
                    <p>Verifique a situação do pedido em: <strong>Meus Pedidos.</strong></p>
                </div>
            </div>
        </div>
    `;

    // Lógica para atualizar o contador de caracteres do textarea
    const textarea = container.querySelector('textarea');
    const counter = container.querySelector('.char-counter');
    
    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        counter.textContent = `${currentLength}/200`;
    });

    return container;
}

// Insere o componente automaticamente no body ou num container ao carregar
document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(criarDadosSolicitacao());
});