function criarFormularioProduto() {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-produto-wrapper';

    wrapper.innerHTML = `
        <div class="form-produto">
            <div class="produto-form-row">
                <div>
                    <label class="produto-form-label">Nome do produto<span class="req">*</span></label>
                    <input type="text" class="produto-form-control" placeholder="Ex: leite integral">
                </div>
                <div>
                    <label class="produto-form-label">Codigo<span class="req">*</span></label>
                    <input type="text" class="produto-form-control" placeholder="Ex: leite LT001">
                </div>
                <div>
                    <label class="produto-form-label">Data de validade<span class="req">*</span></label>
                    <div class="produto-date-wrapper">
                        <input type="text" class="produto-form-control produto-date-input" placeholder="__/__/____">
                        <img src="/public/assets/calendario.png" alt="Calendario" class="produto-date-icon">
                    </div>
                </div>
            </div>

            <div class="produto-form-row">
                <div>
                    <label class="produto-form-label">Categoria<span class="req">*</span></label>
                    <div class="produto-select-wrapper">
                        <select class="produto-form-control">
                            <option value="" disabled selected>Selecione uma categoria</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="produto-form-label">Local</label>
                    <div class="produto-select-wrapper">
                        <select class="produto-form-control">
                            <option value="" disabled selected>Selecione o local</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="produto-form-label">Quantidade<span class="req">*</span></label>
                    <input type="number" class="produto-form-control" value="0" min="0">
                </div>
            </div>

            <div class="produto-form-group">
                <label class="produto-form-label">Tipo de medida<span class="req">*</span></label>
                <div class="medidas-wrapper">
                    <div class="medidas-grid">
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="lata">
                            <img src="/public/assets/latas.png" alt="Lata" class="medida-icon">
                            <span class="medida-texto">Lata</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="litro">
                            <img src="/public/assets/garrafa.png" alt="Litro" class="medida-icon">
                            <span class="medida-texto">Litro</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="kg">
                            <img src="/public/assets/balanca.png" alt="KG" class="medida-icon">
                            <span class="medida-texto">KG</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="g">
                            <img src="/public/assets/peso.png" alt="G" class="medida-icon">
                            <span class="medida-texto">G</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="unidade">
                            <img src="/public/assets/barras.png" alt="Unidade" class="medida-icon">
                            <span class="medida-texto">Unidade</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="maco">
                            <img src="/public/assets/maco.png" alt="Maço" class="medida-icon">
                            <span class="medida-texto">Maço</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="ml">
                            <img src="/public/assets/vidro.png" alt="ML" class="medida-icon">
                            <span class="medida-texto">ML</span>
                        </div>
                        <div class="medida-box">
                            <input type="radio" name="tipo_medida" class="medida-radio" value="caixa">
                            <img src="/public/assets/caixa_preta.png" alt="Caixa" class="medida-icon">
                            <span class="medida-texto">Caixa</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="produto-form-group produto-descricao-group">
                <label class="produto-form-label">Descrição/ Observações (opcional)</label>
                <textarea class="produto-form-control produto-textarea" rows="5" placeholder="Adicione informações adicionais sobre o produto..."></textarea>
            </div>
        </div>
    `;

    setTimeout(() => {
        const boxes = wrapper.querySelectorAll('.medida-box');

        boxes.forEach(box => {
            box.addEventListener('click', () => {
                boxes.forEach(b => {
                    b.classList.remove('selected');
                    const radio = b.querySelector('.medida-radio');
                    if (radio) radio.checked = false;
                });

                box.classList.add('selected');
                const radioSelecionado = box.querySelector('.medida-radio');
                if (radioSelecionado) {
                    radioSelecionado.checked = true;
                }
            });

            const radioInput = box.querySelector('.medida-radio');
            if (radioInput) {
                radioInput.addEventListener('change', (e) => {
                    e.stopPropagation();
                    boxes.forEach(b => b.classList.remove('selected'));
                    box.classList.add('selected');
                });
            }
        });
    }, 0);

    return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('form-produto-container');
    if (container) {
        container.appendChild(criarFormularioProduto());
    }
});