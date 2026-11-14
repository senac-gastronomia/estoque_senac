
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




    // Adicionando o cabeçalho ao pop-up
    popup.appendChild(header);


    //botao de registrar

    popup.appendChild(btnSaidaRegistro);
    // Evento para fechar o pop-up
    btnFechar.addEventListener('click', () => {
        overlay.classList.remove('ativo');
    });


    //Campo do nome, data, quantidade e codigo

    //linha dos campos
    const linhaCampos = document.createElement('div');
    linhaCampos.className = 'linhaCampos';

    //linha dos campos 2
    const linhaCampos2 = document.createElement('div');
    linhaCampos2.className = 'linhaCampos2';

    //nomes
    const campoNome = document.createElement('div');
    campoNome.className = 'campo';

    const InputNome = document.createElement('input');
    InputNome.placeholder = 'Ex: farinha de trigo';
    InputNome.type = 'text';

    const LabelNome = document.createElement('label');
    LabelNome.textContent = 'Nome do produto';

    //data
    const campoData = document.createElement('div');
    campoData.className = 'campo';

    const InputData = document.createElement('input');
    InputData.type = 'date';

    const LabeData = document.createElement('label')
    LabeData.textContent = 'Data de saida';


    //Codigo
    const campoCodigo = document.createElement('div');
    campoCodigo.className = 'campo';

    const InputCodigo = document.createElement('input');
    InputCodigo.type = 'number';
    InputCodigo.placeholder = 'Ex: 7891000438411';

    const LabelCodigo = document.createElement('label');
    LabelCodigo.textContent = 'Codigo do produto';


    //quantidade
    const campoQuantidade = document.createElement('div');
    campoQuantidade.className = 'campo';


    const inputQuantidade = document.createElement('input');
    inputQuantidade.type = 'number';
    inputQuantidade.min = '0';
    inputQuantidade.placeholder = '0';

    const labelQuantidade = document.createElement('label');
    labelQuantidade.textContent = 'Quantidade';





    // ligações nome
    campoNome.appendChild(InputNome);
    campoNome.appendChild(LabelNome);

    // ligacoes data
    campoData.appendChild(InputData);
    campoData.appendChild(LabeData);

    //ligacoes codigo
    campoCodigo.appendChild(InputCodigo)
    campoCodigo.appendChild(LabelCodigo)

    //ligacoes quantidade
    campoQuantidade.appendChild(inputQuantidade)
    campoQuantidade.appendChild(labelQuantidade)


    //ligacoes para linha
    linhaCampos.appendChild(campoNome);
    linhaCampos.appendChild(campoData);
    // ligacao de tudo
    popup.appendChild(linhaCampos);








    overlay.appendChild(popup)


    button.addEventListener('click', () => {
        overlay.classList.add('ativo')
    })


    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('ativo')
        }
    });


    // Adicionando o título e o botão ao cabeçalho
    header.appendChild(headerText);
    header.appendChild(btnFechar);
    headerText.appendChild(titulo);
    headerText.appendChild(subtitulo);    // Adicionando o título e o botão ao cabeçalho
    header.appendChild(headerText);
    header.appendChild(btnFechar);
    headerText.appendChild(titulo);
    headerText.appendChild(subtitulo);    // Adicionando o título e o botão ao cabeçalho
    header.appendChild(headerText);
    header.appendChild(btnFechar);
    headerText.appendChild(titulo);
    headerText.appendChild(subtitulo);
    container.appendChild(button);
    container.appendChild(overlay);
    container.appendChild(form);


    return container

}

export default renderSaida;