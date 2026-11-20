// Função de escape para evitar vulnerabilidades XSS
function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function criarSeletorTurma() {
    const wrapper = document.createElement('div');
    wrapper.className = 'codigo-turma-wrapper';

    // Lista exata das turmas exibidas na imagem
    const turmas = [
        "9900963453 - Técnico em Gastronomia",
        "9900397812 - Técnico em Gastronomia",
        "9900214649 - Técnico em Gastronomia",
        "9900172375 - Técnico em Confeitaria",
        "9900459137 - Técnico em Confeitaria",
        "9900828824 - Técnico em Confeitaria"
    ];

    let opcoesHTML = '';
    turmas.forEach(turma => {
        opcoesHTML += `<div class="turma-opcao" data-valor="${escapeHTML(turma)}">${escapeHTML(turma)}</div>`;
    });

    wrapper.innerHTML = `
        <style>
            .codigo-turma-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 10px;
                padding: 20px 24px;
                font-family: Arial, sans-serif;
                width: 100%;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
                box-sizing: border-box;
            }
            .codigo-turma-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 14px;
            }
            .codigo-turma-header img {
                width: 24px;
                height: 24px;
                object-fit: contain;
            }
            .codigo-turma-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: bold;
                color: #111111;
            }
            .codigo-turma-label {
                display: block;
                font-size: 13px;
                color: #222222;
                margin-bottom: 6px;
            }
            .custom-select-container {
                position: relative;
                width: 100%;
                user-select: none;
            }
            .custom-select-trigger {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 14px;
                background-color: #ffffff;
                border: 1px solid #bdbdbd;
                font-size: 14px;
                color: #757575;
                cursor: pointer;
                transition: border-color 0.2s;
            }
            .custom-select-trigger.selecionado {
                color: #111111;
            }
            .custom-select-trigger:hover {
                border-color: #888888;
            }
            .custom-select-arrow {
                display: flex;
                align-items: center;
                transition: transform 0.2s ease;
            }
            .custom-select-container.aberto .custom-select-arrow {
                transform: rotate(180deg);
            }
            .custom-select-options {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: #ffffff;
                border: 1px solid #bdbdbd;
                border-top: none;
                z-index: 100;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
                max-height: 260px;
                overflow-y: auto;
            }
            .custom-select-container.aberto .custom-select-options {
                display: block;
            }
            .turma-opcao {
                padding: 12px 14px;
                font-size: 14px;
                color: #222222;
                border-bottom: 1px solid #d4d4d4;
                cursor: pointer;
                transition: background-color 0.15s;
            }
            .turma-opcao:last-child {
                border-bottom: none;
            }
            .turma-opcao:hover {
                background-color: #f5f5f5;
            }
        </style>

        <div class="codigo-turma-card">
            <div class="codigo-turma-header">
                <!-- Ícone da prancheta (usa SVG caso a imagem não seja encontrada) -->
                <img src="/public/assets/prancheta.png" alt="Código de turma" onerror="this.outerHTML='<svg width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'#8d6e63\\' stroke-width=\\'2\\'><path d=\\'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\\'></path><rect x=\\'8\\' y=\\'2\\' width=\\'8\\' height=\\'4\\' rx=\\'1\\' ry=\\'1\\'></rect><line x1=\\'9\\' y1=\\'12\\' x2=\\'15\\' y2=\\'12\\'></line><line x1=\\'9\\' y1=\\'16\\' x2=\\'15\\' y2=\\'16\\'></line></svg>'">
                <h3>Código de turma</h3>
            </div>

            <label class="codigo-turma-label">Turmas</label>

            <div class="custom-select-container" id="dropdown-turmas">
                <div class="custom-select-trigger">
                    <span id="turma-selecionada-texto">Selecione...</span>
                    <span class="custom-select-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </div>

                <div class="custom-select-options">
                    ${opcoesHTML}
                </div>
            </div>
        </div>
    `;

    // Lógica de interação do dropdown
    const dropdown = wrapper.querySelector('#dropdown-turmas');
    const trigger = dropdown.querySelector('.custom-select-trigger');
    const textoSelecionado = dropdown.querySelector('#turma-selecionada-texto');
    const opcoes = dropdown.querySelectorAll('.turma-opcao');

    // Abre ou fecha a lista ao clicar na caixa
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('aberto');
    });

    // Atualiza o texto ao clicar numa turma e fecha a lista
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', (e) => {
            e.stopPropagation();
            const valor = opcao.getAttribute('data-valor');
            textoSelecionado.textContent = valor;
            trigger.classList.add('selecionado');
            dropdown.classList.remove('aberto');
            
            // Dispara um evento personalizado caso precise capturar a turma escolhida noutro script
            dropdown.dispatchEvent(new CustomEvent('turmaAlterada', { detail: { turma: valor } }));
        });
    });

    // Fecha o dropdown se o utilizador clicar em qualquer outro lugar da página
    document.addEventListener('click', () => {
        dropdown.classList.remove('aberto');
    });

    return wrapper;
}

// Injeta o componente no HTML ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('codigo-turma-container');
    if (container) {
        container.appendChild(criarSeletorTurma());
    }
});