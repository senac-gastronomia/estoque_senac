function criarAcoesRapidas() {
    const wrapper = document.createElement('div');
    wrapper.className = 'acoes-rapidas-wrapper';

    wrapper.innerHTML = `
        <style>
            .acoes-rapidas-card {
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
            .acoes-rapidas-card h2 {
                margin: 0 0 20px 0;
                font-size: 18px;
                color: #111111;
                font-weight: bold;
            }
            .acao-btn-group {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            .acao-btn-custom {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 16px 20px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                text-align: left;
                transition: transform 0.1s ease, filter 0.2s ease;
                width: 100%;
            }
            .acao-btn-custom:active {
                transform: scale(0.98);
            }
            .acao-btn-custom:hover {
                filter: brightness(0.95);
            }
            
            /* Estilo Laranja (Entrada) */
            .btn-laranja {
                background-color: #ffedd5; /* Fundo laranja claro */
            }
            .btn-laranja .acao-title {
                color: #ea580c; /* Laranja escuro para texto */
            }

            /* Estilo Azul (Saída) */
            .btn-azul {
                background-color: #dbeafe; /* Fundo azul claro */
            }
            .btn-azul .acao-title {
                color: #2563eb; /* Azul escuro para texto */
            }

            .acao-icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* Novo estilo para os ícones em imagem */
            .acao-icon-img {
                width: 32px;
                height: 32px;
                object-fit: contain;
            }

            .acao-text-group {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .acao-title {
                font-size: 16px;
                font-weight: bold;
                margin: 0;
            }
            .acao-subtitle {
                font-size: 13px;
                color: #666666;
                margin: 0;
            }
        </style>

        <div class="acoes-rapidas-card">
            <h2>Ações Rápidas</h2>
            
            <div class="acao-btn-group">
                <!-- Botão Laranja: Registrar entrada -->
                <button class="acao-btn-custom btn-laranja" onclick="window.location.href='registrar_entrada.html'">
                    <div class="acao-icon-wrapper">
                        <!-- Imagem do ícone de entrada -->
                        <img src="/public/assets/entrada.laranja.png" alt="Entrada" class="acao-icon-img" onerror="this.style.display='none'">
                    </div>
                    <div class="acao-text-group">
                        <span class="acao-title">Registrar entrada</span>
                        <span class="acao-subtitle">Registrar entrada no estoque</span>
                    </div>
                </button>

                <!-- Botão Azul: Registrar saída -->
                <button class="acao-btn-custom btn-azul" onclick="window.location.href='registrar_saida.html'">
                    <div class="acao-icon-wrapper">
                        <!-- Imagem do ícone de saída -->
                        <img src="/public/assets/saida.azul.png" alt="Saída" class="acao-icon-img" onerror="this.style.display='none'">
                    </div>
                    <div class="acao-text-group">
                        <span class="acao-title">Registrar saída</span>
                        <span class="acao-subtitle">Retirar produto do estoque</span>
                    </div>
                </button>
            </div>
        </div>
    `;

    return wrapper;
}

// Injeta o componente no local desejado
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('acoes-rapidas-container');
    if (container) {
        container.appendChild(criarAcoesRapidas());
    }
});