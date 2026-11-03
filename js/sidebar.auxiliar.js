// 1. Array de dados com os botões da navegação
const menuItems = [
  { icon: '/img/icons8-home-50.png', alt: 'Home Icon', text: 'Dashboard', className: 'btn-dashboard', url: 'index_auxiliar.html' },
  { icon: '/img/estoque.png', alt: 'Estoque Icon', text: 'Estoque', className: '' },
  { icon: '/img/carrinho_deposito.png', alt: 'Inventario Icon', text: 'Inventário', className: '' },
  { icon: '/img/icons8-clipboard-50.png', alt: 'Solicitacoes Icon', text: 'Solicitações', className: '' },
  { icon: '/img/icons8-graph-axes-24.png', alt: 'Relatório Icon', text: 'Relatório', className: '' },
  { icon: '/img/config.png', alt: 'Configurações Icon', text: 'Configurações', className: '', url: 'configuracoes.html' }
];

// 2. Criar os elementos principais
const aside = document.createElement('aside');
aside.className = 'sidebar';

const header = document.createElement('header');
header.className = 'sidebar-header';

const logo = document.createElement('img');
logo.className = 'logo-img';
logo.src = '/img/logo-SENAC.png';
logo.alt = 'Logo Senac';

header.appendChild(logo);

// 3. Criar a tag <nav>
const nav = document.createElement('nav');

// 4. Iterar sobre os itens do menu e criar os botões
menuItems.forEach(item => {
  const button = document.createElement('button');
  if (item.className) button.className = item.className;
  
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

// 5. Criar o rodapé (Footer com o chapéu de chef e informações)
const footer = document.createElement('div');
footer.className = 'sidebar-footer';

const chapeuImg = document.createElement('img');
chapeuImg.className = 'chapeu-img';
chapeuImg.src = '/img/icons8-chapéu-de-chef-90.png'; 
chapeuImg.alt = 'Chapéu Chef';

const infoDiv = document.createElement('div');
infoDiv.className = 'info';

const span1 = document.createElement('span');
span1.innerHTML = '<strong>Cozinha Pedagógica Senac</strong>';

const span2 = document.createElement('span');
span2.textContent = 'Unidade: Senac Sorocaba';

const span3 = document.createElement('span');
span3.textContent = 'Setor: Cozinha Pedagógica';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.navbar-menu-btn');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      aside.classList.toggle('collapsed');
      
      // Alterna a classe de expansão no body para ajustar o layout inteiro
      document.body.classList.toggle('sidebar-collapsed');
    });
  }
});

infoDiv.appendChild(span1);
infoDiv.appendChild(span2);
infoDiv.appendChild(span3);

footer.appendChild(chapeuImg);
footer.appendChild(infoDiv);

// 6. Unir tudo dentro da tag <aside>
aside.appendChild(header);
aside.appendChild(nav);
aside.appendChild(footer);

// 7. Inserir no HTML (no body)
document.body.appendChild(aside);