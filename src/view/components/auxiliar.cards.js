const dadosCartoesEstoque = [
  {
    descricaoTopo: "Abaixo do estoque minimo",
    valor: 8,
    unidade: "Itens",
    titulo: "Produtos em falta",
    cor: "#f97316", 
    icone: "/public/assets/warning.png" 
  },
  {
    descricaoTopo: "Total de produtos disponíveis",
    valor: 538,
    unidade: "Itens",
    titulo: "Produtos em estoque",
    cor: "#f59e0b",
    icone: "/public/assets/caixa.png"
  },
  {
    descricaoTopo: "Vencem nos proximos dias",
    valor: 12,
    unidade: "Itens",
    titulo: "Itens proximos da validade",
    cor: "#ef4444",
    icone: "/public/assets/estoque.falta.png"
  },
  {
    descricaoTopo: "Total de entradas realizadas",
    valor: 24,
    unidade: "Itens",
    titulo: "Entradas hoje",
    cor: "#22c55e",
    icone: "/public/assets/entrada.png"
  }
];

function criarCartaoEstoque({ descricaoTopo, valor, unidade, titulo, cor, icone }) {
  const card = document.createElement('div');
  
  card.className = 'card';
  card.style.borderLeft = 'none';
  card.style.borderBottom = `3px solid ${cor}`;
  card.style.flexDirection = 'column';
  card.style.alignItems = 'center';
  card.style.justifyContent = 'center';
  card.style.padding = '15px 20px';
  
  const fundoIcone = cor + '25';

  card.innerHTML = `
    <div style="text-align: center; font-size: 11px; color: #666; margin-bottom: 12px; width: 100%;">
        ${descricaoTopo}
    </div>
    <div style="display: flex; align-items: center; gap: 15px; width: 100%; justify-content: center;">
      <div class="card-icon" style="background-color: ${fundoIcone}; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <img src="${icone}" alt="${titulo}" style="width: 24px; height: 24px; object-fit: contain;" />
      </div>
      <div style="display: flex; flex-direction: column;">
        <div style="font-size: 28px; font-weight: bold; color: #111; line-height: 1;">
            ${valor} <span style="font-size: 13px; font-weight: normal; color: #555;">${unidade}</span>
        </div>
        <div style="font-size: 12px; font-weight: bold; color: #222; margin-top: 4px;">
            ${titulo}
        </div>
      </div>
    </div>
  `;

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('dashboard-container');
  
  if (container) {
    container.classList.add('cards-grid');
    
    dadosCartoesEstoque.forEach(dados => {
      const cartaoElemento = criarCartaoEstoque(dados);
      container.appendChild(cartaoElemento);
    });
  }
});