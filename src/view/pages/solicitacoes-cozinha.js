import { SolicitationCard } from
    '../components/solicitationCard.js';
 
// DADOS DEMONSTRATIVOS
// Posteriormente serão recebidos do Controller.
 
const pedidos = [
    {
        id: 1,
        docente: 'João.S',
        setor: 'Confeitaria',
        dataPedido: '26/05/2024',
        dataEntrega: '02/06/2024',
        status: 'Pendente',
 
        observacoes: 'Aula de bolo de chocolate com cobertura.',
 
        produtos: [
            { nome: 'Farinha de trigo', quantidade: '5 kg' },
            { nome: 'Açúcar', quantidade: '2 kg' },
            { nome: 'Leite', quantidade: '10 litros' }
        ]
    },
 
    {
        id: 2,
        docente: 'Maria Oliveira',
        setor: 'Panificação',
        dataPedido: '27/05/2024',
        dataEntrega: '03/06/2024',
        status: 'Em andamento',
 
        observacoes: 'Materiais para aula prática.',
 
        produtos: [
            { nome: 'Fermento biológico', quantidade: '500 g' },
            { nome: 'Farinha de trigo', quantidade: '10 kg' }
        ]
    }
];
 
// ELEMENTOS DA PÁGINA
 
const lista = document.getElementById('listaSolicitacoes');
 
const estadoVazio = document.getElementById('estadoVazio');
 
const pesquisa = document.getElementById('pesquisaPedido');
 
const mensagemVazia = estadoVazio.querySelector('p');
 
const descricaoVazia = estadoVazio.querySelector('span');
 
 
// CARREGAR PEDIDOS
 
function carregarPedidos(dados) {
 
    lista.innerHTML = '';
 
    if (dados.length === 0) {
 
        lista.hidden = true;
        estadoVazio.hidden = false;
 
        if (pesquisa.value.trim() !== '') {
 
            mensagemVazia.textContent = 'Nenhum pedido encontrado';
 
            descricaoVazia.textContent =
                'Tente pesquisar por outro docente ou setor.';
 
        } else {
 
            mensagemVazia.textContent = 'Nenhum pedido no momento';
 
            descricaoVazia.textContent =
                'Quando os docentes enviarem solicitações, elas aparecerão aqui.';
        }
 
        return;
    }
 
    lista.hidden = false;
    estadoVazio.hidden = true;
 
    dados.forEach(pedido => {
 
        lista.insertAdjacentHTML(
            'beforeend',
            SolicitationCard(pedido)
        );
 
    });
}
 
 
// PESQUISAR PEDIDOS
 
pesquisa.addEventListener('input', () => {
 
    const termo = pesquisa.value
        .trim()
        .toLowerCase();
 
    const filtrados = pedidos.filter(pedido => {
 
        return (
            pedido.docente.toLowerCase().includes(termo) ||
            pedido.setor.toLowerCase().includes(termo)
        );
 
    });
 
    carregarPedidos(filtrados);
 
});
 
 
// VISUALIZAR DETALHES
 
lista.addEventListener('click', (event) => {
 
    const botao = event.target.closest('.btn-ver-pedido');
 
    if (!botao) return;
 
    const id = botao.dataset.pedidoId;
 
    const detalhes = document.getElementById(`detalhes-${id}`);
 
    if (!detalhes) return;
 
    detalhes.hidden = !detalhes.hidden;
 
    botao.innerHTML = detalhes.hidden
        ? '<i class="fa-regular fa-file-lines"></i> Ver pedido'
        : '<i class="fa-solid fa-chevron-up"></i> Ocultar pedido';
 
});
 
 
// INICIALIZAÇÃO DA PÁGINA
 
carregarPedidos(pedidos);