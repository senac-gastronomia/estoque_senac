// 1. Array de dados com os botões e os caminhos corretos para os arquivos HTML do Docente
const menuItems = [
  { icon: '/img/icons8-home-50.png', alt: 'Home Icon', text: 'Dashboard', className: 'btn-dashboard', url: 'index_docente.html' },
  { icon: '/img/icons8-clipboard-50.png', alt: 'Pedidos Icon', text: 'Pedidos', className: '', url: 'apoio.html' },
  { icon: '/img/grupo-auxiliar.png', alt: 'Usuarios Icon', text: 'Usuários', className: '', url: 'usuarios.html' }, // Ajuste o nome da página de usuários se necessário
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

// 4. Iterar sobre os itens do menu, criar os botões e adicionar o evento de redirecionamento
menuItems.forEach(item => {
  const button = document.createElement('button');
  if (item.className) button.className = item.className;
  
  // Evento de clique para levar para a respetiva página (evita erro se a url estiver vazia)
  button.addEventListener('click', () => {
    if (item.url) {
      window.location.href = item.url;
    } else {
      console.warn('URL não definida para este botão.');
    }
  });

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

// 8. Lógica do botão de abrir/fechar a sidebar (executada após o DOM carregar)
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