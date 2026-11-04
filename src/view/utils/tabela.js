class TabelaCarrinho extends HTMLElement {
    constructor() {
        super();
        this._ingredients = [];
        this._items = [];
        this._initialized = false;
    }

    connectedCallback() {
        if (this._initialized) return;

        this.innerHTML = `
            <section class="tc-panel" aria-labelledby="tc-ingredients-title">
                <h2 class="tc-title" id="tc-ingredients-title">Ingredientes disponíveis</h2>
                <label class="tc-search">
                    <span class="tc-visually-hidden">Buscar ingrediente</span>
                    <input class="tc-search-input" type="search" placeholder="Buscar ingrediente">
                </label>
                <div class="tc-table-scroll">
                    <table class="tc-table tc-ingredients-table">
                        <thead>
                            <tr>
                                <th scope="col">Ingrediente</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody class="tc-ingredients-body"></tbody>
                    </table>
                </div>
            </section>

            <section class="tc-panel" aria-labelledby="tc-cart-title">
                <h2 class="tc-title" id="tc-cart-title">Resumo da solicitação</h2>
                <div class="tc-table-scroll">
                    <table class="tc-table tc-cart-table">
                        <thead>
                            <tr>
                                <th scope="col">Ingrediente</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Observações</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody class="tc-items-body"></tbody>
                        <tfoot>
                            <tr>
                                <th scope="row" colspan="4">Total de itens</th>
                                <td class="tc-total">0</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button class="tc-reset-button" type="button" data-action="reset">Limpar itens</button>
            </section>
        `;

        this._ingredientsBody = this.querySelector(".tc-ingredients-body");
        this._itemsBody = this.querySelector(".tc-items-body");
        this._total = this.querySelector(".tc-total");
        this._searchInput = this.querySelector(".tc-search-input");

        this.addEventListener("click", event => this.handleClick(event));
        this.addEventListener("input", event => this.handleInput(event));
        this._initialized = true;
        this.renderIngredients();
        this.renderItems();
    }

    get ingredients() {
        return this._ingredients.map(ingredient => ({ ...ingredient }));
    }

    set ingredients(value) {
        if (!Array.isArray(value)) {
            throw new TypeError("ingredients deve ser um array.");
        }

        this._ingredients = value.map(ingredient => ({ ...ingredient }));
        if (this._initialized) this.renderIngredients();
    }

    get items() {
        return this._items.map(item => ({ ...item }));
    }

    set items(value) {
        if (!Array.isArray(value)) {
            throw new TypeError("items deve ser um array.");
        }

        this._items = value.map(item => ({ ...item }));
        if (this._initialized) this.renderItems();
    }

    handleClick(event) {
        const button = event.target.closest("button[data-action]");
        if (!button || !this.contains(button)) return;

        if (button.dataset.action === "add") {
            const row = button.closest("tr");
            const ingredient = this._ingredients[Number(row.dataset.index)];
            const quantityInput = row.querySelector(".tc-quantity-input");
            const quantity = quantityInput.value.trim();

            if (!quantity) {
                quantityInput.setCustomValidity("Informe a quantidade.");
                quantityInput.reportValidity();
                quantityInput.focus();
                return;
            }

            quantityInput.setCustomValidity("");
            this._items.push({
                ingrediente: ingredient.ingrediente,
                descricao: ingredient.descricao || "",
                quantidade,
                observacao: ""
            });
            quantityInput.value = "";
            this.renderItems();
            this.dispatchItemsChange();
        } else if (button.dataset.action === "remove") {
            this._items.splice(Number(button.dataset.index), 1);
            this.renderItems();
            this.dispatchItemsChange();
        } else if (button.dataset.action === "reset") {
            this._items = [];
            this.renderItems();
            this.dispatchItemsChange();
        }
    }

    handleInput(event) {
        if (event.target === this._searchInput) {
            this.filterIngredients(event.target.value);
            return;
        }

        if (!event.target.matches(".tc-observation-input")) return;

        const index = Number(event.target.dataset.index);
        if (!this._items[index]) return;

        this._items[index].observacao = event.target.value;
        this.dispatchItemsChange();
    }

    renderIngredients() {
        this._ingredientsBody.replaceChildren();

        if (this._ingredients.length === 0) {
            this._ingredientsBody.append(this.createEmptyRow(4, "Nenhum ingrediente carregado."));
            return;
        }

        this._ingredients.forEach((ingredient, index) => {
            const row = document.createElement("tr");
            row.dataset.index = String(index);
            row.append(
                this.createCell(ingredient.ingrediente || ""),
                this.createCell(ingredient.descricao || "")
            );

            const quantityCell = document.createElement("td");
            const quantityInput = document.createElement("input");
            quantityInput.className = "tc-quantity-input";
            quantityInput.type = "text";
            quantityInput.setAttribute("aria-label", `Quantidade de ${ingredient.ingrediente || "ingrediente"}`);
            quantityCell.append(quantityInput);
            row.append(quantityCell);

            const actionCell = document.createElement("td");
            const addButton = document.createElement("button");
            addButton.className = "tc-action-button";
            addButton.type = "button";
            addButton.dataset.action = "add";
            addButton.textContent = "Adicionar";
            actionCell.append(addButton);
            row.append(actionCell);
            this._ingredientsBody.append(row);
        });

        this.filterIngredients(this._searchInput.value);
    }

    renderItems() {
        this._itemsBody.replaceChildren();

        if (this._items.length === 0) {
            this._itemsBody.append(this.createEmptyRow(5, "Nenhum item na solicitação."));
        } else {
            this._items.forEach((item, index) => {
                const row = document.createElement("tr");
                row.append(
                    this.createCell(item.ingrediente || ""),
                    this.createCell(item.descricao || ""),
                    this.createCell(item.quantidade || "")
                );

                const observationCell = document.createElement("td");
                const observationInput = document.createElement("input");
                observationInput.className = "tc-observation-input";
                observationInput.type = "text";
                observationInput.value = item.observacao || "";
                observationInput.dataset.index = String(index);
                observationInput.setAttribute("aria-label", `Observações de ${item.ingrediente || "ingrediente"}`);
                observationCell.append(observationInput);
                row.append(observationCell);

                const actionCell = document.createElement("td");
                const removeButton = document.createElement("button");
                removeButton.className = "tc-action-button tc-remove-button";
                removeButton.type = "button";
                removeButton.dataset.action = "remove";
                removeButton.dataset.index = String(index);
                removeButton.textContent = "Remover";
                actionCell.append(removeButton);
                row.append(actionCell);
                this._itemsBody.append(row);
            });
        }

        this._total.textContent = String(this._items.length);
    }

    createCell(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        return cell;
    }

    createEmptyRow(columnCount, message) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = columnCount;
        cell.className = "tc-empty-message";
        cell.textContent = message;
        row.append(cell);
        return row;
    }

    filterIngredients(query) {
        const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");

        this._ingredientsBody.querySelectorAll("tr[data-index]").forEach(row => {
            const ingredient = this._ingredients[Number(row.dataset.index)];
            const searchableText = `${ingredient.ingrediente || ""} ${ingredient.descricao || ""}`
                .toLocaleLowerCase("pt-BR");
            row.hidden = !searchableText.includes(normalizedQuery);
        });
    }

    dispatchItemsChange() {
        this.dispatchEvent(new CustomEvent("items-change", {
            bubbles: true,
            composed: true,
            detail: { items: this.items }
        }));
    }
}

customElements.define("tabela-carrinho", TabelaCarrinho);
