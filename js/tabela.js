const dadosSolicitacoes = [
  { data: "23/06", aula: "Confeitaria", situacao: "Ingredientes reservados", classeStatus: "status-verde" },
  { data: "24/06", aula: "Gastronomia Italiana", situacao: "Aguardando aprovação", classeStatus: "status-amarelo" },
  { data: "25/06", aula: "Gastronomia Brasileira", situacao: "Fora de estoque", classeStatus: "status-vermelho" }
];

function criarSecaoTabela() {
  const container = document.createElement('div');
  container.className = 'tabela-container';

  const headerBox = document.createElement('div');
  headerBox.className = 'tabela-header-box';
  headerBox.innerHTML = `
    <img src="img/lista.png" alt="Ícone Tabela" class="tabela-header-icon-img" />
    <span>Solicitações</span>
  `;
  container.appendChild(headerBox);

  const tabela = document.createElement('table');
  tabela.className = 'tabela-solicitacoes';
  tabela.innerHTML = `
    <thead>
      <tr>
        <th>Data</th>
        <th>Aula</th>
        <th>Situação</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = tabela.querySelector('tbody');
  dadosSolicitacoes.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.data}</td>
      <td>${item.aula}</td>
      <td><span class="${item.classeStatus}">${item.situacao}</span></td>
    `;
    tbody.appendChild(tr);
  });

  container.appendChild(tabela);

  const footerDiv = document.createElement('div');
  footerDiv.className = 'tabela-footer';
  const btnVerTodas = document.createElement('button');
  btnVerTodas.className = 'btn-ver-todas';
  btnVerTodas.textContent = 'Ver todas as Solicitações';
  btnVerTodas.addEventListener('click', () => alert('A redirecionar...'));

  footerDiv.appendChild(btnVerTodas);
  container.appendChild(footerDiv);

  return container;
}

document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.getElementById('dashboard-container') || document.body;
  targetContainer.appendChild(criarSecaoTabela());
});