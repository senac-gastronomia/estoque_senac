const dadosResumo = [
  { titulo: "Solicitações realizadas", valor: 12, cor: "azul", icone: "img/lista.png" },
  { titulo: "Aprovadas", valor: 7, cor: "verde", icone: "img/certo.png" },
  { titulo: "Pendentes", valor: 5, cor: "amarelo", icone: "img/clock.png" }
];

function criarSecaoResumo() {
  const summaryBox = document.createElement('div');
  summaryBox.className = 'summary-box';


  const titleDiv = document.createElement('div');
  titleDiv.className = 'summary-title';
  titleDiv.innerHTML = `
    <img src="/public/assets/lista.png" alt="Resumo" width="20" />
    <h3>Resumo do mês</h3>
  `;
  summaryBox.appendChild(titleDiv);


  dadosResumo.forEach(item => {
    const summaryItem = document.createElement('div');
    summaryItem.className = 'summary-item';
    summaryItem.innerHTML = `
      <span>
        <img src="${item.icone}" alt="Ícone" width="16" /> 
        <span class="${item.cor}">${item.titulo}</span>
      </span>
      <strong>${item.valor}</strong>
    `;
    summaryBox.appendChild(summaryItem);
  });

  return summaryBox;
}

document.addEventListener("DOMContentLoaded", () => {
  const bottomGrid = document.querySelector('.bottom-grid');

  if (bottomGrid) {
    bottomGrid.appendChild(criarSecaoResumo());
  }
});