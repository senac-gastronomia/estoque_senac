const dadosCartoesApoio = [
  {
    titulo: "Produtos em estoque",
    valor: 120,
    unidade: "itens",
    descricao: "total de produtos disponíveis",
    cor: "#f97316",
    icone: "/public/assets/caixa.png"
  },
  {
    titulo: "Usuários Cadastrados",
    valor: 22,
    unidade: "usuários",
    descricao: "",
    cor: "#3b82f6",
    icone: "/public/assets/grupo-auxiliar.png"
  }
];

function criarCartaoStat({ titulo, valor, unidade, descricao, cor, icone }) {
  const card = document.createElement('div');
  
  card.className = 'card';
  card.style.borderLeft = 'none';
  card.style.borderBottom = `3px solid ${cor}`;
  card.style.backgroundColor = cor + '15'; 
  
  const fundoIcone = cor + '25';
  const descHtml = descricao ? `<div class="card-desc">${descricao}</div>` : '';

  card.innerHTML = `
    <div class="card-icon" style="background-color: ${fundoIcone}; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center;">
      <img src="${icone}" alt="${titulo}" />
    </div>
    <div>
      <div class="card-title">${titulo}</div>
      <div class="card-value">${valor} <span>${unidade}</span></div>
      ${descHtml}
    </div>
  `;

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('dashboard-container');
  
  if (container) {
    dadosCartoesApoio.forEach(dados => {
      const cartaoElemento = criarCartaoStat(dados);
      container.appendChild(cartaoElemento);
    });
  }
});