import { createLoginForm } from '../components/form.js';

// --- CONFIGURAÇÃO DO SUPABASE DIRETAMENTE NO FRONT-END ---
// Substitua pelos valores reais que encontra no painel do Supabase em Project Settings > API
const SUPABASE_URL = 'https://mrjeiydkfpinjdfdrigm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_I-SCohfTZfmuFumyqykbXA_Ec5enXkz';

// Cria a instância do Supabase utilizando o script carregado via CDN no HTML
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 
// Pega a div app do html
const app = document.getElementById('app');
 
// Div com a img do fundo
const background = document.createElement('div');
background.className = 'background';
 
const divison = document.createElement('div');
divison.className = 'division';
 
// Div principal
const loginScreen = document.createElement('div');
loginScreen.className = 'loginScreen';
 
// Container da parte esquerda
const containerLeft = document.createElement('div');
containerLeft.className = 'containerLeft';
 
// Container onde fica a logo
const logoSenacContainer = document.createElement('div');
logoSenacContainer.className = 'logoSenacContainer';
 
// Container do texto embaixo da logo
const textLogo1 = document.createElement('p');
textLogo1.innerHTML = '<b class="textLogoB">EDUCAÇÃO</b> QUE TRANSFORMA';
const textLogo2 = document.createElement('p');
textLogo2.innerHTML = '<b class = "textLogoB">ESTOQUE</b> QUE ORGANIZA';
 
// Logo do senac
const senacLogo = document.createElement('img');
senacLogo.className = 'senacLogo';
senacLogo.src = '../../../public/assets/img/SenacLogo.png';
 
// Card escrito Estoque
const estoqueCard = document.createElement('div');
estoqueCard.className = 'estoqueCard';
 
// Container da img de caixa no container estoque
const estoqueImgContainer = document.createElement('div');
estoqueImgContainer.className = 'imgContainer';
 
// Img de caixa no card estoque
const estoqueImg = document.createElement('img');
estoqueImg.src = '../../../public/assets/img/caixaCardEstoque.png';
 
// Texto do card estoque
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
 
// A tela entra no app
app.appendChild(loginScreen);
 
// O fundo entra na tela
loginScreen.appendChild(background);
loginScreen.appendChild(divison);
// O container da esquerda entra na tela primeiro
divison.appendChild(containerLeft);
 
// O container da logo entra na parte esquerda
containerLeft.appendChild(logoSenacContainer);
 
// No container do logo entra a img texto1 e texto2
logoSenacContainer.appendChild(senacLogo);
logoSenacContainer.appendChild(textLogo1);
logoSenacContainer.appendChild(textLogo2);
 
// Na parte esquerda entra o container do estoque
containerLeft.appendChild(estoqueCard);
 
// Entra no card do estoque o container para a img de caixa
estoqueCard.appendChild(estoqueImgContainer);
// Coloca a img de caixa no container para ela
estoqueImgContainer.appendChild(estoqueImg);
estoqueCard.appendChild(estoqueText);
 
containerLeft.appendChild(suportContainer);
suportContainer.appendChild(suportContainerImg);
suportContainerImg.appendChild(suportImg);
suportContainer.appendChild(suportTxt1);
suportContainer.appendChild(suportTxt2);
 
// Container da parte direita da tela
const containerRight = document.createElement('div');
containerRight.className = 'containerRight';
 
// Container do login
const loginContainer = document.createElement('div');
loginContainer.className = 'loginContainer';
 
// Container da img
const loginImgContainer = document.createElement('div');
loginImgContainer.className = 'loginImgContainer';
 
// Img do login
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
 
// --- Montagem da Tela da Direita ---
divison.appendChild(containerRight);
containerRight.appendChild(loginContainer);
 
// 1. Adiciona a imagem e os textos
loginContainer.appendChild(loginImgContainer);
loginImgContainer.appendChild(loginImg);
loginImgContainer.appendChild(LoginTxt);
LoginTxt.appendChild(titulo);
LoginTxt.appendChild(subTitulo);
 
// 2. Chama o componente do formulário e injeta na tela
const formLoginComponent = createLoginForm();
loginContainer.appendChild(formLoginComponent);

// 3. Botão da Microsoft configurado para interagir diretamente com o Supabase no browser
const btnMicrosoft = loginContainer.querySelector('.btn-microsoft') || loginContainer.querySelector('#btn-microsoft');

if (btnMicrosoft) {
    btnMicrosoft.addEventListener('click', async (e) => {
        e.preventDefault(); 
        
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'azure',
                options: {
                    redirectTo: 'http://localhost:3000/docente', // Página para onde o usuário vai após logar com sucesso
                    queryParams: {
                        prompt: 'select_account' // Força a exibir a seleção de contas da Microsoft
                    }
                }
            });

            if (error) throw error;
        } catch (err) {
            console.error("Erro ao autenticar com a Microsoft:", err.message);
        }
    });
}
 
// 4. Adiciona o alerta no final
loginContainer.appendChild(alertaExclusivo);
alertaExclusivo.appendChild(imgAlerta);
alertaExclusivo.appendChild(alertaTxt);