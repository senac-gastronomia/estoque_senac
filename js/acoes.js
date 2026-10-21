const dadosAcoes = [
  {
    titulo: "Nova solicitação",
    descricao: "Solicitar ingredientes",
    cor: "laranja",
    icone: "img/plus.png", //
    acao: () => alert("A abrir nova solicitação...")
  },
  {
    titulo: "Minhas solicitações",
    descricao: "Acompanhar solicitações",
    cor: "azul",
    icone: "img/lista.png", //
    acao: () => alert("A abrir as minhas solicitações...")
  }
];

function criarSecaoAcoes() {
  const containerSecao = document.createElement('div');
  containerSecao.className = 'acoes-container';

  const tituloSecao = document.createElement('div');
  tituloSecao.className = 'acoes-titulo';
  tituloSecao.textContent = "Ações rápidas";
  containerSecao.appendChild(tituloSecao);

  const grid = document.createElement('div');
  grid.className = 'acoes-grid';

  dadosAcoes.forEach(dados => {
    const botao = document.createElement('button');
    botao.className = `acao-card ${dados.cor}`;
    
    botao.innerHTML = `
      <div class="acao-icon-box">
        <img src="${dados.icone}" alt="${dados.titulo}" class="acao-icon-img" />
      </div>
      <div class="acao-textos">
        <span class="acao-main-title">${dados.titulo}</span>
        <span class="acao-desc">${dados.descricao}</span>
      </div>
    `;

    botao.addEventListener('click', dados.acao);
    grid.appendChild(botao);
  });

  containerSecao.appendChild(grid);
  return containerSecao;
}

document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.getElementById('dashboard-container') || document.body;
  targetContainer.appendChild(criarSecaoAcoes());
});