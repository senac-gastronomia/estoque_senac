const dadosIngredientes = [
  { nome: "Leite Integral", valor: 18 },
  { nome: "Farinha de trigo", valor: 9 },
  { nome: "Sal", valor: 21 },
  { nome: "Café", valor: 3 },
  { nome: "Açúcar", valor: 14 },
  { nome: "Fermento", valor: 11 }
];

function criarSecaoGrafico() {
  const container = document.createElement('div');
  container.className = 'chart-box';

  const header = document.createElement('div');
  header.className = 'chart-header';
  header.innerHTML = `
    <img src="/public/assets/calendario.png" alt="Ícone" width="20" onerror="this.style.display='none'" />
    <h3>Ingredientes mais pedidos nesse mês</h3>
  `;
  container.appendChild(header);

  const chartBody = document.createElement('div');
  chartBody.className = 'chart-body';

  const valorMaximo = 25; 

  dadosIngredientes.forEach(item => {
    const alturaPercentual = (item.valor / valorMaximo) * 100;

    const column = document.createElement('div');
    column.className = 'bar-col';
    
    column.innerHTML = `
      <span class="bar-val">${item.valor}</span>
      <div class="bar" style="height: ${alturaPercentual}%;"></div>
      <span class="bar-label">${item.nome}</span>
    `;
    chartBody.appendChild(column);
  });

  container.appendChild(chartBody);

  return container;
}

document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.getElementById('grafico-container') || document.getElementById('dashboard-container') || document.querySelector('.bottom-grid');
  if (targetContainer) {
    targetContainer.appendChild(criarSecaoGrafico());
  }
});