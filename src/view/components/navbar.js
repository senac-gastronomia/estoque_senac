function criarNavbar() {
  const navbar = document.createElement('header');
  navbar.className = 'navbar-container';

  navbar.innerHTML = `
    <!-- Lado Esquerdo: Menu e Logótipo/Título -->
    <div class="navbar-left">
      <button class="navbar-menu-btn" title="Menu">
        <img src="/public/assets/lista.png" alt="Menu" class="navbar-icon-img" />
      </button>
      <div class="navbar-brand">
        <img src="/public/assets/caixa.png" alt="Logo" class="navbar-logo-img" />
        <div class="navbar-titles">
          <span class="navbar-title">Controle de Estoque</span>
          <span class="navbar-subtitle">Cozinha Pedagógica Senac</span>
        </div>
      </div>
    </div>

    <!-- Centro: Calendário e Data/Hora -->
    <div class="navbar-center">
      <img src="/public/assets/calendario.png" alt="Calendário" class="navbar-icon-img" />
      <div class="navbar-date-info">
        <span id="data-atual" class="navbar-date-main"></span>
        <span id="hora-atual" class="navbar-date-sub"></span>
      </div>
    </div>

    <!-- Lado Direito: Perfil do Utilizador -->
    <div class="navbar-right">
      <div class="navbar-user-icon-box">
        <img src="/public/assets/icone.png" alt="Utilizador" class="navbar-user-img" />
      </div>
      <div class="navbar-user-info">
        <span class="navbar-user-name">Fulano</span>
        <span class="navbar-user-role">Professor</span>
      </div>
    </div>
  `;

  return navbar;
}

// Função para atualizar data e hora (sem segundos)
function atualizarDataHora() {
  const agora = new Date();

  const data = agora.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const diaSemanaRaw = agora.toLocaleDateString('pt-BR', {
    weekday: 'long'
  });
  const diaSemana = diaSemanaRaw.charAt(0).toUpperCase() + diaSemanaRaw.slice(1);

  const hora = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const elData = document.getElementById('data-atual');
  const elHora = document.getElementById('hora-atual');

  if (elData && elHora) {
    elData.textContent = data;
    elHora.textContent = `${diaSemana} ${hora}`;
  }
}

// Inicialização da Navbar
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertBefore(
    criarNavbar(),
    document.body.firstChild
  );

  atualizarDataHora();
  setInterval(atualizarDataHora, 1000);
});