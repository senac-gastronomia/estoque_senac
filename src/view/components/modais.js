function criarCardBase(titulo, textoMensagem, caminhoIcone, corFundo) {
    const card = document.createElement('div');
    card.className = 'modal-sucesso-card';
    card.style.width = '340px'; // Largura fixa elegante para o pop-up

    card.innerHTML = `
        <div class="modal-sucesso-header" style="background-color: ${corFundo};">
            <div class="modal-sucesso-title">
                <img src="${caminhoIcone}" alt="${titulo}" class="modal-icon-img" style="width: 22px; height: 22px; object-fit: contain;" />
                <h2>${titulo}</h2>
            </div>
            <button class="modal-sucesso-close" aria-label="Fechar">&times;</button>
        </div>
        <div class="modal-sucesso-body">
            <p>${textoMensagem}</p>
        </div>
    `;

    // Evento do botão X para fechar o modal e o fundo escuro
    const closeBtn = card.querySelector('.modal-sucesso-close');
    closeBtn.addEventListener('click', () => {
        const overlay = card.closest('.modal-overlay-bg');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 200);
        } else {
            card.remove();
        }
    });

    return card;
}

// Função global para exibir qualquer modal no centro da tela com fundo escuro
function exibirModalNaTela(modalCard) {
    // Cria o fundo escuro (Overlay)
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay-bg';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;

    // Fecha o modal se o utilizador clicar fora do cartão (no fundo escuro)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 200);
        }
    });

    overlay.appendChild(modalCard);
    document.body.appendChild(overlay);

    // Animação suave de entrada
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });
}

function criarAlertaSucesso(textoMensagem) {
    return criarCardBase('Sucesso!', textoMensagem, '/public/assets/certo.png', '#388e3c');
}

function criarAlertaEncaminhar(textoMensagem) {
    return criarCardBase('Encaminhar Pedido', textoMensagem, '/public/assets/carrinho.png', '#2196F3');
}

function criarAlertaRejeitar(textoMensagem) {
    const card = criarCardBase('Rejeitar Pedido', textoMensagem, '/public/assets/lixeira.png', '#8B0000');
    
    // Esconde o botão X no modal de rejeitar (igual à sua imagem)
    const closeBtn = card.querySelector('.modal-sucesso-close');
    if (closeBtn) closeBtn.style.display = 'none';

    const body = card.querySelector('.modal-sucesso-body');
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Informe o motivo aqui...';
    textarea.style.cssText = 'width: 100%; height: 75px; margin-top: 12px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; resize: none; box-sizing: border-box; font-family: inherit; font-size: 13px; outline: none;';
    
    const btnOk = document.createElement('button');
    btnOk.textContent = 'OK';
    btnOk.style.cssText = 'background-color: #e60000; color: white; border: none; padding: 8px 32px; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 14px; font-size: 14px;';
    
    btnOk.addEventListener('click', () => {
        if (textarea.value.trim() === '') {
            alert('Por favor, informe o motivo da rejeição.');
            textarea.focus();
            return;
        }
        // Fecha o modal após confirmar
        const overlay = card.closest('.modal-overlay-bg');
        if (overlay) overlay.remove();
    });

    body.appendChild(textarea);
    body.appendChild(btnOk);

    return card;
}

// Funções prontas para serem chamadas pelos botões
function criarAlertaPedidoAprovado() {
    return criarAlertaSucesso('Pedido aprovado, encaminhe o pedido para compra');
}

function criarAlertaEncaminharPedido() {
    return criarAlertaEncaminhar('Pedido encaminhado para compra');
}

function criarAlertaRejeitarPedido() {
    return criarAlertaRejeitar('Pedido rejeitado, informe o motivo no campo abaixo:');
}