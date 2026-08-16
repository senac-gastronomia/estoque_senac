/* =========================================================
   DADOS DOS INGREDIENTES
   ========================================================= */

const ingredientes = [
    ["Peito de frango", "Sem osso"],
    ["Leite", "Desnatado"],
    ["Chocolate em pó", "95% cacau"],
    ["Creme de Leite", "Tradicional"],
    ["Açúcar", "Refinado"],
    ["Sal", "Refinado"],
    ["Fermento em pó", "Químico"],
    ["Baunilha", "Essência"],
    ["Farinha de trigo", "Tipo 1"],
    ["Ovo", "Codorna"],
    ["Manteiga", "Sem sal"],
    ["Óleo", "Soja"],
    ["Milho", "Verde"]
];


/* =========================================================
   ELEMENTOS
   ========================================================= */

const lista = document.querySelector(".lista-ingredientes");
const busca = document.querySelector(".buscar-input");
const carrinho = document.querySelector(".carrinho-ingredientes");
const total = document.querySelector(".numero-total");
const resetar = document.querySelector(".btn-resetar");

let itensCarrinho = [];


/* =========================================================
   CRIA A LISTA DE INGREDIENTES
   ========================================================= */

ingredientes.forEach(([nome, descricao]) => {

    lista.innerHTML += `
        <div class="linha-ingrediente">
            <div class="nome-ingrediente">${nome}</div>
            <div class="descricao-ingrediente">${descricao}</div>

            <input
                class="quantidade-input"
                type="text"
            >

            <button class="btn-adicionar">
                <img src="img-tabela/adicionar.png" alt="Adicionar">
            </button>
        </div>
    `;

});

console.log("Ingredientes criados:", lista.children.length);


/* =========================================================
   PESQUISA
   ========================================================= */

busca.addEventListener("input", () => {

    const texto = busca.value.toLowerCase().trim();

    document.querySelectorAll(".linha-ingrediente").forEach(linha => {

        const conteudo = linha.textContent.toLowerCase();

        linha.style.display =
            conteudo.includes(texto) ? "flex" : "none";

    });

});


/* =========================================================
   ADICIONAR AO CARRINHO
   ========================================================= */

lista.addEventListener("click", e => {

    const botao = e.target.closest(".btn-adicionar");

    if (!botao) return;

    const linha = botao.closest(".linha-ingrediente");
    const campo = linha.querySelector(".quantidade-input");
    const quantidade = campo.value.trim();

    if (!quantidade) {
        alert("Digite a quantidade do ingrediente antes de adicionar.");
        campo.focus();
        return;
    }

    itensCarrinho.push({
        ingrediente: linha.querySelector(".nome-ingrediente").textContent.trim(),
        descricao: linha.querySelector(".descricao-ingrediente").textContent.trim(),
        quantidade,
        observacao: ""
    });

    campo.value = "";
    atualizarCarrinho();

});


/* =========================================================
   ATUALIZA O CARRINHO
   ========================================================= */

function atualizarCarrinho() {

    carrinho.innerHTML = itensCarrinho.map((item, index) => `

        <div class="item-carrinho">

            <div class="item-ingrediente">
                ${item.ingrediente}
            </div>

            <div class="item-descricao">
                ${item.descricao}
            </div>

            <div class="item-quantidade">
                ${item.quantidade}
            </div>

            <div class="item-observacao">
                <input
                    class="observacao-input"
                    type="text"
                    value="${item.observacao}"
                    data-index="${index}"
                >
            </div>

            <div class="item-acao">
                <button class="btn-deletar" data-index="${index}">
                    <img
                        src="img-tabela/deletar.png"
                        alt="Deletar"
                    >
                </button>
            </div>

        </div>

    `).join("");

    total.textContent = itensCarrinho.length;

}


/* =========================================================
   DELETAR E OBSERVAÇÕES
   ========================================================= */

carrinho.addEventListener("click", e => {

    const botao = e.target.closest(".btn-deletar");

    if (!botao) return;

    itensCarrinho.splice(botao.dataset.index, 1);
    atualizarCarrinho();

});


carrinho.addEventListener("input", e => {

    if (!e.target.classList.contains("observacao-input")) return;

    itensCarrinho[e.target.dataset.index].observacao =
        e.target.value;

});


/* =========================================================
   RESETAR
   ========================================================= */

resetar.addEventListener("click", () => {

    itensCarrinho = [];
    atualizarCarrinho();

});