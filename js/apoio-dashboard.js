function criarPainelApoio() {
    const wrapper = document.createElement('div');
    wrapper.className = 'apoio-dashboard-grid';

    wrapper.innerHTML = `
        <!-- Saudação Superior -->
        <div class="apoio-welcome-banner">
            <span class="apoio-emoji">👋</span>
            <div>
                <h2>Olá, Beltrano!</h2>
                <p>Veja o resumo da cozinha Senac</p>
            </div>
        </div>

        <!-- Layout Principal dividido em colunas -->
        <div class="apoio-content-grid">
            
            <!-- Coluna Esquerda: Estatísticas e Resumo -->
            <div class="apoio-left-column">
                <div class="stat-card">
                    <div class="stat-icon-box orange">📦</div>
                    <div class="stat-info">
                        <span class="stat-title">Produtos em estoque</span>
                        <h3 class="stat-value">120 <span class="stat-unit">itens</span></h3>
                        <span class="stat-desc">total de produtos disponíveis</span>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon-box blue">👥</div>
                    <div class="stat-info">
                        <span class="stat-title">Usuários Cadastrados</span>
                        <h3 class="stat-value">22 <span class="stat-unit">usuários</span></h3>
                    </div>
                </div>

                <div class="resumo-mes-card">
                    <h3>Resumo do mês</h3>
                    <div class="resumo-item">
                        <span>Solicitações realizadas</span>
                        <strong>12</strong>
                    </div>
                    <div class="resumo-item aprovadas">
                        <span>Aprovadas</span>
                        <strong>7</strong>
                    </div>
                    <div class="resumo-item pendentes">
                        <span>Pendentes</span>
                        <strong>5</strong>
                    </div>
                </div>
            </div>

            <!-- Coluna Direita: Ações Rápidas e Gráfico -->
            <div class="apoio-right-column">
                <div class="acoes-rapidas-box">
                    <h3>Ações rápidas</h3>
                    <div class="acoes-buttons-grid">
                        <button class="acao-btn orange-border">
                            <span class="plus-icon">+</span>
                            <div>
                                <strong>Pedidos</strong>
                                <p>Verificar pedidos</p>
                            </div>
                        </button>
                        <button class="acao-btn blue-bg">
                            <span class="list-icon">📋</span>
                            <div>
                                <strong>Usuários</strong>
                                <p>Cadastrar ou excluir usuários</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="grafico-card">
                    <div class="grafico-header">
                        <span>📈</span>
                        <h3>Ingredientes mais pedidos nesse mês</h3>
                    </div>
                    <div class="grafico-bars">
                        <div class="bar-col" style="height: 80%"><span class="bar-val">18</span><div class="bar orange" style="height: 90%"></div><span class="bar-label">Leite Integral</span></div>
                        <div class="bar-col" style="height: 45%"><span class="bar-val">9</span><div class="bar orange" style="height: 45%"></div><span class="bar-label">Farinha de trigo</span></div>
                        <div class="bar-col" style="height: 95%"><span class="bar-val">21</span><div class="bar orange" style="height: 100%"></div><span class="bar-label">Sal</span></div>
                        <div class="bar-col" style="height: 20%"><span class="bar-val">2</span><div class="bar orange" style="height: 20%"></div><span class="bar-label">Café</span></div>
                        <div class="bar-col" style="height: 65%"><span class="bar-val">14</span><div class="bar orange" style="height: 70%"></div><span class="bar-label">Açúcar</span></div>
                        <div class="bar-col" style="height: 55%"><span class="bar-val">11</span><div class="bar orange" style="height: 60%"></div><span class="bar-label">Fermento</span></div>
                    </div>
                </div>
            </div>

        </div>
    `;

    return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('.container');
    if (main) {
        main.appendChild(criarPainelApoio());
    }
});