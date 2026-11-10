import criarInputSenha from "../utils/senhaVisibilidade.js";

// Adicionamos 'icons' como parâmetro da função
export function createLoginForm(icons) {
    const formLogin = document.createElement('form');
    formLogin.className = 'formLogin';

    // --- Componente: E-mail ---
    const areaEmail = document.createElement('div');
    areaEmail.className = 'areaEmail';

    const inpEmailLabel = document.createElement('label');
    inpEmailLabel.className = 'inpLabel';
    inpEmailLabel.innerHTML = '<h2>E-mail</h2>';
    inpEmailLabel.setAttribute('for', 'inpEmail');

    const emailImg = document.createElement('img');
    emailImg.src = '../../../public/assets/img/EmailIcon.png';

    const inpEmail = document.createElement('input');
    inpEmail.id = 'inpEmail';
    inpEmail.type = 'email';
    inpEmail.placeholder = 'Digite seu e-mail';

    areaEmail.appendChild(inpEmailLabel);
    areaEmail.appendChild(emailImg);
    areaEmail.appendChild(inpEmail);

    // --- Componente: Senha ---
    const areaSenha = document.createElement('div');
    areaSenha.className = 'areaSenha';

    const inpSenhaLabel = document.createElement('label');
    inpSenhaLabel.className = 'inpLabel';
    inpSenhaLabel.innerHTML = '<h2>Senha</h2>';
    inpSenhaLabel.setAttribute('for', 'inpSenha');

    const senhaImg = document.createElement('img');
    senhaImg.src = '../../../public/assets/img/KeyWordIcon.png';

    const inpSenha = document.createElement('input');
    inpSenha.id = 'inpSenha';
    inpSenha.type = 'password';
    inpSenha.placeholder = 'Digite sua senha';
    inpSenha.required = true;



    // Passando os icons recebidos por parâmetro
    const campoSenha = criarInputSenha(inpSenha, icons);

    areaSenha.appendChild(inpSenhaLabel);

    areaSenha.appendChild(senhaImg);
    areaSenha.appendChild(campoSenha); // O campoSenha já encapsula o input e o botão de visibilidade
    // --- Componente: Esqueci minha senha ---
    const esqueciSenha = document.createElement('a');
    esqueciSenha.className = 'esqueciSenha';
    esqueciSenha.textContent = 'Esqueci minha senha';
    esqueciSenha.href = '#';

    // --- Componente: Botão Entrar ---
    const btnEntrar = document.createElement('button');
    btnEntrar.className = 'btnEntrar';
    btnEntrar.textContent = 'Entrar';
    btnEntrar.type = 'submit';

    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = inpEmail.value.trim();
        const senha = inpSenha.value.trim();
        const usuario = { email, senha };

        try {
            const resultado = await fetch("http://localhost:3000/autenticacao/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });
            const confirmacao = await resultado.json();
            if (!resultado.ok) {
                alert("Conta inexistente!");
            } else {
                alert("Login realizado com sucesso!");
            }
            return confirmacao;
        }
        catch (erro) { // Corrigido para capturar o erro corretamente
            console.error(erro);
            alert("Erro ao realizar login!");
        }
    });

    // --- Montagem do Formulário ---
    formLogin.appendChild(areaEmail);
    formLogin.appendChild(areaSenha);
    formLogin.appendChild(esqueciSenha);
    formLogin.appendChild(btnEntrar);

    return formLogin;
}