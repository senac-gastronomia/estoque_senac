// Dados do gráfico de ingredientes mais pedidos
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
  container.className = 'dashboard-card grafico-container';

  // Cabeçalho do Gráfico
  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <span class="card-icon">📈</span>
    <span class="card-title">Ingredientes mais pedidos nesse mês</span>
  `;
  container.appendChild(header);

  // Área de barras do gráfico
  const chartBody = document.createElement('div');
  chartBody.className = 'chart-body';

  // Encontrar o valor máximo para calcular a altura percentual das barras (escala até 20/25)
  const valorMaximo = 25; 

  // Criar colunas/barras
  const barsArea = document.createElement('div');
  barsArea.className = 'chart-bars-area';

  dadosIngredientes.forEach(item => {
    const alturaPercentual = (item.valor / valorMaximo) * 100;

    const column = document.createElement('div');
    column.className = 'chart-column';
    
    column.innerHTML = `
      <div class="bar-wrapper">
        <div class="bar" style="height: ${alturaPercentual}%;"></div>
      </div>
      <span class="bar-label">${item.nome}</span>
    `;
    barsArea.appendChild(column);
  });

  chartBody.appendChild(barsArea);
  container.appendChild(chartBody);

  return container;
}

// Inserir no DOM após o carregamento
document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.getElementById('dashboard-container') || document.body;
  targetContainer.appendChild(criarSecaoGrafico());
});