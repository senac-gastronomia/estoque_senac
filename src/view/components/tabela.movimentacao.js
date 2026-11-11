function criarTabelaMovimentacoes() {
    const wrapper = document.createElement('div');
    wrapper.className = 'movimentacoes-wrapper';

    // Dados baseados na imagem, mas sem os ícones de comida
    const dados = [
        { produto: "Carne Bovina (patinho)", tipo: "Saida", qtd: "5 kg", responsavel: "Juliana A", horario: "10: 15" },
        { produto: "Tomate", tipo: "Entrada", qtd: "20 kg", responsavel: "Juliana A", horario: "9: 40" },
        { produto: "Arroz tipo 1", tipo: "Entrada", qtd: "30 kg", responsavel: "Henrique", horario: "9: 20" },
        { produto: "Óleo de soja", tipo: "Saida", qtd: "2 unid", responsavel: "Henrique", horario: "8: 50" },
        { produto: "Alface", tipo: "Entrada", qtd: "15 unid", responsavel: "Eduardo", horario: "8: 30" }
    ];

    let linhasTabela = '';

    dados.forEach(item => {
        const isEntrada = item.tipo === 'Entrada';
        const corTexto = isEntrada ? '#16a34a' : '#dc2626';
        const corFundo = isEntrada ? '#dcfce7' : '#fee2e2';
        const iconeSeta = isEntrada ? '↑' : '↓';

        linhasTabela += `
            <tr class="tabela-linha">
                <td class="tabela-celula font-bold">${item.produto}</td>
                <td class="tabela-celula">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: ${corTexto}; font-weight: bold; font-size: 16px;">${iconeSeta}</span>
                        <span style="background-color: ${corFundo}; color: ${corTexto}; padding: 4px 16px; border-radius: 12px; font-weight: bold; font-size: 13px;">
                            ${item.tipo}
                        </span>
                    </div>
                </td>
                <td class="tabela-celula font-bold">${item.qtd}</td>
                <td class="tabela-celula font-bold">${item.responsavel}</td>
                <td class="tabela-celula font-bold">${item.horario}</td>
            </tr>
        `;
    });

    wrapper.innerHTML = `
        <style>
            .movimentacoes-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                font-family: Arial, sans-serif;
                overflow: hidden;
                width: 100%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            }
            .movimentacoes-header {
                padding: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .movimentacoes-header h2 {
                margin: 0;
                font-size: 18px;
                color: #111;
                font-weight: bold;
            }
            .movimentacoes-table {
                width: 100%;
                border-collapse: collapse;
                text-align: left;
            }
            .tabela-cabecalho {
                background-color: #f8f9fa;
            }
            .tabela-cabecalho th {
                padding: 15px 20px;
                font-size: 15px;
                color: #111;
                font-weight: bold;
            }
            .tabela-linha {
                border-bottom: 1px solid #f0f0f0;
            }
            .tabela-linha:last-child {
                border-bottom: none;
            }
            .tabela-celula {
                padding: 15px 20px;
                font-size: 14px;
                color: #111;
                vertical-align: middle;
            }
            .font-bold {
                font-weight: bold;
            }
            .movimentacoes-footer {
                padding: 15px 20px;
                display: flex;
                justify-content: flex-end;
                border-top: 1px solid #f0f0f0;
            }
            .btn-ver-todas {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                padding: 8px 16px;
                border-radius: 6px;
                font-size: 13px;
                color: #111;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                transition: background 0.2s;
            }
            .btn-ver-todas:hover {
                background: #f8f9fa;
            }
        </style>

        <div class="movimentacoes-card">
            <div class="movimentacoes-header">
                <!-- Ícone de setas opostas laranja (pode ajustar o caminho se tiver a imagem real) -->
                <img src="/public/assets/transferir.png" alt="Movimentações" style="width: 24px; object-fit: contain;" onerror="this.style.display='none'; this.parentNode.innerHTML='<span style=\\'color:#f97316;font-size:20px;font-weight:bold;\\'>⇄</span>' + this.parentNode.innerHTML;">
                <h2>Movimentações recentes</h2>
            </div>

            <div style="overflow-x: auto;">
                <table class="movimentacoes-table">
                    <thead>
                        <tr class="tabela-cabecalho">
                            <th>Produtos</th>
                            <th>Movimentações</th>
                            <th>Quantidade</th>
                            <th>Responsavel</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${linhasTabela}
                    </tbody>
                </table>
            </div>

            <div class="movimentacoes-footer">
                <button class="btn-ver-todas">
                    Ver todas as movimentações <span>›</span>
                </button>
            </div>
        </div>
    `;

    return wrapper;
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('movimentacoes-container');
    if (container) {
        container.appendChild(criarTabelaMovimentacoes());
    }
});