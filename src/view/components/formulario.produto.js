function criarFormularioProduto() {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-produto-wrapper';

    wrapper.innerHTML = `
        <style>
            .form-produto {
                background: #fff;
                padding: 30px;
                border-radius: 8px;
                max-width: 750px; /* Largura ajustada para evitar que a label da descrição quebre */
                margin: 0 auto;
                font-family: Arial, sans-serif;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                text-align: left; /* Garante que todos os textos fiquem alinhados à esquerda */
            }
            .form-group {
                margin-bottom: 20px;
            }
            .form-row {
                display: grid;
                gap: 18px;
                margin-bottom: 20px;
            }
            .row-3, .row-cat { 
                grid-template-columns: 1.3fr 1.3fr 1fr; 
            }
            .form-label {
                font-size: 13px;
                font-weight: bold;
                color: #111;
                display: block;
                margin-bottom: 8px;
                text-align: left; /* Força o alinhamento das labels à esquerda */
            }
            .form-label .req {
                color: #e53935;
            }
            .form-control {
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 13px;
                outline: none;
                box-sizing: border-box;
                color: #333;
            }
            .form-control::placeholder {
                color: #999;
            }
            .select-icon {
                position: relative;
            }
            .select-icon select {
                appearance: none;
                cursor: pointer;
            }
            .select-icon::after {
                content: "▼";
                position: absolute;
                right: 12px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 10px;
                color: #555;
                pointer-events: none;
            }
            .medidas-wrapper {
                display: flex;
                width: 100%;
                justify-content: center; /* Centraliza a grelha de botões */
            }
            .medidas-grid {
                display: grid;
                grid-template-columns: repeat(4, 95px);
                gap: 15px;
            }
            .medida-box {
                border: 1px solid #e0e0e0;
                border-radius: 6px;
                height: 85px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                position: relative;
                background: #fff;
                transition: all 0.2s ease;
            }
            .medida-box.selected {
                border-color: #333;
                box-shadow: 0 0 0 1px #333;
            }
            .medida-radio {
                position: absolute;
                top: 8px;
                left: 8px;
                margin: 0;
                cursor: pointer;
            }
            .medida-icon {
                width: 32px;
                height: 32px;
                margin-bottom: 5px;
                object-fit: contain;
            }
            .medida-texto {
                font-size: 12px;
                font-weight: bold;
                color: #111;
            }
        </style>
        
        <div class="form-produto">
            <div class="form-row row-3">
                <div>
                    <label class="form-label">Nome do produto<span class="req">*</span></label>
                    <input type="text" class="form-control" placeholder="Ex: leite integral">
                </div>
                <div>
                    <label class="form-label">Codigo<span class="req">*</span></label>
                    <input type="text" class="form-control" placeholder="Ex: leite LT001">
                </div>
                <div>
                    <label class="form-label">Data de validade<span class="req">*</span></label>
                    <div style="position: relative;">
                        <input type="text" class="form-control" placeholder="__/__/____" style="padding-left: 35px;">
                        <img src="/public/assets/calendario.png" alt="Calendario" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 18px; pointer-events: none;">
                    </div>
            </div>
            </div>

            <div class="form-row row-cat">
                <div class="select-icon">
                    <label class="form-label">Categoria<span class="req">*</span></label>
                    <select class="form-control">
                        <option value="" disabled selected>Selecione uma categoria</option>
                    </select>
                </div>
                <div class="select-icon">
                    <label class="form-label">Local</label>
                    <select class="form-control">
                        <option value="" disabled selected>Selecione o local</option>
                    </select>
                </div>
                <div>
                    <label class="form-label">Quantidade<span class="req">*</span></label>
                    <input type="number" class="form-control" value="0" min="0">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Tipo de medida<span class="req">*</span></label>
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

            <div class="form-group" style="margin-top: 25px;">
                <label class="form-label" style="margin-bottom: 5px;">Descrição/ Observações (opcional)</label>
                <textarea class="form-control" rows="4" placeholder="Adicione informações adicionais sobre o produto..." style="resize: none;"></textarea>
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
                    if(radio) radio.checked = false;
                });
                
                box.classList.add('selected');
                const radioSelecionado = box.querySelector('.medida-radio');
                if(radioSelecionado) {
                    radioSelecionado.checked = true;
                }
            });

            const radioInput = box.querySelector('.medida-radio');
            if(radioInput) {
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