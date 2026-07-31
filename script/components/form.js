export function createLoginForm() {
    const formLogin = document.createElement('form');
    formLogin.className = 'formLogin';

    // --- Componente: E-mail ---
    const areaEmail = document.createElement('div');
    areaEmail.className = 'areaEmail'; // Ou 'inputGroup' para ser genérico

    const inpEmailLabel = document.createElement('label');
    inpEmailLabel.className = 'inpLabel';
    inpEmailLabel.innerHTML = '<h2>E-mail</h2>';
    inpEmailLabel.setAttribute('for', 'inpEmail');

    const emailImg = document.createElement('img');
    emailImg.src = '/assets/img/EmailIcon.png';

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
    inpSenhaLabel.innerHTML = '<h2>Senha</h2>'; // Corrigido de 'E-mail' para 'Senha'
    inpSenhaLabel.setAttribute('for', 'inpSenha'); // Corrigido para 'inpSenha'

    const senhaImg = document.createElement('img');
    senhaImg.src = '/assets/img/KeyWordIcon.png';

    const inpSenha = document.createElement('input');
    inpSenha.id = 'inpSenha';
    inpSenha.type = 'password';
    inpSenha.placeholder = 'Digite sua senha';

    const senhaOlhoImg = document.createElement('img');
    senhaOlhoImg.src = '/assets/img/EyeIcon.png'; // Preenchido o ícone do olho

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
    const btnEntrar = document.createElement('button'); // Trocado para button type="submit" (mais semântico)
    btnEntrar.className = 'btnEntrar';
    btnEntrar.textContent = 'Entrar';
    btnEntrar.type = 'submit';

    // --- Montagem do Formulário ---
    formLogin.appendChild(areaEmail);
    formLogin.appendChild(areaSenha);
    formLogin.appendChild(esqueciSenha);
    formLogin.appendChild(btnEntrar);

    return formLogin;
}