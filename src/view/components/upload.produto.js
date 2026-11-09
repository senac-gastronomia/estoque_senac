function criarComponenteUploadImagem() {
    const wrapper = document.createElement('div');
    wrapper.className = 'upload-imagem-wrapper';

    wrapper.innerHTML = `
        <style>
            .upload-card {
                background: #ffffff;
                border: 1px solid #eeeeee;
                border-radius: 8px;
                padding: 25px 20px;
                width: 100%;
                max-width: 280px;
                font-family: Arial, sans-serif;
                box-sizing: border-box;
                box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            }
            .upload-title {
                font-size: 14px;
                font-weight: bold;
                color: #111;
                text-align: center;
                margin: 0 0 20px 0;
            }
            .upload-dropzone {
                background-color: #f8f9fa;
                border: 1.5px dashed #cccccc;
                border-radius: 12px;
                padding: 40px 15px 30px 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .upload-main-icon {
                width: 48px;
                height: 48px;
                margin-bottom: 15px;
                opacity: 0.4;
                object-fit: contain;
            }
            .upload-status {
                font-size: 11px;
                color: #999999;
                font-weight: 500;
                margin: 0 0 20px 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
            }
            .upload-btn-label {
                background: #ffffff;
                border: 1px solid #cccccc;
                padding: 10px 15px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: bold;
                color: #111;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 15px;
                transition: background 0.2s ease;
            }
            .upload-btn-label:hover {
                background: #f0f0f0;
            }
            .upload-btn-icon {
                width: 14px;
                height: 14px;
                object-fit: contain;
            }
            .upload-hint {
                font-size: 10px;
                color: #aaaaaa;
                margin: 0;
            }
            .file-input {
                display: none;
            }
        </style>

        <div class="upload-card">
            <h3 class="upload-title">Imagem do produto</h3>
            
            <div class="upload-dropzone">
                <img src="/public/assets/image-placeholder.png" alt="Placeholder" class="upload-main-icon" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3342/3342137.png'">
                
                <p class="upload-status" id="upload-status-text">Nenhuma imagem selecionada</p>
                
                <label class="upload-btn-label">
                    <input type="file" class="file-input" id="produto-imagem-input" accept="image/png, image/jpeg">
                    <img src="/public/assets/upload-icon.png" alt="Upload" class="upload-btn-icon" onerror="this.src='https://cdn-icons-png.flaticon.com/512/109/109612.png'">
                    Selecione uma imagem
                </label>
                
                <p class="upload-hint">PNG, JPEG até 10mb</p>
            </div>
        </div>
    `;


    setTimeout(() => {
        const fileInput = wrapper.querySelector('#produto-imagem-input');
        const statusText = wrapper.querySelector('#upload-status-text');

        if (fileInput && statusText) {
            fileInput.addEventListener('change', function() {
                if (this.files && this.files.length > 0) {
                    const nomeFicheiro = this.files[0].name;
                    statusText.textContent = nomeFicheiro;
                    statusText.style.color = '#333';
                } else {
                    statusText.textContent = 'Nenhuma imagem selecionada';
                    statusText.style.color = '#999999';
                }
            });
        }
    }, 0);

    return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('upload-imagem-container');
    if (container) {
        container.appendChild(criarComponenteUploadImagem());
    }
});