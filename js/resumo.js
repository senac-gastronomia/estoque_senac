const dadosResumo = [
  { titulo: "Solicitações realizadas", valor: 12, cor: "azul", icone: "img/lista.png" }, //[cite: 7]
  { titulo: "Aprovadas", valor: 7, cor: "verde", icone: "img/certo.png" }, //[cite: 7]
  { titulo: "Pendentes", valor: 5, cor: "amarelo", icone: "img/clock.png" } //[cite: 7]
];

function criarSecaoResumo() {
  const container = document.createElement('div');
  container.className = 'dashboard-card resumo-container';

  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <img src="img/lista.png" alt="Resumo" class="card-icon-img" />
    <span class="card-title">Resumo do mês</span>
  `;
  container.appendChild(header);

  const listContainer = document.createElement('div');
  listContainer.className = 'resumo-list';

  dadosResumo.forEach(item => {
    const row = document.createElement('div');
    row.className = 'resumo-item';
    row.innerHTML = `
      <div class="resumo-info">
        <div class="resumo-icon-box ${item.cor}">
          <img src="${item.icone}" alt="${item.titulo}" class="resumo-item-img" />
        </div>
        <span class="resumo-titulo ${item.cor}">${item.titulo}</span>
      </div>
      <span class="resumo-valor">${item.valor}</span>
    `;
    listContainer.appendChild(row);
  });

  container.appendChild(listContainer);
  return container;
}

document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.getElementById('dashboard-container') || document.body;
  targetContainer.appendChild(criarSecaoResumo());
});