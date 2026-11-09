# Senac Gastronomia e Estoque

Sistema com proposito de controle e manuseio do estoque de ingredientes e alimentos para setor de compra, auxiliares e docentes do setor de Gastronomia, por conta de grande perda de ingredientes e comida pronta de aulas praticadas.

Sistema trará controle sobre alimentos perecíveis com datas  de validade e datas que marcam abertura de produtos e embalagens, além de monitorar quando um prato pronto foi feito e se a sala ira retomar com a receita deixada pelos alunos.

Docente: Vai ter controle de estoque, pode visualizar o que tem no estoque, e fazer pedidos com data marcada.

Figma de tela do Eduardo e Leonardo: https://www.figma.com/proto/B7yyHYnUbJs0MQi3siQiu4/FrontEnd---Cozinha?node-id=11-3431&p=f&t=01YJTMqJnHjAh4fp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A3431

Figma de WireFrame de Estoque da Ilma: https://www.figma.com/design/Y68EOPmvaA1eL3IABnUHHH/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=WQ1mC1VyzBMvSWqP-0

## Componente da tabela de solicitação

O Web Component `<tabela-carrinho>` fica em `src/view/components/tabela.js` e é usado pela página auxiliar em `src/view/auxiliar/relatoriosAuxiliar.html`. A página carrega o inicializador como módulo, que registra e valida o componente.

O componente não carrega ingredientes por conta própria. A página que o integra deve atribuir a propriedade `ingredients`, contendo objetos com `ingrediente` e, opcionalmente, `descricao`:

```js
const tabela = document.querySelector("tabela-carrinho");

tabela.ingredients = [
    { ingrediente: "Leite", descricao: "Integral" }
];

tabela.addEventListener("items-change", event => {
    console.log(event.detail.items);
});
```

`items-change` borbulha a partir do componente e traz os itens em `event.detail.items`. Cada item contém `ingrediente`, `descricao`, `quantidade` e `observacao`. A tela consumidora pode usar esse evento para integrar a persistência; a API de ingredientes e solicitações ainda precisa ser definida antes de implementar essa integração com o backend.