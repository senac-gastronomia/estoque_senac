function criarComponenteUploadImagem() {
    const wrapper = document.createElement('div');
    wrapper.className = 'upload-imagem-wrapper';

    wrapper.innerHTML = `
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
                    statusText.textContent = this.files[0].name;
                    statusText.classList.add('has-file');
                } else {
                    statusText.textContent = 'Nenhuma imagem selecionada';
                    statusText.classList.remove('has-file');
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