function criarComponenteTurma() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
        <!-- Cabeçalho com o ícone de chave -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; margin-top: 10px;">
            <div style="background-color: #ffcc80; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                <img src="/public/assets/key.png" alt="Chave" style="width: 16px; object-fit: contain;" onerror="this.style.display='none'; this.parentNode.innerHTML='🔑'; this.parentNode.style.fontSize='16px';">
            </div>
            <h2 style="font-size: 16px; color: #222; font-weight: bold; margin: 0;">Selecione o código de turma</h2>
        </div>

        <!-- Box de seleção -->
        <div class="turma-selector-box" style="margin: 0; max-width: 100%;">
            <div class="turma-header">
                <img src="/public/assets/icons8-clipboard-50.png" alt="Clipboard">
                <h3>Código de turma</h3>
            </div>
            
            <div class="turma-body">
                <label class="turma-label">Turmas</label>
                <div style="position: relative; width: 100%;">
                    <select id="turma-select-redirect" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; appearance: none; background: white; cursor: pointer; outline: none;">
                        <option value="" disabled selected>Selecione...</option>
                        <option value="9900963453">9900963453 - Técnico em Gastronomia</option>
                        <option value="9900397812">9900397812 - Técnico em Gastronomia</option>
                        <option value="9900214649">9900214649 - Técnico em Gastronomia</option>
                        <option value="9900172375">9900172375 - Técnico em Confeitaria</option>
                        <option value="9900459137">9900459137 - Técnico em Confeitaria</option>
                        <option value="9900828824">9900828824 - Técnico em Confeitaria</option>
                    </select>
                    <span style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); pointer-events: none; font-size: 12px; color: #555;">▼</span>
                </div>
            </div>
        </div>
    `;


    setTimeout(() => {
        const selectElement = wrapper.querySelector('#turma-select-redirect');
        if (selectElement) {
            selectElement.addEventListener('change', (e) => {
                if (e.target.value) {
                    window.location.href = 'nova.solicitacao.html';
                }
            });
        }
    }, 0);

    return wrapper;
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('selecionar-turma-container');
    if (container) {
        container.appendChild(criarComponenteTurma());
    }
});