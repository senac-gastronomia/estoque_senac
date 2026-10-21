function criarTelaConfiguracoes() {
    const container = document.createElement('div');
    container.className = 'config-card';

    container.innerHTML = `
        <!-- Cabeçalho das Configurações -->
        <div class="config-header">
            <div class="config-title-box">
                <img src="img/gear.png" alt="Engrenagem" class="config-main-icon" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3524/3524659.png'" />
                <div>
                    <h2>Configurações</h2>
                    <p class="config-subtitle">Gerencie suas preferências e informações da conta.</p>
                </div>
            </div>
        </div>

        <!-- Divisória -->
        <hr class="config-divider" />

        <!-- Secção Perfil -->
        <div class="config-section">
            <div class="section-title">
                <img src="img/icone.png" alt="Perfil" class="section-icon" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'" />
                <h3>Perfil</h3>
            </div>

            <form class="config-form" id="form-perfil">
                <!-- Nome do professor -->
                <div class="form-row">
                    <label class="form-label">Nome do professor:</label>
                    <div class="field-readonly">Fulano de Beltrano Ciclano</div>
                </div>

                <!-- E-mail institucional -->
                <div class="form-row">
                    <label class="form-label">E-mail institucional:</label>
                    <div class="field-readonly">fulano@sp.senac.br</div>
                </div>

                <!-- Alterar Senha -->
                <div class="form-row form-row-top">
                    <label class="form-label">Alterar Senha:</label>
                    <div class="password-fields">
                        <div class="input-subgroup">
                            <label for="senha-atual">Senha Atual:</label>
                            <input type="password" id="senha-atual" value="123@Senac" />
                        </div>
                        <div class="input-subgroup">
                            <label for="nova-senha">Nova Senha:</label>
                            <input type="password" id="nova-senha" value="123@Senac#" />
                        </div>
                    </div>
                </div>

                <!-- Botão Salvar -->
                <div class="form-actions">
                    <button type="submit" class="btn-salvar">Salvar</button>
                </div>
            </form>
        </div>
    `;

    // Lógica ao clicar em Salvar
    const form = container.querySelector('#form-perfil');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Configurações salvas com sucesso!');
    });

    return container;
}

// Inserir automaticamente no container principal
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('.container') || document.body;
    main.appendChild(criarTelaConfiguracoes());
});