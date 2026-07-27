// 1. Array de dados com os botões da navegação
const menuItems = [
  { icon: '/img/icons8-home-50.png', alt: 'Home Icon', text: 'Home' },
  { icon: '/img/inbox.png', alt: 'Entrada Icon', text: 'Entrada de Produtos' },
  { icon: '/img/inbox.exit.png', alt: 'Saida Icon', text: 'Saída de Produtos' },
  { icon: '/img/icons8-clipboard-50.png', alt: 'Inventario Icon', text: 'Inventario' },
  { icon: '/img/icons8-shopping-cart-50.png', alt: 'Soli Icon', text: 'Solicitação da Cozinha' },
  { icon: '/img/icons8-graph-axes-24.png', alt: 'Relatório Icon', text: 'Relatório' }
];

// 2. Criar os elementos principais
const aside = document.createElement('aside');
aside.className = 'sidebar';

const header = document.createElement('header');
header.className = 'sidebar-header';

const logo = document.createElement('img');
logo.className = 'logo-img';
logo.src = '/img/logo-SENAC.png';
logo.alt = 'Logo';

// Monta o Header
header.appendChild(logo);

// 3. Criar a tag <nav>
const nav = document.createElement('nav');

// 4. Iterar sobre os itens do menu e criar os botões
menuItems.forEach(item => {
  const button = document.createElement('button');
  
  const outerSpan = document.createElement('span');
  
  const img = document.createElement('img');
  img.src = item.icon;
  img.alt = item.alt;

  const textSpan = document.createElement('span');
  textSpan.textContent = ` ${item.text} `;

  // Monta a estrutura interna do botão
  outerSpan.appendChild(img);
  outerSpan.appendChild(textSpan);
  button.appendChild(outerSpan);
  
  // Adiciona o botão ao <nav>
  nav.appendChild(button);
});

// 5. Unir tudo dentro da tag <aside>
aside.appendChild(header);
aside.appendChild(nav);

// 6. Inserir no HTML (no body)
document.body.appendChild(aside);