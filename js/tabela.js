const dadosSolicitacoes = [
  { data: "23/06", aula: "Confeitaria", situacao: "Ingredientes reservados", classeStatus: "green-text" },
  { data: "24/06", aula: "Gastronomia Italiana", situacao: "Aguardando aprovação", classeStatus: "yellow-text" },
  { data: "25/06", aula: "Gastronomia Brasileira", situacao: "Fora de estoque", classeStatus: "red-text" }
];

function criarSecaoTabela() {
  const section = document.createElement('section');
  section.className = 'table-section';

  const headerDiv = document.createElement('div');
  headerDiv.className = 'table-header';
  headerDiv.innerHTML = `
    <img src="img/lista.png" alt="Ícone Tabela" width="20" />
    <h3>Solicitações</h3>
  `;
  section.appendChild(headerDiv);

  const tabela = document.createElement('table');
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
      <td><span class="status ${item.classeStatus}">${item.situacao}</span></td>
    `;
    tbody.appendChild(tr);
  });

  section.appendChild(tabela);

  const footerDiv = document.createElement('div');
  footerDiv.className = 'table-footer';
  
  const btnVerTodas = document.createElement('button');
  btnVerTodas.textContent = 'Ver todas as Solicitações';
  btnVerTodas.addEventListener('click', () => alert('A redirecionar...'));

  footerDiv.appendChild(btnVerTodas);
  section.appendChild(footerDiv);

  return section;
}

document.addEventListener("DOMContentLoaded", () => {
  const secaoGrafico = document.querySelector('.bottom-grid');
  const containerPai = document.querySelector('.container') || document.body;

  if (secaoGrafico) {
    containerPai.insertBefore(criarSecaoTabela(), secaoGrafico);
  } else {
    containerPai.appendChild(criarSecaoTabela());
  }
});