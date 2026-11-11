const menuItems = [
  { icon: '/public/assets/icons8-home-50.png', alt: 'Home Icon', text: 'Dashboard', className: 'btn-dashboard', url: '/src/view/auxiliar.dashboard.html' },
  { icon: '/public/assets/estoque.png', alt: 'Estoque Icon', text: 'Estoque', className: '' },
  { icon: '/public/assets/adicionar.caixa.png', alt: 'Adicionar Caixa Icon', text: 'Adicionar Produto', className: '', url: '/src/view/nova.solicitacao.html' },
  { icon: '/public/assets/carrinho_deposito.png', alt: 'Inventario Icon', text: 'Inventário', className: '' },
  { icon: '/public/assets/icons8-clipboard-50.png', alt: 'Solicitacoes Icon', text: 'Solicitações', className: '' },
  { icon: '/public/assets/icons8-graph-axes-24.png', alt: 'Relatório Icon', text: 'Relatório', className: '', url: '/src/view/relatoriosAuxiliar.html' },
  { icon: '/public/assets/config.png', alt: 'Configurações Icon', text: 'Configurações', className: '', url: '/src/view/configuracoes.html' }
];

const aside = document.createElement('aside');
aside.className = 'sidebar collapsed';

const header = document.createElement('header');
header.className = 'sidebar-header';

const logo = document.createElement('img');
logo.className = 'logo-img';
logo.src = '/public/assets/logo-SENAC.png';
logo.alt = 'Logo Senac';

header.appendChild(logo);

const nav = document.createElement('nav');

menuItems.forEach(item => {
  const button = document.createElement('button');
  if (item.className) button.className = item.className;

  if (item.url) {
    button.addEventListener('click', () => {
      window.location.href = item.url;
    });
  }

  const outerSpan = document.createElement('span');

  const img = document.createElement('img');
  img.src = item.icon;
  img.alt = item.alt;

  const textSpan = document.createElement('span');
  textSpan.textContent = item.text;

  outerSpan.appendChild(img);
  outerSpan.appendChild(textSpan);
  button.appendChild(outerSpan);

  nav.appendChild(button);
});

const footer = document.createElement('div');
footer.className = 'sidebar-footer';

const chapeuImg = document.createElement('img');
chapeuImg.className = 'chapeu-img';
chapeuImg.src = '/public/assets/icons8-chapéu-de-chef-90.png';
chapeuImg.alt = 'Chapéu Chef';

const infoDiv = document.createElement('div');
infoDiv.className = 'info';

const span1 = document.createElement('span');
span1.innerHTML = '<strong>Cozinha Pedagógica Senac</strong>';

const span2 = document.createElement('span');
span2.textContent = 'Unidade: Senac Sorocaba';

const span3 = document.createElement('span');
span3.textContent = 'Setor: Cozinha Pedagógica';

infoDiv.appendChild(span1);
infoDiv.appendChild(span2);
infoDiv.appendChild(span3);

footer.appendChild(chapeuImg);
footer.appendChild(infoDiv);

aside.appendChild(header);
aside.appendChild(nav);
aside.appendChild(footer);

document.body.appendChild(aside);

const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.navbar-menu-btn');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      aside.classList.toggle('collapsed');
      overlay.classList.toggle('active');
    });
  }

  overlay.addEventListener('click', () => {
    aside.classList.add('collapsed');
    overlay.classList.remove('active');
  });
});