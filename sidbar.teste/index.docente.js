// Cria o aside
const sidebar = document.createElement("aside");
sidebar.className = "sidebar";

// Header
const header = document.createElement("header");
header.className = "sidebar-header";

const logo = document.createElement("img");
logo.className = "logo-img";
logo.src = "/img/logo-SENAC.png";
logo.alt = "Logo";

header.appendChild(logo);
sidebar.appendChild(header);

// Nav
const nav = document.createElement("nav");

// Função para criar botões
function criarBotao(icone, alt, texto) {
    const button = document.createElement("button");

    const spanContainer = document.createElement("span");

    const img = document.createElement("img");
    img.src = icone;
    img.alt = alt;

    const spanTexto = document.createElement("span");
    spanTexto.textContent = texto;

    spanContainer.appendChild(img);
    spanContainer.appendChild(spanTexto);

    button.appendChild(spanContainer);

    return button;
}

// Adiciona os botões
nav.appendChild(
    criarBotao("/img/icons8-home-50.png", "Home Icon", "Home")
);

nav.appendChild(
    criarBotao("/img/inbox.png", "Solicitacao Icon", "Nova Solicitação")
);

nav.appendChild(
    criarBotao("/img/icons8-clipboard-50.png", "Pedidos Icon", "Meus Pedidos")
);

sidebar.appendChild(nav);

// Adiciona ao body
document.body.appendChild(sidebar);