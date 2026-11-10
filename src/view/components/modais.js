function criarCardBase(titulo, textoMensagem, caminhoIcone, corFundo) {
    const card = document.createElement('div');
    card.className = 'modal-sucesso-card';

    card.innerHTML = `
        <div class="modal-sucesso-header" style="background-color: ${corFundo};">
            <div class="modal-sucesso-title">
                <img src="${caminhoIcone}" alt="${titulo}" class="modal-icon-img" style="width: 20px; height: 20px; object-fit: contain;" />
                <h2>${titulo}</h2>
            </div>
            <button class="modal-sucesso-close" aria-label="Fechar">&times;</button>
        </div>
        <div class="modal-sucesso-body">
            <p>${textoMensagem}</p>
        </div>
    `;

    const closeBtn = card.querySelector('.modal-sucesso-close');
    closeBtn.addEventListener('click', () => {
        card.style.opacity = '0';
        setTimeout(() => card.remove(), 200);
    });

    return card;
}

function criarAlertaSucesso(textoMensagem) {
    return criarCardBase('Sucesso!', textoMensagem, '/public/assets/certo.png', '#388e3c');
}

function criarAlertaEncaminhar(textoMensagem) {
    return criarCardBase('Encaminhar Pedido', textoMensagem, '/public/assets/carrinho.png', '#2196F3');
}

function criarAlertaRejeitar(textoMensagem) {
    const card = criarCardBase('Rejeitar Pedido', textoMensagem, '/public/assets/lixeira.png', '#8B0000');
    
    const body = card.querySelector('.modal-sucesso-body');
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'informe o motivo no campo abaixo:';
    textarea.style.cssText = 'width: 100%; height: 60px; margin-top: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; resize: none; box-sizing: border-box; font-family: inherit; font-size: 12px;';
    
    const btnOk = document.createElement('button');
    btnOk.textContent = 'OK';
    btnOk.style.cssText = 'background-color: #d32f2f; color: white; border: none; padding: 8px 20px; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 10px; width: 100%;';
    btnOk.addEventListener('click', () => {
        alert('Pedido rejeitado!');
        card.remove();
    });

    body.appendChild(textarea);
    body.appendChild(btnOk);

    return card;
}

function criarAlertaAlteracaoSalva() {
    return criarAlertaSucesso('Alteração salva, o auxiliar será informado das alterações e o pedido será revisado.');
}

function criarAlertaAlteracaoPerfil() {
    return criarAlertaSucesso('Dados alterados!');
}

function criarAlertaAlteracaoConfiguracoes() {
    return criarAlertaSucesso('Configurações Salvas.');
}

function criarAlertaPedidoAprovado() {
    return criarAlertaSucesso('Pedido aprovado, encaminhe o pedido para compra');
}

function criarAlertaEncaminharPedido() {
    return criarAlertaEncaminhar('Pedido encaminhado para compra');
}

function criarAlertaRejeitarPedido() {
    return criarAlertaRejeitar('Pedido rejeitado, informe o motivo no campo abaixo:');
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.className = 'modais-preview-container';

    const modaisParaExibir = [
        { label: 'Rejeitar Pedido', elemento: criarAlertaRejeitarPedido() },
        { label: 'Encaminhar Pedido', elemento: criarAlertaEncaminharPedido() },
        { label: 'Pedido Aprovado', elemento: criarAlertaPedidoAprovado() },
        { label: 'Alteração salva', elemento: criarAlertaAlteracaoSalva() },
        { label: 'Alteração Perfil', elemento: criarAlertaAlteracaoPerfil() },
        { label: 'Alteração Configurações', elemento: criarAlertaAlteracaoConfiguracoes() }
    ];

    modaisParaExibir.forEach(item => {
        const sec = document.createElement('div');
        sec.className = 'modal-group';
        sec.innerHTML = `<label class="modal-group-label">${item.label}</label>`;
        sec.appendChild(item.elemento);
        container.appendChild(sec);
    });

    const mainContainer = document.querySelector('.container') || document.body;
    mainContainer.appendChild(container);
});