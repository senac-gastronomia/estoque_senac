const dadosAcoesPedido = [
  {
    titulo: "Aprovar Pedido",
    cor: "#16a34a",
    fundoCard: "#f0fdf4",
    icone: "/public/assets/certo.png",
    acao: () => {
      if (typeof exibirModalNaTela === 'function') {
        exibirModalNaTela(criarAlertaPedidoAprovado());
      }
    }
  },
  {
    titulo: "Encaminhar para compra",
    cor: "#2563eb",
    fundoCard: "#eff6ff",
    icone: "/public/assets/carrinho.azul.png",
    acao: () => {
      if (typeof exibirModalNaTela === 'function') {
        exibirModalNaTela(criarAlertaEncaminharPedido());
      }
    }
  },
  {
    titulo: "Rejeitar Pedido",
    cor: "#ef4444",
    fundoCard: "#fef2f2",
    icone: "/public/assets/lixeira.vermelha.png",
    acao: () => {
      if (typeof exibirModalNaTela === 'function') {
        exibirModalNaTela(criarAlertaRejeitarPedido());
      }
    }
  },
  {
    titulo: "Imprimir Pedido",
    cor: "#f59e0b",
    fundoCard: "#fffbeb",
    icone: "/public/assets/impressora.amarela.png",
    acao: () => window.print()
  }
];


function criarComponenteAcoesPedido() {
  const wrapper = document.createElement('div');
  wrapper.className = 'acoes-pedido-wrapper';

  let botoesHTML = '';

  dadosAcoesPedido.forEach((item, index) => {
    const fundoIcone = item.cor + '30'; // Transparência no círculo do ícone

    botoesHTML += `
      <button class="acao-pedido-btn" data-index="${index}" style="background-color: ${item.fundoCard}; border-bottom: 3px solid ${item.cor};">
        <div class="acao-pedido-icon" style="background-color: ${fundoIcone};">
          <img src="${item.icone}" alt="${item.titulo}" onerror="this.style.display='none'" />
        </div>
        <span class="acao-pedido-texto">${item.titulo}</span>
      </button>
    `;
  });

  wrapper.innerHTML = `
    <style>
      .acoes-pedido-card {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        padding: 20px 24px;
        font-family: Arial, sans-serif;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        box-sizing: border-box;
        margin-top: 20px;
      }
      .acoes-pedido-card h3 {
        margin: 0 0 16px 0;
        font-size: 16px;
        font-weight: bold;
        color: #111111;
      }
      .acoes-pedido-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
      .acao-pedido-btn {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 18px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        cursor: pointer;
        text-align: left;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .acao-pedido-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      .acao-pedido-btn:active {
        transform: scale(0.98);
      }
      .acao-pedido-icon {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .acao-pedido-icon img {
        width: 22px;
        height: 22px;
        object-fit: contain;
      }
      .acao-pedido-texto {
        font-size: 15px;
        font-weight: bold;
        color: #111111;
        line-height: 1.2;
      }

      /* Responsividade para ecrãs menores */
      @media (max-width: 900px) {
        .acoes-pedido-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 500px) {
        .acoes-pedido-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div class="acoes-pedido-card">
      <h3>Ações do pedido</h3>
      <div class="acoes-pedido-grid">
        ${botoesHTML}
      </div>
    </div>
  `;

  // Adiciona os eventos de clique a cada botão
  const botoes = wrapper.querySelectorAll('.acao-pedido-btn');
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-index');
      dadosAcoesPedido[idx].acao();
    });
  });

  return wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('acoes-pedido-container');
  if (container) {
    container.appendChild(criarComponenteAcoesPedido());
  }
});