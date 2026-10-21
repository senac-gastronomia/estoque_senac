// Array com os dados dos cartões e os caminhos exatos para as imagens na pasta img/
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

/**
 * Cria e retorna o elemento HTML de um cartão de estatística
 */
function criarCartaoStat({ titulo, valor, unidade, descricao, cor, icone }) {
  const card = document.createElement('div');
  card.className = 'stat-card';
  
  // Define a cor da barra inferior dinamicamente
  card.style.setProperty('--card-color', cor);
  
  // Define a cor de fundo do círculo com transparência
  const fundoIcone = cor + '25'; // '25' adiciona transparência em Hexadecimal (~15%)

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

// Executa assim que o documento estiver pronto
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