# Senac Gastronomia e Estoque

Sistema com proposito de controle e manuseio do estoque de ingredientes e alimentos para setor de compra, auxiliares e docentes do setor de Gastronomia, por conta de grande perda de ingredientes e comida pronta de aulas praticadas.

Sistema trará controle sobre alimentos perecíveis com datas  de validade e datas que marcam abertura de produtos e embalagens, além de monitorar quando um prato pronto foi feito e se a sala ira retomar com a receita deixada pelos alunos.

Docente: Vai ter controle de estoque, pode visualizar o que tem no estoque, e fazer pedidos com data marcada.

Figma de tela do Eduardo e Leonardo: https://www.figma.com/proto/B7yyHYnUbJs0MQi3siQiu4/FrontEnd---Cozinha?node-id=11-3431&p=f&t=01YJTMqJnHjAh4fp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A3431

Figma de WireFrame de Estoque da Ilma: https://www.figma.com/design/Y68EOPmvaA1eL3IABnUHHH/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=WQ1mC1VyzBMvSWqP-0

## Componente da tabela de solicitação

A tela em `tabelaCarrinho/` registra o Web Component `<tabela-carrinho>`, implementado em JavaScript sem framework. Ele cria tabelas HTML reais (`table`, `thead`, `tbody`, `tr`, `th` e `td`) e não vem com ingredientes predefinidos.

Para usar o componente em outra página, inclua o CSS e o JavaScript e coloque `<tabela-carrinho></tabela-carrinho>` no HTML. Depois, forneça os ingredientes:

```html
<link rel="stylesheet" href="tabelaCarrinho/tabela-carrinho.css">
<script src="tabelaCarrinho/tabela.js" defer></script>
<tabela-carrinho></tabela-carrinho>
```

```js
const tabela = document.querySelector("tabela-carrinho");

tabela.ingredients = [
    { ingrediente: "Leite", descricao: "Integral" }
];

tabela.addEventListener("items-change", event => {
    console.log(event.detail.items);
});
```

Cada ingrediente usa `ingrediente` e `descricao`. Os itens da solicitação usam `ingrediente`, `descricao`, `quantidade` e `observacao`. O evento `items-change` é emitido quando os itens são adicionados, removidos, limpos ou quando uma observação muda; a tela que consome o componente pode usar esse evento para integrar a persistência do backend.