/**

 * @param {string} textoMensagem 
 * @returns {HTMLElement}
 */
function criarAlertaSucesso(textoMensagem) {
    const card = document.createElement('div');
    card.className = 'modal-sucesso-card';

    card.innerHTML = `
        <div class="modal-sucesso-header">
            <div class="modal-sucesso-title">
                <span class="modal-sucesso-icon">✓</span>
                <h2>Sucesso!</h2>
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


function criarAlertaAlteracaoSalva() {
    return criarAlertaSucesso('Alteração salva, o auxiliar será informado das alterações e o pedido será revisado.');
}

function criarAlertaAlteracaoPerfil() {
    return criarAlertaSucesso('Dados alterados!');
}

function criarAlertaAlteracaoConfiguracoes() {
    return criarAlertaSucesso('Configurações Salvas.');
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.className = 'modais-preview-container';


    const sec1 = document.createElement('div');
    sec1.className = 'modal-group';
    sec1.innerHTML = `<label class="modal-group-label">Alteração salva</label>`;
    sec1.appendChild(criarAlertaAlteracaoSalva());


    const sec2 = document.createElement('div');
    sec2.className = 'modal-group';
    sec2.innerHTML = `<label class="modal-group-label">Alteração Perfil</label>`;
    sec2.appendChild(criarAlertaAlteracaoPerfil());


    const sec3 = document.createElement('div');
    sec3.className = 'modal-group';
    sec3.innerHTML = `<label class="modal-group-label">Alteração Configurações</label>`;
    sec3.appendChild(criarAlertaAlteracaoConfiguracoes());

    container.appendChild(sec1);
    container.appendChild(sec2);
    container.appendChild(sec3);


    const mainContainer = document.querySelector('.container') || document.body;
    mainContainer.appendChild(container);
});