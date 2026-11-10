function criarCartaoAlertas() {
    const wrapper = document.createElement('div');
    wrapper.className = 'alertas-card';

    wrapper.innerHTML = `
        <div class="alertas-header">
            <!-- Caso não tenha este ícone exato, substitua pelo caminho do seu ícone de alerta -->
            <img src="/public/assets/warning-red.png" alt="Alerta" onerror="this.src='/public/assets/warning.png'">
            <h3>Alertas Importantes</h3>
        </div>
        
        <div class="alertas-body">
            <div class="alerta-item alerta-red">
                <span class="alerta-dot red"></span>
                <strong>Leite integral vence em 2 dias</strong>
                <span class="alerta-data">Data de entrega 31/05/2024</span>
            </div>
            
            <div class="alerta-item alerta-yellow">
                <span class="alerta-dot yellow"></span>
                <strong>Entrega chegará daqui 3 dias</strong>
                <span class="alerta-data">Data de validade 30/05/2024</span>
            </div>
        </div>
        
        <div class="alertas-footer">
            <a href="#">Ver todos os alertas</a>
        </div>
    `;

    return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
    // Certifique-se de ter uma <section id="alertas-container"></section> no seu HTML
    const container = document.getElementById('alertas-container');
    
    if (container) {
        container.appendChild(criarCartaoAlertas());
    }
});