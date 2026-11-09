const dadosCartoes = [
  {
    titulo: "Produtos em estoque",
    valor: 120,
    unidade: "itens",
    descricao: "total de produtos disponíveis",
    cor: "#f97316",
    icone: "/public/assets/caixa.png"
  },
  {
    titulo: "Solicitações pendentes",
    valor: 4,
    unidade: "solicitações",
    descricao: "Aguardando aprovação",
    cor: "#eab308",
    icone: "/public/assets/clock.png"
  },
  {
    titulo: "Solicitações aprovadas",
    valor: 5,
    unidade: "solicitações",
    descricao: "Aprovadas",
    cor: "#22c55e",
    icone: "/public/assets/certo.png"
  },
  {
    titulo: "Itens indisponíveis",
    valor: 8,
    unidade: "itens",
    descricao: "Sem estoque disponível",
    cor: "#ef4444",
    icone: "/public/assets/warning.png"
  }
];

function criarCartaoStat({ titulo, valor, unidade, descricao, cor, icone }) {
  const card = document.createElement('div');
  
  card.className = 'card';
  card.style.borderLeft = 'none';
  card.style.borderBottom = `3px solid ${cor}`;
  
  const fundoIcone = cor + '25';

  card.innerHTML = `
    <div class="card-icon" style="background-color: ${fundoIcone}; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center;">
      <img src="${icone}" alt="${titulo}" />
    </div>
    <div>
      <div class="card-title">${titulo}</div>
      <div class="card-value">${valor} <span>${unidade}</span></div>
      <div class="card-desc">${descricao}</div>
    </div>
  `;

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('dashboard-container');
  
  if (container) {
    container.classList.add('cards-grid');
    
    dadosCartoes.forEach(dados => {
      const cartaoElemento = criarCartaoStat(dados);
      container.appendChild(cartaoElemento);
    });
  } else {
    console.error("Contêiner com id 'dashboard-container' não foi encontrado no HTML.");
  }
});