export function criarFiltroInventario({ onFiltrar, onIniciarInventario }) {
  const section = document.createElement('section');
  section.className = 'card-filtro';

  section.innerHTML = `
    <form class="form-filtro" id="form-inventario">
      <div class="campos-grid">
        <div class="campo-grupo">
          <label for="filtro-responsavel">Responsável</label>
          <input type="text" id="filtro-responsavel" name="responsavel" placeholder="" />
        </div>

        <div class="campo-grupo">
          <label for="filtro-local">Local</label>
          <input type="text" id="filtro-local" name="local" placeholder="" />
        </div>

        <div class="campo-grupo">
          <label for="filtro-situacao">Situação</label>
          <select id="filtro-situacao" name="situacao">
            <option value=""></option>
            <option value="Concluído">Concluído</option>
            <option value="Não concluído">Não concluído</option>
          </select>
        </div>

        <div class="campo-grupo campo-periodo">
          <label for="data-inicio">Período do Inventário</label>
          <div class="periodo-inputs">
            <span class="icone-calendario">📅</span>
            <input type="date" id="data-inicio" name="dataInicio" />
            <span class="separador">-</span>
            <input type="date" id="data-fim" name="dataFim" />
          </div>
        </div>
      </div>

      <div class="acoes-filtro">
        <button type="submit" class="btn-iniciar">Iniciar inventário</button>
      </div>
    </form>
  `;

  const form = section.querySelector('#form-inventario');
  const inputs = form.querySelectorAll('input, select');

  const obterValores = () => ({
    responsavel: form.responsavel.value.trim(),
    local: form.local.value.trim(),
    situacao: form.situacao.value,
    dataInicio: form.dataInicio.value,
    dataFim: form.dataFim.value,
  });

  // Filtra em tempo real conforme o usuário preenche os campos
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (onFiltrar) onFiltrar(obterValores());
    });
  });

  // Dispara o início de um novo inventário
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (onIniciarInventario) onIniciarInventario(obterValores());
  });

  return section;
}