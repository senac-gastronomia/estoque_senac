export function createLoginForm() {
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

    const senhaOlhoImg = document.createElement('img');
    senhaOlhoImg.src = '../../../public/assets/img/EyeIcon.png'; 

    areaSenha.appendChild(inpSenhaLabel);
    areaSenha.appendChild(senhaImg);
    areaSenha.appendChild(inpSenha);
    areaSenha.appendChild(senhaOlhoImg);

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

    // --- Componente: Botão Microsoft ---
    const btnMicrosoft = document.createElement('button');
    btnMicrosoft.className = 'btn-microsoft';
    btnMicrosoft.type = 'button'; // type='button' evita que ele tente enviar o formulário
    btnMicrosoft.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21">
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
        </svg>
        <span>Logar com Microsoft</span>
    `;

    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = inpEmail.value.trim();
        const senha = inpSenha.value.trim();
        const usuario = {
            email,
            senha
        };
        
        try {
            const resultado = await fetch("http://localhost:3600/autenticacao/login", {
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
        } catch (erro) { // Corrigi o catch(erro) aqui para não dar erro no console
            console.error(erro);
            alert("Erro ao logar!");
        }
    });

    // --- Montagem do Formulário ---
    formLogin.appendChild(areaEmail);
    formLogin.appendChild(areaSenha);
    formLogin.appendChild(esqueciSenha);
    formLogin.appendChild(btnEntrar);
    
    // Anexando o botão da Microsoft exatamente embaixo do botão Entrar
    formLogin.appendChild(btnMicrosoft); 

    return formLogin;
}