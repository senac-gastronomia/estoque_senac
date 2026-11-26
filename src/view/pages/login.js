import { createLoginForm } from '../components/form.js';

const hashParams = new URLSearchParams(window.location.hash.substring(1));
const accessToken = hashParams.get('access_token');

if (accessToken) {
    window.history.replaceState({}, document.title, window.location.pathname);

    fetch('/autenticacao/microsoft/validar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: accessToken })
    })
        .then(async (res) => {
            const dados = await res.json();
            if (!res.ok) {
                throw new Error(dados.erro || 'Erro ao validar acesso.');
            }
            localStorage.setItem('token', accessToken);
            localStorage.setItem('usuario', JSON.stringify(dados.dadosUsuario));
            window.location.href = dados.destino;
        })
        .catch((err) => {
            alert(err.message);
        });
}

const params = new URLSearchParams(window.location.search);
const erroOAuth = params.get('error_description') || params.get('erro');
if (erroOAuth) {
    alert(decodeURIComponent(erroOAuth.replace(/\+/g, ' ')));
    window.history.replaceState({}, document.title, window.location.pathname);
}

const app = document.getElementById('app');

const background = document.createElement('div');
background.className = 'background';

const divison = document.createElement('div');
divison.className = 'division';

const loginScreen = document.createElement('div');
loginScreen.className = 'loginScreen';

const containerLeft = document.createElement('div');
containerLeft.className = 'containerLeft';

const logoSenacContainer = document.createElement('div');
logoSenacContainer.className = 'logoSenacContainer';

const textLogo1 = document.createElement('p');
textLogo1.innerHTML = '<b class="textLogoB">EDUCAÇÃO</b> QUE TRANSFORMA';
const textLogo2 = document.createElement('p');
textLogo2.innerHTML = '<b class = "textLogoB">ESTOQUE</b> QUE ORGANIZA';

const senacLogo = document.createElement('img');
senacLogo.className = 'senacLogo';
senacLogo.src = '../../../public/assets/img/SenacLogo.png';

const estoqueCard = document.createElement('div');
estoqueCard.className = 'estoqueCard';

const estoqueImgContainer = document.createElement('div');
estoqueImgContainer.className = 'imgContainer';

const estoqueImg = document.createElement('img');
estoqueImg.src = '../../../public/assets/img/caixaCardEstoque.png';

const estoqueText = document.createElement('p');
estoqueText.innerHTML = '<u class = "textEstoqueB">ESTOQUE</u>';

const suportContainer = document.createElement('div');
suportContainer.className = 'suportContainer';

const suportContainerImg = document.createElement('div');
suportContainerImg.className = 'suportContainerImg';
const suportImg = document.createElement('img');
suportImg.src = '../../../public/assets/img/suport.png';

const suportTxt1 = document.createElement('b');
suportTxt1.textContent = 'Precisa de ajuda?';
const suportTxt2 = document.createElement('p');
suportTxt2.textContent = 'Entre em contato com o suporte do Senac';

app.appendChild(loginScreen);

loginScreen.appendChild(background);
loginScreen.appendChild(divison);
divison.appendChild(containerLeft);

containerLeft.appendChild(logoSenacContainer);

logoSenacContainer.appendChild(senacLogo);
logoSenacContainer.appendChild(textLogo1);
logoSenacContainer.appendChild(textLogo2);

containerLeft.appendChild(estoqueCard);

estoqueCard.appendChild(estoqueImgContainer);
estoqueImgContainer.appendChild(estoqueImg);
estoqueCard.appendChild(estoqueText);

containerLeft.appendChild(suportContainer);
suportContainer.appendChild(suportContainerImg);
suportContainerImg.appendChild(suportImg);
suportContainer.appendChild(suportTxt1);
suportContainer.appendChild(suportTxt2);

const containerRight = document.createElement('div');
containerRight.className = 'containerRight';

const loginContainer = document.createElement('div');
loginContainer.className = 'loginContainer';

const loginImgContainer = document.createElement('div');
loginImgContainer.className = 'loginImgContainer';

const loginImg = document.createElement('img');
loginImg.src = '../../../public/assets/img/login.png';

const LoginTxt = document.createElement('div');
LoginTxt.className = 'LoginTxt';

const titulo = document.createElement('h1');
titulo.className = 'titulo';
titulo.innerHTML = 'Acesse sua conta';

const subTitulo = document.createElement('h3');
subTitulo.className = 'subTitulo';
subTitulo.innerHTML = 'Entre com suas <p class="subTituloP">credenciais</p> para continuar';

const alertaExclusivo = document.createElement('div');
alertaExclusivo.className = 'alertaExclusivo';

const imgAlerta = document.createElement('img');
imgAlerta.src = '../../../public/assets/img/escudoicon.png';

const alertaTxt = document.createElement('p');
alertaTxt.textContent = 'Acesso exclusivo para colaboradores.';

divison.appendChild(containerRight);
containerRight.appendChild(loginContainer);

loginContainer.appendChild(loginImgContainer);
loginImgContainer.appendChild(loginImg);
loginImgContainer.appendChild(LoginTxt);
LoginTxt.appendChild(titulo);
LoginTxt.appendChild(subTitulo);

const formLoginComponent = createLoginForm();
loginContainer.appendChild(formLoginComponent);

loginContainer.appendChild(alertaExclusivo);
alertaExclusivo.appendChild(imgAlerta);
alertaExclusivo.appendChild(alertaTxt);