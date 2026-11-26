import { criarFiltroInventario } from '../components/filtroInventario.js';
import { criarTabelaInventarios } from '../components/tabela.js';

// Dados iniciais baseados no layout
let inventarios = [
  { hora: '', data: '20/5/2024', dataISO: '2024-05-20', local: '', conferidos: "", total: "", diferencas: "", situacao: '', responsavel: '' },
  { hora: '', data: '15/5/2024', dataISO: '2024-05-15', local: '', conferidos: "", total: "", diferencas: "", situacao: '', responsavel: '' },
  { hora: '', data: '14/5/2024', dataISO: '2024-05-14', local: '', conferidos: "", total: "", diferencas: "", situacao: '', responsavel: '' },
  { hora: '', data: '11/5/2024', dataISO: '2024-05-11', local: '', conferidos: "", total: "", diferencas: "", situacao: '', responsavel: '' },
  { hora: '', data: '07/5/2024', dataISO: '2024-05-07', local: '', conferidos: "", total: "", diferencas: "", situacao: '', responsavel: '' },
];

function renderizarPagina() {
  const app = document.getElementById('app');

  // Conteúdo Principal
  const main = document.createElement('main');
  main.className = 'conteudo-principal';

  const tituloPagina = document.createElement('div');
  tituloPagina.className = 'cabecalho-pagina';
  tituloPagina.innerHTML = `
    <h2>Meus Pedidos</h2>
    <p>Consulte seus pedidos de ingredientes.</p>
  `;

  // Instancia o componente da Tabela
  const tabelaComponent = criarTabelaInventarios({
    onExportar: () => exportarCSV(inventarios),
  });

  // Instancia o componente de Filtro / Iniciar Inventário
  const filtroComponent = criarFiltroInventario({
    onFiltrar: (filtros) => {
      const filtrados = inventarios.filter((item) => {
        const matchResp = item.responsavel.toLowerCase().includes(filtros.responsavel.toLowerCase());
        const matchLocal = item.local.toLowerCase().includes(filtros.local.toLowerCase());
        const matchSit = !filtros.situacao || item.situacao === filtros.situacao;
        const matchInicio = !filtros.dataInicio || item.dataISO >= filtros.dataInicio;
        const matchFim = !filtros.dataFim || item.dataISO <= filtros.dataFim;
        return matchResp && matchLocal && matchSit && matchInicio && matchFim;
      });
      tabelaComponent.atualizarDados(filtrados);
    },
    onIniciarInventario: (dados) => {
      if (!dados.responsavel || !dados.local) {
        alert('Preencha pelo menos Responsável e Local para iniciar um inventário.');
        return;
      }

      const agora = new Date();
      const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      const data = `${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
      const dataISO = agora.toISOString().split('T')[0];

      inventarios.unshift({
        hora,
        data,
        dataISO,
        local: dados.local,
        conferidos: 0,
        total: 50,
        diferencas: 0,
        situacao: dados.situacao || 'Não concluído',
        responsavel: dados.responsavel,
      });

      tabelaComponent.atualizarDados(inventarios);
    },
  });

  main.appendChild(tituloPagina);
  main.appendChild(filtroComponent);
  main.appendChild(tabelaComponent.element);

  app.appendChild(main);

  // Popula a tabela inicialmente
  tabelaComponent.atualizarDados(inventarios);
}

function exportarCSV(lista) {
  const cabecalho = ['Hora', 'Data', 'Local', 'Conferidos', 'Total', 'Diferenças', 'Situação', 'Responsável'];
  const linhas = lista.map((i) => [i.hora, i.data, i.local, i.conferidos, i.total, i.diferencas, i.situacao, i.responsavel].join(';'));
  const csv = [cabecalho.join(';'), ...linhas].join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'relatorio-inventarios.csv';
  link.click();
}

document.addEventListener('DOMContentLoaded', renderizarPagina);