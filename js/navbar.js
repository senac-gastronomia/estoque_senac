function criarNavbar() {
  const navbar = document.createElement('header');
  navbar.className = 'navbar-container';

  navbar.innerHTML = `
    <!-- Lado Esquerdo: Menu e Logótipo/Título -->
    <div class="navbar-left">
      <button class="navbar-menu-btn" title="Menu">
        <img src="img/lista.png" alt="Menu" class="navbar-icon-img" />
      </button>
      <div class="navbar-brand">
        <img src="img/caixa.png" alt="Logo" class="navbar-logo-img" />
        <div class="navbar-titles">
          <span class="navbar-title">Controle de Estoque</span>
          <span class="navbar-subtitle">Cozinha Pedagógica Senac</span>
        </div>
      </div>
    </div>

    <!-- Centro: Calendário e Data/Hora -->
    <div class="navbar-center">
      <img src="img/calendario.png" alt="Calendário" class="navbar-icon-img" />
      <div class="navbar-date-info">
        <span class="navbar-date-main">17 de junho de 2026</span>
        <span class="navbar-date-sub">Quarta-Feira 20:18</span>
      </div>
    </div>

    <!-- Lado Direito: Perfil do Utilizador -->
    <div class="navbar-right">
      <div class="navbar-user-icon-box">
        <img src="img/icone.png" alt="Utilizador" class="navbar-user-img" />
      </div>
      <div class="navbar-user-info">
        <span class="navbar-user-name">Fulano</span>
        <span class="navbar-user-role">Professor</span>
      </div>
    </div>
  `;

  return navbar;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertBefore(criarNavbar(), document.body.firstChild);
});