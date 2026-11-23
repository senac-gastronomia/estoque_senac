export function criarTabelaInventarios({ onExportar } = {}) {
    const container = document.createElement('section');
    container.className = 'card-tabela';

    container.innerHTML = `
    <div class="tabela-header">
      <div class="tabela-titulo">
        <span class="icone-prancheta">📋</span>
        <h2>Inventários Realizados</h2>
      </div>
      <button type="button" class="btn-exportar" id="btn-exportar-relatorio">
        Exportar Relatório <span>⤓</span>
      </button>
    </div>

    <div class="tabela-wrapper">
      <table class="tabela-inventarios">
        <thead>
          <tr>
            <th>Data do inventário</th>
            <th>Local</th>
            <th>produtos conferidos</th>
            <th>Total de produtos</th>
            <th>Diferenças encontradas</th>
            <th>situação</th>
            <th>responsavel</th>
          </tr>
        </thead>
        <tbody id="tabela-corpo"></tbody>
      </table>
    </div>
  `;

    const tbody = container.querySelector('#tabela-corpo');
    const btnExportar = container.querySelector('#btn-exportar-relatorio');

    if (btnExportar && onExportar) {
        btnExportar.addEventListener('click', onExportar);
    }

    function atualizarDados(listaInventarios) {
        tbody.innerHTML = '';

        if (!listaInventarios || listaInventarios.length === 0) {
            tbody.innerHTML = `
        <tr>
          <td colspan="7" class="sem-registros">Nenhum inventário encontrado.</td>
        </tr>
      `;
            return;
        }

        listaInventarios.forEach((item) => {
            const tr = document.createElement('tr');
            const percentual = item.total > 0 ? Math.round((item.conferidos / item.total) * 100) : 0;
            const isConcluido = item.situacao.toLowerCase() === 'concluído';
            const classeBadge = isConcluido ? 'badge-concluido' : 'badge-nao-concluido';

            tr.innerHTML = `
        <td class="col-data">
          <span class="hora">${item.hora}</span>
          <span class="data">${item.data}</span>
        </td>
        <td>${item.local}</td>
        <td>${item.conferidos}(${percentual}%)</td>
        <td>${item.total}</td>
        <td>${item.diferencas}</td>
        <td>
          <span class="badge ${classeBadge}">${item.situacao}</span>
        </td>
        <td>${item.responsavel}</td>
      `;

            tbody.appendChild(tr);
        });
    }

    return {
        element: container,
        atualizarDados,
    };
}