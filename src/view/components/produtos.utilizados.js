function criarComponenteProdutosUtilizados() {
    const wrapper = document.createElement('div');
    wrapper.className = 'produtos-utilizados-wrapper';

    // Dados baseados na imagem
    // O valor 'porcentagem' define o quão preenchida fica a barra laranja
    const dadosProdutos = [
        { nome: "Arroz tipo 1", qtd: "45 kg", porcentagem: 50 },
        { nome: "Óleo de soja", qtd: "28 unid.", porcentagem: 35 },
        { nome: "Peito de frango", qtd: "25 kg", porcentagem: 30 },
        { nome: "Tomate", qtd: "22 kg", porcentagem: 25 },
        { nome: "Alface", qtd: "18 unid.", porcentagem: 20 }
    ];

    let itensHTML = '';

    dadosProdutos.forEach(item => {
        itensHTML += `
            <div class="produto-item">
                <div class="produto-info">
                    <span class="produto-nome">${item.nome}</span>
                    <span class="produto-qtd">${item.qtd}</span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${item.porcentagem}%;"></div>
                </div>
            </div>
        `;
    });

    wrapper.innerHTML = `
        <style>
            .produtos-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                padding: 24px;
                font-family: Arial, sans-serif;
                width: 100%;
                max-width: 400px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                box-sizing: border-box;
            }
            .produtos-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
            }
            .produtos-titulo-container {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .produtos-titulo {
                margin: 0;
                font-size: 16px;
                color: #111;
                font-weight: bold;
            }
            .filtro-semana {
                padding: 6px 12px;
                border: 1px solid #eeeeee;
                border-radius: 8px;
                font-size: 13px;
                font-weight: bold;
                color: #111;
                background: #ffffff;
                cursor: pointer;
                outline: none;
                appearance: none;
                padding-right: 25px;
                position: relative;
                background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
                background-repeat: no-repeat;
                background-position: right 10px top 50%;
                background-size: 8px auto;
            }
            .produto-item {
                margin-bottom: 22px;
            }
            .produto-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            .produto-nome {
                font-weight: bold;
                color: #111;
                font-size: 14px;
            }
            .produto-qtd {
                background: #f8f9fa;
                padding: 6px 12px;
                border-radius: 12px;
                font-size: 13px;
                font-weight: bold;
                color: #111;
            }
            .progress-track {
                background: #f0f0f0;
                height: 4px;
                border-radius: 2px;
                width: 100%;
                overflow: hidden;
            }
            .progress-fill {
                background: #f97316; /* Laranja */
                height: 100%;
                border-radius: 2px;
                transition: width 0.5s ease-in-out;
            }
            .produtos-footer {
                display: flex;
                justify-content: flex-end;
                margin-top: 10px;
            }
            .btn-relatorio {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                padding: 10px 16px;
                border-radius: 8px;
                font-size: 13px;
                color: #111;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                transition: background 0.2s;
            }
            .btn-relatorio:hover {
                background: #f8f9fa;
            }
        </style>

        <div class="produtos-card">
            <div class="produtos-header">
                <div class="produtos-titulo-container">
                    <!-- Ícone do gráfico -->
                    <img src="/public/assets/grafico.laranja.png" alt="Gráfico" style="width: 24px; object-fit: contain;" onerror="this.outerHTML='<span style=\\'color:#f97316;font-size:20px;font-weight:bold;\\'>📊</span>'">
                    <h2 class="produtos-titulo">Produtos Mais Utilizados</h2>
                </div>
                <select class="filtro-semana">
                    <option>Esta semana</option>
                    <option>Mês passado</option>
                </select>
            </div>

            <div class="produtos-lista">
                ${itensHTML}
            </div>

            <div class="produtos-footer">
                <button class="btn-relatorio">
                    Ver relatorio completo <span>›</span>
                </button>
            </div>
        </div>
    `;

    return wrapper;
}


document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('produtos-utilizados-container');
    if (container) {
        container.appendChild(criarComponenteProdutosUtilizados());
    }
});