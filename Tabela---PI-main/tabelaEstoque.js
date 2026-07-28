function criarTabelaEstoque() {
    return `
        <div class="pesquisa">
            <input type="text" id="buscarIngrediente" placeholder="Buscar ingrediente..." >
        </div>

        <table class="tabela-estoque">
            <thead>
                <tr>
                    <th>Ingrediente</th>
                    <th>Quantidade</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Peito de frango</td>
                    <td>1 Kg</td>
                </tr>

                <tr>
                    <td>Leite Integral</td>
                    <td>2 L</td>
                </tr>

                <tr>
                    <td>Chocolate em pó</td>
                    <td>500 g</td>
                </tr>

                <tr>
                    <td>Leite condensado</td>
                    <td>500 ml</td>
                </tr>

                <tr>
                    <td>Açúcar</td>
                    <td>100 g</td>
                </tr>

                <tr>
                    <td>Sal</td>
                    <td>100 g</td>
                </tr>

                <tr>
                    <td>Fermento em pó</td>
                    <td>1 Uni</td>
                </tr>

                <tr>
                    <td>Baunilha</td>
                    <td>50 g</td>
                </tr>
            </tbody>
        </table>
    `;
}

const container = document.getElementById("tabela-container");

container.innerHTML = criarTabelaEstoque();