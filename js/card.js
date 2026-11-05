const dadosCartoes = [
  {
    titulo: "Produtos em estoque",
    valor: 120,
    unidade: "itens",
    descricao: "total de produtos disponíveis",
    cor: "#f97316", // Laranja
    icone: "img/caixa.png" //[cite: 2]
  },
  {
    titulo: "Solicitações pendentes",
    valor: 4,
    unidade: "solicitações",
    descricao: "Aguardando aprovação",
    cor: "#eab308", // Amarelo
    icone: "img/clock.png" //[cite: 2]
  },
  {
    titulo: "Solicitações aprovadas",
    valor: 5,
    unidade: "solicitações",
    descricao: "Aprovadas",
    cor: "#22c55e", // Verde
    icone: "img/certo.png" //[cite: 2]
  },
  {
    titulo: "Itens indisponíveis",
    valor: 8,
    unidade: "itens",
    descricao: "Sem estoque disponível",
    cor: "#ef4444", // Vermelho
    icone: "img/warning.png" //[cite: 2]
  }
];


function criarCartaoStat({ titulo, valor, unidade, descricao, cor, icone }) {
  const card = document.createElement('div');
  card.className = 'stat-card';
  
 
  card.style.setProperty('--card-color', cor);
  

  const fundoIcone = cor + '25'; 

  card.innerHTML = `
    <div class="stat-icon" style="background-color: ${fundoIcone};">
      <img src="${icone}" alt="${titulo}" class="stat-icon-img" />
    </div>
    <div class="stat-content">
      <span class="stat-title">${titulo}</span>
      <div class="stat-value-wrapper">
        <span class="stat-value">${valor}</span> ${unidade}
      </div>
      <p class="stat-desc">${descricao}</p>
    </div>
  `;

  return card;
}


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('dashboard-container');
  
  if (container) {
    dadosCartoes.forEach(dados => {
      const cartaoElemento = criarCartaoStat(dados);
      container.appendChild(cartaoElemento);
    });
  } else {
    console.error("Contentor com id 'dashboard-container' não foi encontrado no HTML.");
  }
});