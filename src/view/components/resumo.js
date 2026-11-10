const dadosResumo = [
  { titulo: "Solicitações realizadas", valor: 12, cor: "azul", icone: "/public/assets/resumo.png" },
  { titulo: "Aprovadas", valor: 7, cor: "verde", icone: "/public/assets/certo.png" },
  { titulo: "Pendentes", valor: 5, cor: "amarelo", icone: "/public/assets/clock.png" }
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
  const container = document.getElementById('resumo-container');

  if (container) {
    container.appendChild(criarSecaoResumo());
  } else {
    console.error("Container de resumo não encontrado no HTML!");
  }
});