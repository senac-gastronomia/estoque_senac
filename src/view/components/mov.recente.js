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

function criarMovimentacoesRecentes() {
    const wrapper = document.createElement('div');
    wrapper.className = 'movimentacoes-recentes-wrapper';

    // Lista de movimentações baseada na imagem
    const dadosMovimentacoes = [
        { tipo: "Entrada", responsavel: "Gustavo" },
        { tipo: "Saída", responsavel: "Carlos" },
        { tipo: "Entrada", responsavel: "Thiago" },
        { tipo: "Saída", responsavel: "Murilo" }
    ];

    let linhasMovimentacoes = '';

    dadosMovimentacoes.forEach(mov => {
        // Define as cores específicas para as badges de Entrada e Saída
        const isEntrada = mov.tipo.toLowerCase().includes('entrada');
        const badgeClass = isEntrada ? 'badge-entrada' : 'badge-saida';

        linhasMovimentacoes += `
            <div class="movimentacao-item">
                <span class="status-badge ${badgeClass}">${escapeHTML(mov.tipo)}</span>
                <span class="responsavel-nome">${escapeHTML(mov.responsavel)}</span>
            </div>
        `;
    });

    wrapper.innerHTML = `
        <style>
            .movimentacoes-recentes-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                padding: 24px;
                font-family: Arial, sans-serif;
                box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                box-sizing: border-box;
                width: 100%;
                max-width: 400px;
            }
            .movimentacoes-recentes-card h2 {
                margin: 0 0 20px 0;
                font-size: 20px;
                color: #111111;
                font-weight: bold;
            }
            .movimentacoes-lista {
                display: flex;
                flex-direction: column;
            }
            .movimentacao-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 0;
                border-bottom: 1px solid #f0f0f0;
            }
            .movimentacao-item:last-child {
                border-bottom: none;
                padding-bottom: 0;
            }
            .movimentacao-item:first-child {
                padding-top: 0;
            }
            
            /* Status Badges */
            .status-badge {
                display: inline-block;
                padding: 10px 24px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                min-width: 100px;
                box-sizing: border-box;
            }
            .badge-entrada {
                background-color: #66bb6a; /* Tom de verde mais vivo e opaco correspondente */
                color: #ffffff; /* Texto branco */
            }
            .badge-saida {
                background-color: #ff7979; /* Tom de vermelho/salmão correspondente */
                color: #ffffff; /* Texto branco */
            }

            /* Responsável */
            .responsavel-nome {
                font-size: 15px;
                color: #111111;
                font-weight: 500;
            }
        </style>

        <div class="movimentacoes-recentes-card">
            <h2>Movimentações recentes</h2>
            
            <div class="movimentacoes-lista">
                ${linhasMovimentacoes}
            </div>
        </div>
    `;

    return wrapper;
}

// Injeta o componente no local desejado ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('movimentacoes-recentes-container');
    if (container) {
        container.appendChild(criarMovimentacoesRecentes());
    }
});