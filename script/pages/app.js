//pega a div app do html
const app = document.getElementById('app');

//div com a img do fundo
const background = document.createElement('div');
background.className = 'background';

const divison = document.createElement('div');
divison.className = 'division'

//div principal
const loginScreen = document.createElement('div');
loginScreen.className = 'loginScreen';

//container da parte esquerda
const containerLeft = document.createElement('div');
containerLeft.className = 'containerLeft';

//container onde fica a logo
const logoSenacContainer = document.createElement('div');
logoSenacContainer.className = 'logoSenacContainer';

// container do texto embaixo da logo
const textLogo1 = document.createElement('p');
textLogo1.innerHTML = '<b class="textLogoB">EDUCAÇÃO</b> QUE TRANSFORMA';
const textLogo2 = document.createElement('p');
textLogo2.innerHTML = '<b class = "textLogoB">ESTOQUE</b> QUE ORGANIZA';

//logo do senac
const senacLogo = document.createElement('img');
senacLogo.className = 'senacLogo'
senacLogo.src = '/assets/img/SenacLogo.png';

// card escrito Estoque
const estoqueCard = document.createElement('div');
estoqueCard.className = 'estoqueCard';

// container da img de caxia no container estoque
const estoqueImgContainer = document.createElement('div');
estoqueImgContainer.className = 'imgContainer';

// img de caixa no card estoque
const estoqueImg = document.createElement('img');
estoqueImg.src = '/assets/img/caixaCardEstoque.png';

// texto do card estoque
const estoqueText = document.createElement('p');
estoqueText.innerHTML = '<u class = "textEstoqueB">ESTOQUE</u>';

const suportContainer = document.createElement('div');
suportContainer.className = 'suportContainer';

const suportContainerImg = document.createElement('div');
suportContainerImg.className = 'suportContainerImg'
const suportImg = document.createElement('img');
suportImg.src = '/assets/img/suport.png'

const suportTxt1 = document.createElement('b');
suportTxt1.textContent = 'Precisa de ajuda?';
const suportTxt2 = document.createElement('p');
suportTxt2.textContent = 'Entre em contato com o suporte do Senac';

//a tela entra no app
app.appendChild(loginScreen);

//o fundo entra na tela
loginScreen.appendChild(background);
loginScreen.appendChild(divison)
//o container da esquerda entra na tela primeiro
divison.appendChild(containerLeft);

// o container da logo entra na parte esquerda
containerLeft.appendChild(logoSenacContainer);

//no container do logo entra a img texto1 e texto2
logoSenacContainer.appendChild(senacLogo);
logoSenacContainer.appendChild(textLogo1);
logoSenacContainer.appendChild(textLogo2);

//na parte esquerda entra o container do estoque
containerLeft.appendChild(estoqueCard);

// entra no card do estoque o container para a img de caixa
estoqueCard.appendChild(estoqueImgContainer);
// coloca a img de caixa no container para ela
estoqueImgContainer.appendChild(estoqueImg);

containerLeft.appendChild(suportContainer);
suportContainer.appendChild(suportContainerImg);
suportContainerImg.appendChild(suportImg);
suportContainer.appendChild(suportTxt1);
suportContainer.appendChild(suportTxt2);


//-----------------------------------------------------------------

// container da parte direita da tela
const containerRight = document.createElement('div');
containerRight.className = 'containerRight';

// container do login
const loginContainer = document.createElement('div');
loginContainer.className = 'loginContainer';

//container da img
const loginImgContainer = document.createElement('div');
loginImgContainer.className = 'loginImgContainer';

// img do login
const loginImg = document.createElement('img');
loginImg.src = '/assets/img/login.png';

const LoginTxt = document.createElement('div');
LoginTxt.className = 'LoginTxt';

const titulo = document.createElement('h1');
titulo.className = 'titulo';
titulo.innerHTML = 'Acesse sua conta';

const subTitulo = document.createElement('h3');
subTitulo.className = 'subTitulo';
subTitulo.innerHTML = 'Entre com suas <p class="subTituloP">credenciais</p> para continuar';

const formLogin = document.createElement('form');
formLogin.className = 'formLogin';

//Email
const areaEmail = document.createElement('div');
areaEmail.className = 'areaEmail';

const inpEmailLabel = document.createElement('label');
inpEmailLabel.className = 'inpEmailLabel';
inpEmailLabel.innerHTML = '<h2>E-mail</h2>';
inpEmailLabel.setAttribute('for', 'inpEmail');

const inpEmail = document.createElement('input');
inpEmail.id = 'inpEmail';
inpEmail.type = 'email';
inpEmail.placeholder = 'Digite seu e-mail';

const emailImg = document.createElement('img');
emailImg.src = '/assets/img/EmailIcon.png';

// Senha

const areaSenha = document.createElement('div');
areaSenha.className = 'areaEmail';

const inpSenhaLabel = document.createElement('label');
inpSenhaLabel.className = 'inpEmailLabel';
inpSenhaLabel.innerHTML = '<h2>E-mail</h2>';
inpSenhaLabel.setAttribute('for', 'inpEmail');

const inpSenha = document.createElement('input');
inpSenha.id = 'inpSenha';
inpSenha.type = 'password';
inpSenha.placeholder = 'Digite sua senha';

const senhaImg = document.createElement('img');
senhaImg.src = '/assets/img/KeyWordIcon.png';

const senhaOlhoImg = document.createElement('img');
senhaOlhoImg.src = '/assets/img/'//falta o icone do olho

const esqueciSenha = document.createElement('a');
esqueciSenha.className = 'esqueciSenha';
esqueciSenha.textContent = 'Esqueci minha senha';
esqueciSenha.href = '#'// nao tem continuação ainda

const btnEntrar = document.createElement('input');
btnEntrar.className = 'btnEntrar';
btnEntrar.textContent = 'Entrar';
btnEntrar.type = 'submit';


const alertaExclusivo = document.createElement('div');
alertaExclusivo.className = 'alertaExclusivo';

const imgAlerta = document.createElement('img');
imgAlerta.src = '/assets/img/escudoicon.png';

const alertaTxt = document.createElement('P');
alertaTxt.textContent = 'Acesso exclusivo para colaboradores.';

divison.appendChild(containerRight);
containerRight.appendChild(loginContainer);
loginContainer.appendChild(loginImgContainer);
loginImgContainer.appendChild(loginImg);
loginImgContainer.appendChild(LoginTxt);
LoginTxt.appendChild(titulo);
LoginTxt.appendChild(subTitulo);
loginContainer.appendChild(formLogin);
formLogin.appendChild(areaEmail);
areaEmail.appendChild(inpEmailLabel);
areaEmail.appendChild(emailImg);
areaEmail.appendChild(inpEmail);

formLogin.appendChild(areaSenha);
areaSenha.appendChild(senhaImg);
areaSenha.appendChild(inpSenha);
areaSenha.appendChild(senhaOlhoImg);
loginContainer.appendChild(esqueciSenha);
formLogin.appendChild(btnEntrar);
loginContainer.appendChild(alertaExclusivo)
alertaExclusivo.appendChild(imgAlerta);
alertaExclusivo.appendChild(alertaTxt);