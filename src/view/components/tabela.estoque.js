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

function criarTabelaEstoque() {
    const wrapper = document.createElement('div');
    wrapper.className = 'tabela-estoque-wrapper';

    // Lista de ingredientes e produtos
    const dadosEstoque = [
        { item: "Farinha de trigo", categoria: "Gramas", quantidade: "50 G", estoqueMinimo: "100 G", status: "Estoque normal" },
        { item: "Açúcar refinado", categoria: "Gramas", quantidade: "0 G", estoqueMinimo: "100 G", status: "Estoque vazio" },
        { item: "Leite integral", categoria: "Litros", quantidade: "50 L", estoqueMinimo: "100 L", status: "Abaixo do mínimo" },
        { item: "Manteiga sem sal", categoria: "Gramas", quantidade: "100 G", estoqueMinimo: "100 G", status: "Estoque normal" },
        { item: "Óleo de soja", categoria: "Litros", quantidade: "150 L", estoqueMinimo: "100 L", status: "Estoque normal" },
        { item: "Fermento em pó", categoria: "Gramas", quantidade: "200 G", estoqueMinimo: "100 G", status: "Estoque normal" },
        { item: "Óleo de soja", categoria: "Litros", quantidade: "150 L", estoqueMinimo: "100 L", status: "Estoque normal" },
        { item: "Fermento em pó", categoria: "Gramas", quantidade: "200 G", estoqueMinimo: "100 G", status: "Estoque normal" }
    ];

    let linhasTabela = '';

    dadosEstoque.forEach(dado => {
        let statusClass = 'status-normal';
        if (dado.status === 'Estoque vazio') {
            statusClass = 'status-vazio';
        } else if (dado.status === 'Abaixo do mínimo') {
            statusClass = 'status-alerta';
        }

        linhasTabela += `
            <tr class="tabela-estoque-linha">
                <td class="tabela-estoque-celula item-nome">${escapeHTML(dado.item)}</td>
                <td class="tabela-estoque-celula">${escapeHTML(dado.categoria)}</td>
                <td class="tabela-estoque-celula font-weight-normal">${escapeHTML(dado.quantidade)}</td>
                <td class="tabela-estoque-celula font-weight-normal">${escapeHTML(dado.estoqueMinimo)}</td>
                <td class="tabela-estoque-celula">
                    <span class="status-badge ${statusClass}">${escapeHTML(dado.status)}</span>
                </td>
            </tr>
        `;
    });

    wrapper.innerHTML = `
        <style>
            .estoque-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                font-family: Arial, sans-serif;
                overflow: hidden;
                width: 100%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                box-sizing: border-box;
            }
            .estoque-header {
                padding: 24px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 15px; /* Espaço entre o título e a barra de pesquisa */
                background-color: #ffffff;
            }
            .estoque-title-group {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .estoque-title-group img {
                width: 32px;
                height: 32px;
                object-fit: contain;
            }
            .estoque-title-group h2 {
                margin: 0;
                font-size: 20px;
                color: #111111;
                font-weight: bold;
            }
            /* Estilos da Barra de Pesquisa */
            .estoque-search {
                position: relative;
                display: flex;
                align-items: center;
            }
            .estoque-search input {
                padding: 8px 35px 8px 12px;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 14px;
                color: #333;
                outline: none;
                width: 250px;
            }
            .estoque-search input::placeholder {
                color: #999;
            }
            .estoque-search input:focus {
                border-color: #888;
            }
            .estoque-search .search-icon {
                position: absolute;
                right: 10px;
                width: 16px;
                height: 16px;
                pointer-events: none;
                opacity: 0.6;
            }
            .estoque-table-container {
                overflow-x: auto;
                width: 100%;
            }
            .estoque-table {
                width: 100%;
                border-collapse: collapse;
                text-align: left;
            }
            .tabela-estoque-cabecalho {
                background-color: #fcfcfc;
                border-bottom: 1px solid #f0f0f0;
            }
            .tabela-estoque-cabecalho th {
                padding: 16px 24px;
                font-size: 14px;
                color: #111111;
                font-weight: bold;
                white-space: nowrap;
            }
            .tabela-estoque-linha {
                border-bottom: 1px solid #f0f0f0;
                transition: background-color 0.2s;
            }
            .tabela-estoque-linha:hover {
                background-color: #fafafa;
            }
            .tabela-estoque-linha:last-child {
                border-bottom: none;
            }
            .tabela-estoque-celula {
                padding: 16px 24px;
                font-size: 14px;
                color: #555555;
                vertical-align: middle;
                white-space: nowrap;
            }
            .item-nome {
                font-weight: 500;
                color: #111111;
            }
            .font-weight-normal {
                font-weight: 400;
            }
            .status-badge {
                display: inline-block;
                padding: 6px 16px;
                border-radius: 6px;
                font-size: 13px;
                font-weight: bold;
                text-align: center;
                min-width: 120px;
            }
            .status-normal {
                background-color: #ebfbeb;
                color: #4cae4f;
                border: 1px solid #c8e6c9;
            }
            .status-vazio {
                background-color: #ffebee;
                color: #f44336;
                border: 1px solid #ffcdd2;
            }
            .status-alerta {
                background-color: #fff3e0;
                color: #ff9800;
                border: 1px solid #ffe0b2;
            }
        </style>

        <div class="estoque-card">
            <div class="estoque-header">
                <div class="estoque-title-group">
                    <img src="/public/assets/carrinho_deposito.laranja.png" alt="Ícone"
                    <h2>Ingredientes e produtos em estoque</h2>
                </div>
                
                <!-- Barra de Pesquisa adicionada -->
                <div class="estoque-search">
                    <input type="text" id="input-busca-estoque" placeholder="Buscar ingrediente...">
                    <!-- Pode usar uma imagem real se tiver, caso contrário usa este SVG de lupa -->
                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>

            <div class="estoque-table-container">
                <table class="estoque-table">
                    <thead>
                        <tr class="tabela-estoque-cabecalho">
                            <th>Item</th>
                            <th>Categoria</th>
                            <th>Quantidade Atual</th>
                            <th>Estoque Mínimo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="corpo-tabela-estoque">
                        ${linhasTabela}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // Lógica para filtrar a tabela dinamicamente
    setTimeout(() => {
        const searchInput = wrapper.querySelector('#input-busca-estoque');
        const tableBody = wrapper.querySelector('#corpo-tabela-estoque');
        const rows = tableBody.querySelectorAll('.tabela-estoque-linha');

        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const termo = e.target.value.toLowerCase();
                
                rows.forEach(row => {
                    // Procura pelo nome do item na primeira coluna
                    const itemNome = row.querySelector('.item-nome').textContent.toLowerCase();
                    
                    if (itemNome.includes(termo)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        }
    }, 0);

    return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('tabela-estoque-container');
    if (container) {
        container.appendChild(criarTabelaEstoque());
    }
});