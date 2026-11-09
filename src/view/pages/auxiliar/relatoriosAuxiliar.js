import { Table } from "../../components/tabelaAuxiliar.js";


// ======================================
// MOVIMENTAÇÕES RECENTES
// ======================================

const movementColumns = [
    {
        key: "product",
        label: "Produtos"
    },
    {
        key: "movement",
        label: "Movimentações"
    },
    {
        key: "quantity",
        label: "Quantidade"
    },
    {
        key: "responsible",
        label: "Responsável"
    },
    {
        key: "time",
        label: "Horário"
    }
];


// Dados inicialmente vazios
const movements = [];


// Renderização da tabela
const movementsTable = document.getElementById("movements-table");

movementsTable.innerHTML = Table({
    columns: movementColumns,
    data: movements,
    emptyMessage: "Nenhuma movimentação encontrada.",
    emptyDescription: "Aguardando integração com o banco de dados."
});


// ======================================
// FILTRO DE PERÍODO
// ======================================

const periodFilter = document.getElementById("period-filter");

periodFilter.addEventListener("change", (event) => {

    const period = event.target.value;

    console.log("Período selecionado:", period);

});


// ======================================
// DOWNLOAD DE RELATÓRIO
// ======================================

const downloadButton = document.getElementById("download-report");

downloadButton.addEventListener("click", () => {

    console.log("Solicitando download do relatório...");

});