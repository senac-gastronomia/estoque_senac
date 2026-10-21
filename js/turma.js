function criarSeletorTurma() {
    const container = document.createElement('div');
    container.className = 'turma-selector-box';

    container.innerHTML = `
        <div class="turma-header">
            <img src="img/calendario.png" alt="Ícone" class="turma-icon" onerror="this.style.display='none'">
            <h3>Código de turma</h3>
        </div>
        <div class="turma-body">
            <label class="turma-label">Turmas</label>
            <div class="turma-dropdown">
                <div class="turma-select-selected">
                    <span>Selecione...</span>
                    <span class="turma-arrow">▼</span>
                </div>
                <div class="turma-select-items turma-select-hide">
                    <div data-value="9900963453">9900963453 - Técnico em Gastronomia</div>
                    <div data-value="9900397812">9900397812 - Técnico em Gastronomia</div>
                    <div data-value="9900214649">9900214649 - Técnico em Gastronomia</div>
                    <div data-value="9900172375">9900172375 - Técnico em Confeitaria</div>
                    <div data-value="9900459137">9900459137 - Técnico em Confeitaria</div>
                    <div data-value="9900828824">9900828824 - Técnico em Confeitaria</div>
                </div>
            </div>
        </div>
    `;


    const selectedDiv = container.querySelector('.turma-select-selected');
    const itemsDiv = container.querySelector('.turma-select-items');
    const options = itemsDiv.querySelectorAll('div');

    selectedDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        itemsDiv.classList.toggle('turma-select-hide');
    });

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedDiv.querySelector('span').textContent = option.textContent;
            selectedDiv.querySelector('span').style.color = '#333';
            itemsDiv.classList.add('turma-select-hide');
        });
    });

    document.addEventListener('click', () => {
        itemsDiv.classList.add('turma-select-hide');
    });

    return container;
}


document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(criarSeletorTurma());
});