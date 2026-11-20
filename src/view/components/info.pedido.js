// Função de escape para evitar vulnerabilidades do tipo XSS
function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function criarInformacoesPedido(dados) {
    const wrapper = document.createElement('div');
    wrapper.className = 'info-pedido-wrapper';

    // Dados padrão baseados na imagem caso nenhum objeto seja passado
    const info = dados || {
        numero: "000002",
        data: "25/04/2026",
        solicitante: "Brasil H. Silva",
        itens: "10 itens",
        prioridade: "ALTA",
        observacoes: "Comprar com urgência para aula de Pizza."
    };

    // Define a cor da etiqueta de prioridade dinamicamente
    let prioridadeClass = 'prioridade-alta';
    if (info.prioridade.toUpperCase() === 'MÉDIA' || info.prioridade.toUpperCase() === 'MEDIA') {
        prioridadeClass = 'prioridade-media';
    } else if (info.prioridade.toUpperCase() === 'BAIXA') {
        prioridadeClass = 'prioridade-baixa';
    }

    wrapper.innerHTML = `
        <style>
            .info-pedido-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                padding: 24px 30px;
                font-family: Arial, sans-serif;
                width: 100%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                box-sizing: border-box;
            }
            .info-pedido-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 24px;
            }
            .info-pedido-icon {
                width: 24px;
                height: 24px;
                background-color: #111111;
                color: #ffffff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 14px;
                flex-shrink: 0;
            }
            .info-pedido-header h2 {
                margin: 0;
                font-size: 18px;
                font-weight: bold;
                color: #111111;
            }
            .info-pedido-grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 20px;
                margin-bottom: 24px;
            }
            .info-campo {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
            }
            .info-label {
                font-size: 13px;
                font-weight: bold;
                color: #111111;
                text-align: center;
            }
            .info-valor-box {
                background-color: #bdbdbd;
                border: 1px solid #9e9e9e;
                color: #111111;
                font-size: 13px;
                font-weight: 500;
                padding: 6px 12px;
                width: 100%;
                text-align: center;
                box-sizing: border-box;
            }
            .prioridade-badge {
                font-size: 13px;
                font-weight: bold;
                color: #ffffff;
                padding: 7px 12px;
                width: 100%;
                text-align: center;
                text-transform: uppercase;
                box-sizing: border-box;
            }
            .prioridade-alta {
                background-color: #ff2a00;
            }
            .prioridade-media {
                background-color: #f59e0b;
            }
            .prioridade-baixa {
                background-color: #16a34a;
            }
            .info-obs-group {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .info-obs-label {
                font-size: 14px;
                font-weight: bold;
                color: #111111;
            }
            .info-obs-box {
                border: 1px solid #cccccc;
                padding: 12px 14px;
                min-height: 110px;
                font-size: 14px;
                color: #222222;
                background-color: #ffffff;
                box-sizing: border-box;
                line-height: 1.4;
            }

            /* Responsividade para ecrãs menores */
            @media (max-width: 850px) {
                .info-pedido-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            @media (max-width: 480px) {
                .info-pedido-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>

        <div class="info-pedido-card">
            <div class="info-pedido-header">
                <span class="info-pedido-icon">!</span>
                <h2>Informações do pedido</h2>
            </div>

            <div class="info-pedido-grid">
                <div class="info-campo">
                    <span class="info-label">Nº do Pedido</span>
                    <div class="info-valor-box">${escapeHTML(info.numero)}</div>
                </div>

                <div class="info-campo">
                    <span class="info-label">Data da solicitação</span>
                    <div class="info-valor-box">${escapeHTML(info.data)}</div>
                </div>

                <div class="info-campo">
                    <span class="info-label">Auxiliar Solicitante</span>
                    <div class="info-valor-box">${escapeHTML(info.solicitante)}</div>
                </div>

                <div class="info-campo">
                    <span class="info-label">Itens Solicitados</span>
                    <div class="info-valor-box">${escapeHTML(info.itens)}</div>
                </div>

                <div class="info-campo">
                    <span class="info-label">Prioridade</span>
                    <div class="prioridade-badge ${prioridadeClass}">${escapeHTML(info.prioridade)}</div>
                </div>
            </div>

            <div class="info-obs-group">
                <label class="info-obs-label">Observações:</label>
                <div class="info-obs-box">${escapeHTML(info.observacoes)}</div>
            </div>
        </div>
    `;

    return wrapper;
}

// Injeta o componente no local desejado ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('info-pedido-container');
    if (container) {
        container.appendChild(criarInformacoesPedido());
    }
});