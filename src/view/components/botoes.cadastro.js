function criarBotoesCadastro() {
    const wrapper = document.createElement('div');
    wrapper.className = 'botoes-cadastro-wrapper';

    wrapper.innerHTML = `
        <style>
            .botoes-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 100%;
                max-width: 300px;
                font-family: Arial, sans-serif;
            }
            .btn-acao {
                width: 100%;
                padding: 15px 20px;
                border: none;
                border-radius: 6px;
                font-size: 15px;
                font-weight: bold;
                color: #ffffff;
                cursor: pointer;
                box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.25);
                transition: transform 0.1s ease, box-shadow 0.1s ease, filter 0.2s;
                text-align: center;
            }
            .btn-acao:active {
                transform: translateY(2px);
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
            }
            .btn-acao:hover {
                filter: brightness(0.9);
            }
            .btn-azul {
                background-color: #004680;
            }
            .btn-laranja {
                background-color: #f48b19;
            }
        </style>
        
        <div class="botoes-container">
            <button class="btn-acao btn-azul" id="btn-cadastrar-produto">Cadastrar produto</button>
            <button class="btn-acao btn-laranja" id="btn-cancelar-cadastro">Cancelar cadastro</button>
        </div>
    `;

    return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('botoes-cadastro-container');
    if (container) {
        container.appendChild(criarBotoesCadastro());
    }
});