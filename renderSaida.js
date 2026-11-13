
const renderSaida = () => {
    const container = document.createElement('div');
    container.style.height = '100vh';
    container.className = 'container';

    const form = document.createElement('form');
    form.className = 'formSaida';

    //botao para iniciar o popup
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Registrar Saída'
    button.className = 'btnSaida';

    //overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    //popup
    const popup = document.createElement('div');
    popup.className = 'popup';



    // Criando o cabeçalho
    const header = document.createElement('div');
    header.className = 'popupHeader';


    // Criando a div para agrupar os textos
    const headerText = document.createElement('div');
    headerText.className = 'headerText';

    // Adicionando título e subtítulo dentro dela
    

    // Criando o título
    const titulo = document.createElement('h2');
    titulo.textContent = 'Saída de Produtos';

    //subtitulo
    const subtitulo = document.createElement('a')
    subtitulo.textContent = 'Registre a retirada do produto no estoque';

    // Criando o botão de fechar
    const btnFechar = document.createElement('button');
    btnFechar.textContent = 'X';
    btnFechar.className = 'btnFechar';

    // Botao de saida de registro
    const btnSaidaRegistro = document.createElement('button');
    btnSaidaRegistro.type = 'submit';
    btnSaidaRegistro.textContent = 'Registrar Saida';
    btnSaidaRegistro.className = 'btnSaidaRegistro'

    // Adicionando o título e o botão ao cabeçalho
    header.appendChild(headerText);
    header.appendChild(btnFechar);

    
    headerText.appendChild(titulo);
    headerText.appendChild(subtitulo);


    // Adicionando o cabeçalho ao pop-up
    popup.appendChild(header);


    //botao de registrar

    popup.appendChild(btnSaidaRegistro);
    // Evento para fechar o pop-up
    btnFechar.addEventListener('click', () => {
        overlay.classList.remove('ativo');
    });










    overlay.appendChild(popup)


    button.addEventListener('click', () => {
        overlay.classList.add('ativo')
    })


    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('ativo')
        }
    });

    container.appendChild(button);
    container.appendChild(overlay);

    container.appendChild(form);


    return container

}

export default renderSaida;